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

// 生徒のデータ形式
type student struct {
	NO    int    `json:"no"`
	ID    string `json:"id"`
	Name  string `json:"name"`
	Grade string `json:"grade"`
}

func hello(c *gin.Context) {
	c.String(200, "hello, ワールド！")
}

func helloName(c *gin.Context) {
	name := c.Query("name")
	text := "hello, " + name
	c.String(200, text)
}

func main() {
	//環境設定ファイルの読み込み
	err := godotenv.Load("config.env")
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
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	router := gin.Default()
	router.GET("/hello", hello)
	router.GET("/hello-name", helloName)

	router.Run(":8080")
}
