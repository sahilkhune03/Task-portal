import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import itemRouter from './routes/itemRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/items', itemRouter);

connect(process.env.MONGO_URI, { dbName: 'Drag_N_Drop' })
  .then(() => {
    console.log("Mongoose connected successfully.");
  })
  .catch((err) => {
    console.error("Mongoose connection failed:", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
