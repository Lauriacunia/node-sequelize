import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../persistence/product.repository.js";

const getAll = async () => {
  return await getProducts();
};

const getById = async (id) => {
  return await getProductById(id);
};

const create = async (product) => {
  return await createProduct(product);
};

const update = async (id, product) => {
  return await updateProduct(id, product);
};

const deleteById = async (id) => {
  return await deleteProduct(id);
};

export { getAll, getById, create, update, deleteById };
