// itemController.js
import Item from '../models/Item.js';

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  const {name, timeLine, notes, link, status} = req.body
  const item = new Item({name, timeLine, notes, link, status});
  try {
    
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    console.log(req.body)
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const itemController = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem
};

export default itemController;
