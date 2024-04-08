import { Request, Response } from "express";
import { Product } from "../schema/product-schema";

export const getProducts = async (req: Request, res: Response) => {
    try {
        // Get the products data from the database.
        const products = await Product.find({})
        if (products) {
            return res.status(200).send(products);
        } else {
            return res.status(400).json({ error: "something went wrong" })
        }
    } catch (error: any) {
        throw new Error(error)
    }
}