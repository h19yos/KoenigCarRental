package controllers

import (
	"errors"
	"net/http"

	BrandRepository "car-rental/repositories/brands"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Show(context *gin.Context) {
	// get the id from the path params
	id := context.Param("id")

	// get the brand by id
	brand, err := BrandRepository.GetById(id)

	// return error response if there is an error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			context.JSON(http.StatusNotFound, gin.H{
				"error": "Brand not found",
			})

			return
		}

		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// return the brand
	context.JSON(http.StatusOK, gin.H{
		"brand": brand,
	})
}
