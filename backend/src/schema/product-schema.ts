import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    productName: {
        type: "string",
        require: true
    },
    productDescription: {
        type: "string",
        require: true
    },
    productPrice: {
        type: "string",
        require: true
    },
    productCategory: {
        type: "string",
        require: true
    },
    productRating: {
        type: "string",
        require: true
    },
    productAvailability: {
        type: "string",
        require: true
    },
})

export const Product = mongoose.model("Products", productSchema);