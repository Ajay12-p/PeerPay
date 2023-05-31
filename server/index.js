require("dotenv").config();
require("./DB");
const express = require("express");
const cors = require("cors");
const PORT = 5000;

const mongoose = require("mongoose");
const Bussiness = require("./Routes/Bussiness/Bussiness");
const User = require("./Routes/Payment/Payment");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/bussiness", Bussiness);
app.use("/Payment", User);
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
