package controllers

import (
	"net/http"

	RentalRepository "car-rental/repositories/rentals"
	"car-rental/utils"
	"github.com/gin-gonic/gin"
)

func MyRentals(context *gin.Context) {
	// get query params
	carId := context.Query("CarId")
	startsAt := context.Query("StartsAt")
	endsAt := context.Query("EndsAt")

	// get user from request
	user := utils.GetUserFromContext(context)

	// get the user rentals
	rentals, err := RentalRepository.GetAll(RentalRepository.GetAllParams{
		UserId:   user.Id.String(),
		StartsAt: startsAt,
		CarId:    carId,
		EndsAt:   endsAt,
	})

	// return error response if there is an error
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})

		return
	}

	// return user and jwt
	context.JSON(http.StatusOK, gin.H{
		"rentals": rentals,
	})
}
