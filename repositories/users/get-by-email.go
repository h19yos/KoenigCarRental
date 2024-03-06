package repositories

import (
	"car-rental/initializers"
	"car-rental/models"
)

func GetByEmail(email string) (models.User, error) {
	var user models.User
	err := initializers.DB.Where("email = ?", email).Take(&user).Error

	return user, err
}
