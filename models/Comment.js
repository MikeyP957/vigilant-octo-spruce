const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
          //create comment text
          message: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        blogPost_id: {
            type: DataTypes.INTEGER,
            allowNull: fase,
            references: {
                model: 'blogpost',
                key: 'id',
                unique: true,
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: fase,
            references: {
                model: 'user',
                key: 'id',
                unique: true,
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    },
)

module.exports = Comment;