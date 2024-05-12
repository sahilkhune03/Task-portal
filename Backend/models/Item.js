// item.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  timeLine: {
    type: String,
    required: true,
  },
  notes: String,
  link: String,
  status: {
    type: String,
    enum: ['TODO', 'Working', 'Completed'],
    default: 'TODO' 
  }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
