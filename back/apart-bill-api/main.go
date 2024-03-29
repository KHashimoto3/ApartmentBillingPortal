package main

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

var db *sql.DB
var err error

// 支払い
type billing struct {
	BillingId       int    `json:"billingId"`
	UserId          string `json:"userId"`
	UseAmount       int    `json:"useAmount"`
	Price           int    `json:"price"`
	BeforeCarryOver int    `json:"beforeCarryOver"`
	CarryOverType   string `json:"carryOverType"`
	CarryOverPrice  int    `json:"carryOverPrice"`
	DateId          int    `json:"dateId"`
	PaidPrice       int    `json:"paidPrice"`
	Paid            int    `json:"paid"`
}

type payment_date struct {
	DateId 			int    	`json:"dateId"`
	BillingYear 	int		`json:"billingYear"`
	BillingMonth 	int 	`json:"billingMonth"`
	PaymentDate 	int 	`json:"paymentDate"`
}

func hello(c *gin.Context) {
	c.String(200, "hello!")
}

// 請求情報の一覧を取得する
func getBillingList(c *gin.Context) {
	rows, err := db.Query("SELECT * FROM billing;")
	if err != nil {
		c.JSON(404, gin.H{"error": "レコードが存在しません。"})
		return
	}
	var bills []billing
	for rows.Next() {
		var bill billing
		if err := rows.Scan(&bill.BillingId, &bill.UserId, &bill.UseAmount, &bill.Price, &bill.BeforeCarryOver, &bill.CarryOverType, &bill.CarryOverPrice, &bill.DateId, &bill.PaidPrice, &bill.Paid); err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		bills = append(bills, bill)
	}
	c.JSON(200, bills)
}

// 渡されたパラメータのuserIdに該当する請求データを1件取得する
func getBillingRecord(c *gin.Context) {
	userId := c.Query("userId")
	dateId := c.Query("dateId")

	if userId == "" || dateId == "" {
		c.JSON(400, gin.H{"error": "パラメータが足りません。"})
		return
	}

	var bill billing
	err := db.QueryRow("SELECT * FROM billing WHERE user_id = ? and date_id = ?", userId, dateId).
		Scan(&bill.BillingId, &bill.UserId, &bill.UseAmount, &bill.Price, &bill.BeforeCarryOver, &bill.CarryOverType, &bill.CarryOverPrice, &bill.DateId, &bill.PaidPrice, &bill.Paid)
	if errors.Is(err, sql.ErrNoRows) {
		//レコードがなかったときのエラー
		c.JSON(404, gin.H{"error": "レコードが存在しません。"})
		return
	}
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	//レコードが見つかった場合の処理
	c.JSON(200, bill)
}

func updateBillingRecord(c *gin.Context) {
	//受信した新しい支払いデータをbillに格納
	var bill billing
	if err := c.BindJSON(&bill); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	//データベースを更新
	_, err := db.Exec("UPDATE billing SET carry_over_type = ?, carry_over_price = ? WHERE billing_id = ?", bill.CarryOverType, bill.CarryOverPrice, bill.BillingId)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
	}
	//正常に更新できた場合の処理
	c.JSON(200, gin.H{"status": "Updated"})
}

func getPaymentDateId(c *gin.Context) {
	year := c.Query("year")
	month := c.Query("month")

	if year == "" || month == "" {
		c.JSON(400, gin.H{"error": "パラメータが足りません。"})
		return
	}

	var date payment_date
	err := db.QueryRow("SELECT * FROM payment_date WHERE billing_year = ? and billing_month = ?", year, month).
		Scan(&date.DateId, &date.BillingYear, &date.BillingMonth, &date.PaymentDate)
	if errors.Is(err, sql.ErrNoRows) {
		//レコードがなかったときのエラー
		c.JSON(404, gin.H{"error": "レコードが存在しません。"})
		return
	}
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	//レコードが見つかった場合の処理
	//dateIdを返す
	c.JSON(200, gin.H{"dateId": date.DateId})
}

func registPaymentDate(c *gin.Context) {
	//受信した新しい支払い日データをpayment_dateに格納
	var date payment_date
	if err := c.BindJSON(&date); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	//データベースを更新
	_, err := db.Exec("INSERT INTO payment_date (billing_year, billing_month, payment_date) VALUES (?, ?, ?)", date.BillingYear, date.BillingMonth, date.PaymentDate)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
	}
	//正常に更新できた場合の処理
	c.JSON(200, gin.H{"status": "Updated"})
}

func main() {
	router := gin.Default()

	// CORS設定
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173") // ReactアプリのURLに置き換える
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	//環境設定ファイルの読み込み
	err = godotenv.Load("config.env")
	if err != nil {
		log.Fatal("エラー: 環境設定ファイルを読み込めません！")
	}

	//設定情報を取る
	userName := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", userName, password, host, port, dbName)

	//データベース接続
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	router.GET("/", hello)
	router.GET("/get-bill-list", getBillingList)
	router.GET("/billing", getBillingRecord)
	router.POST("/billing/update", updateBillingRecord)
	router.GET("/payment/date", getPaymentDateId)
	router.POST("/payment/add", registPaymentDate)

	router.Run(":8080")
}
