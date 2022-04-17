import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
	photo: {
		type: DataTypes.STRING
	},
	title: {
		type: DataTypes.STRING
	},
	price: {
		type: DataTypes.DOUBLE
	},
	stock: {
		type: DataTypes.INTEGER
	}

}, {
	freezeTableName: true
});

export default Product;