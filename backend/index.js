import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get('/' , (req,res) =>{
    res.send("Hello World");
    
})

app.listen(5000 , ()=>{
    console.log("Server up and running")
})