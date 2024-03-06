package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetById(id string) (models.User, error) {
	var user models.User
	err := initializers.DB.Where("id = ?", id).Take(&user).Error

	return user, err
}
