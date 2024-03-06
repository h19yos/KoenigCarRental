package utils

import (
	"car-rental/models"
	"github.com/gin-gonic/gin"
)

func GetUserFromContext(context *gin.Context) models.User {
	maybeUser, _ := context.Get("user")
	return maybeUser.(models.User)
}
