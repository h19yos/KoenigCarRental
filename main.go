package main

import (
	AuthController "car-rental/controllers/auth"
	BrandController "car-rental/controllers/brands"
	CarController "car-rental/controllers/cars"
	RentalController "car-rental/controllers/rentals"
	"car-rental/initializers"
	"car-rental/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
}

func main() {
	router := gin.Default()

	// Set up CORS middleware
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Allow requests from the frontend origin
	router.Use(cors.New(config))

	// brands
	router.GET("/brands", BrandController.Index)
	router.POST("/brands", BrandController.Create)
	router.GET("/brands/:id", BrandController.Show)
	router.PUT("/brands/:id", BrandController.Update)
	router.DELETE("/brands/:id", BrandController.Delete)

	// cars
	router.GET("/cars", CarController.Index)
	router.POST("/cars", CarController.Create)
	router.GET("/cars/:id", CarController.Show)
	router.PUT("/cars/:id", CarController.Update)
	router.DELETE("/cars/:id", CarController.Delete)

	// auth
	router.POST("/auth/register", AuthController.Register)
	router.POST("/auth/login", AuthController.Login)
	router.GET("/auth/me", middleware.RequireAuth, AuthController.Me)
	router.GET(
		"/auth/me/rentals",
		middleware.RequireAuth,
		AuthController.MyRentals,
	)

	// rentals
	router.GET("/rentals", RentalController.Index)
	router.POST("/rentals", middleware.RequireAuth, RentalController.Create)
	router.PATCH(
		"/rentals/:id/cancel",
		middleware.RequireAuth,
		RentalController.Cancel,
	)

	router.Run()
}
