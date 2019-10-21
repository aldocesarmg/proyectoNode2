'use strict';
module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre_producto: DataTypes.STRING,
        cantidad_existencia: DataTypes.INTEGER,
        precio: DataTypes.DOUBLE,
    },{
        timestamps: false,
        tableName: 'productos'
    });
    Products.associate = function(models){
        // associations can be defined here
    };
    return Products;
};