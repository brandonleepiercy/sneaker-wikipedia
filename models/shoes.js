module.exports = function(sequelize, DataTypes) {
    const Shoe = sequelize.define("Shoe", {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      release_date: DataTypes.STRING,
      collaborators: DataTypes.STRING,
      color: DataTypes.STRING,
      sizing_type: DataTypes.STRING,
      sizing_gender: DataTypes.STRING,
      min_size: DataTypes.INTEGER,
      max_size: DataTypes.INTEGER,
      price_min: DataTypes.INTEGER,
      price_max: DataTypes.INTEGER,
      description: DataTypes.STRING,
      style: DataTypes.STRING,
      product_link: DataTypes.STRING
    });
    return Shoe;
};