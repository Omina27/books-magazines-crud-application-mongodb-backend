import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose
const app = express()
const PORT = 4000

app.use(express.json())

mongoose
    .connect('mongodb://localhost:27017/admin')
    .then(() => console.log('Connected'))


app.listen(PORT, console.log(PORT))