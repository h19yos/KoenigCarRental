package controllers

import (
	"net/http"
	"strings"

	"car-rental/initializers"
	UserMappers "car-rental/mappers/users"
	"car-rental/models"
	"car-rental/utils"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Register(context *gin.Context) {
	// get data from body
	var body RegisterBody
	if err := context.ShouldBindJSON(&body); err != nil {
		context.JSON(http.StatusUnprocessableEntity, gin.H{
			"error": err.Error(),
		})

		return
	}

	// hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// create user and save in database
	user := models.User{
		Name:     body.Name,
		Email:    body.Email,
		Password: string(hash),
	}

	result := initializers.DB.Create(&user)

	// return error response if there is an error
	if result.Error != nil {
		errorMessage := result.Error.Error()
		if strings.Contains(errorMessage, "unique constraint") {
			context.JSON(http.StatusConflict, gin.H{
				"error": "User e-mail already registered",
			})

			return
		}

		context.JSON(http.StatusInternalServerError, gin.H{
			"error": errorMessage,
		})

		return
	}

	// generate jwt
	accessToken, err := utils.GenerateAccessToken(user.Id)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// return new user
	context.JSON(http.StatusCreated, gin.H{
		"accessToken": accessToken,
		"user":        UserMappers.ToBaseViewModel(user),
	})
}
