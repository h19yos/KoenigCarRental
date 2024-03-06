package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetById(id string) (models.Car, error) {
	var car models.Car
	err := initializers.DB.Where("id = ?", id).Preload("Brand").Take(&car).Error

	return car, err
}
