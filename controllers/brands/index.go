package controllers

import (
	"net/http"

	BrandRepository "car-rental/repositories/brands"
	"github.com/gin-gonic/gin"
)

func Index(context *gin.Context) {
	// get the brands
	brands, err := BrandRepository.GetAll()

	// return error response if there is an error
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// return the brands
	context.JSON(http.StatusOK, gin.H{
		"brands": brands,
	})
}
