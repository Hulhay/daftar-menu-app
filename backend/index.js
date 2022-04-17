import express from "express";
import db from "./config/database.js"

const app = express();

try {
	await db.authenticate();
	console.log("Database connected");
} catch (error) {
	console.log("Connection Error:", error);
}

app.get('/', (req, res) => {
	res.send("welcome");
});

app.listen(5000, () => console.log("server running at port 5000"));