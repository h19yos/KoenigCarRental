package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetById(id string) (models.Brand, error) {
	var brand models.Brand
	err := initializers.DB.Where("id = ?", id).Preload("Cars").Take(&brand).Error

	return brand, err
}
