import {
  getAll,
  getById,
  create,
  update,
  deleteById,
} from "../services/product.service.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await create(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    await update(id, product);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
