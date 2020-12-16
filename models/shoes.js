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
      description: DataTypes.TEXT,
      style: DataTypes.STRING,
      product_link: DataTypes.STRING
    },
    {
      timestamps: false
    });
    Shoe.associate = function(models) {
      // Associating Shoes with reviews
      // When an Shoe is deleted, also delete any associated reviews
      Shoe.hasMany(models.Review, {
        onDelete: "cascade"
      });
    };
    return Shoe;
};