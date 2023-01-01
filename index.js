import express from "express";
import mongoose from "mongoose";
import router from './routes/user-routes';

const app = express();

//connect to database
mongoose.connect('mongodb+srv://Ruona:techgirl@cluster0.jzy60.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb successfully!'))
    .catch((Error) => console.log(Error));


//middleware
app.use("/api/user", router);

//Listen to the server
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`The server is listening on port ${port}...`));
