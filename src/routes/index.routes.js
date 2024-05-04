import { Router } from "express";
import productRoutes from "./product.routes.js";

const router = Router();

router.use("/products", productRoutes);

export default router;
