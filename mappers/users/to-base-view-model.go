package mappers

import (
	"car-rental/models"
	UserViewModels "car-rental/view-models/users"
)

func ToBaseViewModel(user models.User) UserViewModels.Base {
	return UserViewModels.Base{
		Id:        user.Id,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
		Name:      user.Name,
		Email:     user.Email,
	}
}
