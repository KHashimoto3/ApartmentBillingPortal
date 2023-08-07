package main

import (
	"github.com/gin-gonic/gin"
)

func hello(c *gin.Context) {
	c.String(200, "hello, ワールド！")
}

func main() {
	router := gin.Default()
	router.GET("/hello", hello)

	router.Run(":8080")
}
