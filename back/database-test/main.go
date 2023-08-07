package main

import (
	"github.com/gin-gonic/gin"
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
	router := gin.Default()
	router.GET("/hello", hello)
	router.GET("/hello-name", helloName)

	router.Run(":8080")
}
