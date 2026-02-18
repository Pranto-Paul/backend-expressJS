import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './utils/db.js';

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/health-checkup', (req, res) => {
  res.send('server is up and running!');
});

dbConnect();
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
