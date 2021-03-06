module.exports = function(sequelize, DataTypes) {
	var userquiz = sequelize.define(
		'userquiz',
		// columns of table
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id'
				}
			},
			quizId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'quiz',
					key: 'id'
				}
			},
			score: {
				type: DataTypes.DECIMAL(5, 2)
			}
		},
		// options
		{
			freezeTableName: true
		}
	) // closes define

	// Class Methods
	userquiz.associate = function(models) {
		userquiz.belongsTo(models.quiz, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		})
		userquiz.belongsTo(models.user, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		})
	}
	return userquiz
}
