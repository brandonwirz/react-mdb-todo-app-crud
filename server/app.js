import express from "express"
import todos from "../routes/todos.js"
import connectDB from "./db.js"
// const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.use("/todos", todos)
connectDB()

app.get("/", (req, res) => {
  res.send("Hello World......!!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
