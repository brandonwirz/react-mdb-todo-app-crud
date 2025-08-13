import express from "express"
import todos from "../routes/todos.js"
import connectDB from "./db.js"
// const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use("/todos", todos)

app.get("/", (req, res) => {
  res.send("Hello World......")
})

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error("Database connection failed:", err)
  })

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong!")
})
