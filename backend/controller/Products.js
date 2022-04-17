import Product from "../models/productModels.js";

export const getAllProducts = async (req, res) => {
	
	try {
		const products = await Product.findAll();
		res.json(products);
	} catch (error) {
		res.json({
			message: error.message
		});
	}	

}