package controllers

import (
	"net/http"

	CarRepository "car-rental/repositories/cars"
	"github.com/gin-gonic/gin"
)

func Index(context *gin.Context) {
	// get the cars
	cars, err := CarRepository.GetAll()

	// return error response if there is an error
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// return the cars
	context.JSON(http.StatusOK, gin.H{
		"cars": cars,
	})
}
