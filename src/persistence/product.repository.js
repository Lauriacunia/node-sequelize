import Product from "./models/product.model.js";

export const createProduct = async (product) => {
  return await Product.create(product);
};

export const getProducts = async () => {
  return await Product.findAll();
};

export const getProductById = async (id) => {
  return await Product.findByPk(id);
};

export const updateProduct = async (id, product) => {
  return await Product.update(product, {
    where: { id },
  });
};

export const deleteProduct = async (id) => {
  return await Product.destroy({
    where: { id },
  });
};
