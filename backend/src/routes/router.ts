import express, { Request, Response } from "express"
import { getProducts } from "../controller/getProducts";
import { productSearch } from "../controller/productSearch";

export const router = express.Router();

router.get(`/getProducts`, getProducts)
router.get(`/search`, productSearch)