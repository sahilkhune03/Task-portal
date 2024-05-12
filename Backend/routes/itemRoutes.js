// itemRoutes.js
import express from "express";
const router = express.Router();
import itemController from "../controllers/itemController.js";

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.post('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

export default router
