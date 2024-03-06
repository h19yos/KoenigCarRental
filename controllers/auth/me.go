package controllers

import (
	"net/http"

	UserMappers "car-rental/mappers/users"
	"car-rental/utils"
	"github.com/gin-gonic/gin"
)

func Me(context *gin.Context) {
	// get user from request
	user := utils.GetUserFromContext(context)

	// return user and jwt
	context.JSON(http.StatusOK, gin.H{
		"user": UserMappers.ToBaseViewModel(user),
	})
}
