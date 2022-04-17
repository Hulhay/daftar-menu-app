import { Sequelize } from "sequelize";

const db = new Sequelize('daftar_menu_db', 'root', '', {
	host: "localhost",
	dialect: "mysql"
});

export default db;