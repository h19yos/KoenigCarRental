package models

import (
	"time"

	"github.com/google/uuid"
)

type Brand struct {
	Id        uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()"`
	CreatedAt time.Time `gorm:"notNull"`
	UpdatedAt time.Time `gorm:"notNull"`
	Name      string    `gorm:"type:varchar(255);uniqueIndex;notNull"`

	Cars []Car
}
