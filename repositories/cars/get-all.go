package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetAll() ([]models.Car, error) {
	var cars []models.Car
	err := initializers.
		DB.
		Preload("Brand").
		Order("created_at asc").
		Find(&cars).
		Error

	return cars, err
}
