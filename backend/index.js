import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";

const app = express();

try {
	await db.authenticate();
	console.log("Database connected");
} catch (error) {
	console.log("Connection Error:", error);
}

app.use(express.json());
app.use('/products' ,productRoutes);


app.listen(5000, () => console.log("server running at port 5000"));