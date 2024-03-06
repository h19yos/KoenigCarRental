package main

import (
	"car-rental/initializers"
	"car-rental/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
}

func main() {
	initializers.DB.AutoMigrate(
		&models.Brand{},
		&models.Car{},
		&models.User{},
		&models.Rental{},
	)
}
