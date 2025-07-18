import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
const app = express()
import morgan from "morgan";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

//router
import jobRouter from '../Jobify/routes/jobRouter.js';
import authRouter from '../Jobify/routes/authRouter.js';
import userRouter from '../Jobify/routes/userRouter.js';

import cloudinary from 'cloudinary';

//public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const __dirname = dirname(fileURLToPath(import.meta.url));


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(cookieParser());
app.use(express.json());

app.get('/' , ( req, res ) => {
    res.send('Hello World')
});


app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.use('/api/v1/jobs',authenticateUser, jobRouter);
app.use('/api/v1/users',authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
})

//GET ALL JOBS
// app.get('/api/v1/jobs', );

//CREATE ALL JOBS
// app.post('/api/v1/jobs', );

//GET SINGLE JOB
// app.get('/api/v1/jobs/:id', );

//EDIT JOB
// app.patch('/api/v1/jobs/:id', );

//DELETE JOB
// app.delete('/api/v1/jobs/:id', );


app.use('*',(req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100

try {

  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on Port ${port}....`);
  });

} catch (error) {
  console.log(error);
  process.exit(1);
}