import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routers/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouer from './src/routers/albumRoute.js';




// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

// initializing routes

app.use("/api/song",songRouter)
app.use('/api/album',albumRouer)

app.get('/',(req,res)=> res.send("API WORKING"))

app.listen(port,()=>console.log(`Server started on ${port}`))

