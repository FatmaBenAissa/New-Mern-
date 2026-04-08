const express=require("express");
const cors=require("cors");
const app=express();

require("dotenv").config();

const connectDB=require("./config/dbconnect");
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
app.use(express.json())

connectDB();

app.use(cors());
app.use("/user",require("./routes/user"));
app.use("/product",require("./routes/product"));
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(process.env.PORT, (err)=>err?
console.log(err):console.log ("server is running"));