package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetById(id string) (models.Rental, error) {
	var rental models.Rental
	err := initializers.DB.Where("id = ?", id).Take(&rental).Error

	return rental, err
}
