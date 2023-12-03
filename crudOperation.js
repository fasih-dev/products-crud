const Product = require("./product");

const createProduct = async (title, details, price) => {
  console.log("Product created");
  const product = new Product({ title, details, price });
  await product.save();
  return product;
};

const getAllProducts = async () => {
  console.log("Get all products");
  const productList = await Product.find();
  return productList;
};

const deleteProduct = async (id) => {
  console.log("Delete product");
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

const updateProduct = async (id, title, details, price) => {
  console.log("Update product");
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { title, details, price },
    { new: true }
  );
  return updatedProduct;
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
};
