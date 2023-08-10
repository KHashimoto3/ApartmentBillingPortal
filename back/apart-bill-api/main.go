package main

import (
	"database/sql"
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
	BillingId       string `json:"billing_id"`
	UserId          string `json:"user_id"`
	UseAmount       int    `json:"use_amount"`
	Price           int    `json:"price"`
	BeforeCarryOver int    `json:"before_carry_over"`
	CarryOverType   string `json:"carry_over_type"`
	CarryOverPrice  int    `json:"carry_over_price"`
	FinalPrice      int    `json:"final_price"`
	DateId          int    `json:"date_id"`
	Paid            int    `json:"paid"`
}

func hello(c *gin.Context) {
	c.String(200, "hello!")
}

func main() {
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

	router := gin.Default()
	router.GET("/", hello)

	router.Run(":8080")
}
