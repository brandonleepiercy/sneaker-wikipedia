module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      reviewer_name: DataTypes.STRING,
      verified_buyer: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
      comment: DataTypes.STRING
    });
    Review.associate = function(models) {
      // review should belong to a shoe
      // A review can't be created without a shoe due to the foreign key constraint
      Review.belongsTo(models.Shoe, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Review;
};