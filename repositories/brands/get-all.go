package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetAll() ([]models.Brand, error) {
	var brands []models.Brand
	err := initializers.
		DB.
		Preload("Cars").
		Order("created_at asc").
		Find(&brands).
		Error

	return brands, err
}
