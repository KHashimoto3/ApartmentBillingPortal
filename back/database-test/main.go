package main

import (
	"github.com/gin-gonic/gin"
)

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
