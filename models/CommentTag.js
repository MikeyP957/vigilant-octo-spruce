const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class CommentTag extends Model {}

CommentTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          //who wrote the comment
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: true,
            }
        },
        //what blog post the comment is attatched to
        blogPost_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'blogPost',
                key:'id',
                unique: true,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag'
      }
)


module.exports = CommentTag;