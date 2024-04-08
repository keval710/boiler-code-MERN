import { Request, Response } from "express";
import { Product } from "../schema/product-schema";

export const productSearch = async (req: Request, res: Response) => {

    try {
        const result = await Product.find({ productName: req.query.q })
        console.log(req.query);

        if (!result) {
            return res.status(400).json({ message: "No product found" })
        } else {
            return res.status(200).json(result)
        }
    } catch (error: any) {
        throw new Error(error)
    }

}