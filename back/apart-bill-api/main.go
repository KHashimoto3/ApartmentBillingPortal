package main

import (
	"github.com/gin-gonic/gin"
)

func hello(c *gin.Context) {
	c.String(200, "hello!")
}

func main() {
	router := gin.Default()
	router.GET("/", hello)

	router.Run(":8080")
}
