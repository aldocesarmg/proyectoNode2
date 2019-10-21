'use strict';
module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define('Products', {
        idproducto: {
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
    Productos.associate = function(models){
        // associations can be defined here
    };
    return Products;
};