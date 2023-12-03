const express = require("express");
const mongoose = require("mongoose");
const {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
} = require("./crudOperation");
const { create } = require("domain");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/products", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        console.log("Connected to the database");

        // Example usage
        let product = await createProduct("dell", "laptop", 40000);
        console.log(product);
        const products = await getAllProducts();
        console.log(products)
        const updatedProduct = await updateProduct("656cb9406ec717b17d1f48fb", "apple", "laptop", 9000000);
        console.log(updatedProduct);
        let deleteProduct = await deleteProduct("656cb9406ec717b17d1f48fb");
        console.log(deleteProduct);


    })
    .catch((error) => {
        console.error(`Could not connect to the database: ${error}`);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
