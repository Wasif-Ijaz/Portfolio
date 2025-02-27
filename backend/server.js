import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import workRoutes from './routes/workRoutes.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/works', workRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server stared on port ${port}`);
});
