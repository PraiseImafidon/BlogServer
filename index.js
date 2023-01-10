import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/user-routes";

import dotenv from 'dotenv';

dotenv.config();

const app = express();

//connect to database
const db = process.env.DB_URI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb successfully!'))
    .catch((Error) => console.log(Error));

//middleware
app.use(express.json());
app.use("/api/user", router);


//Listen to the server
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`The server is listening on port ${port}...`));
