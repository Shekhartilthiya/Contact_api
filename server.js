import express from "express";
import mongoose from "mongoose";
import  userRouter  from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import {config} from 'dotenv';
const app = express();

app.use(express.json());
//env config
config({path: `.env`});


//User Routes
app.use("/api/user" ,userRouter);

//contact Router
app.use('/api/contact',contactRouter);

//homeRoutes
app.get("/", (req, res) => {
  res.json({ message: "this is home routes" });
});





//database connection
mongoose
  .connect( process.env.MONGO_URL,
    {dbName: "Nodejs_Mastery_Course_backend"}
  )
  .then(() => console.log("mongodb Connected.."))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
