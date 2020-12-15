module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      name: DataTypes.STRING,
      verified_buyer: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
      comment: DataTypes.STRING
    });
    return Review;
};