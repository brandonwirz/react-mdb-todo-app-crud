import express, { Router } from "express"
// import { v4 as uuidv4 } from "uuid"
import Todo from "../models/Todo.js"

let todos = [
  //   { id: "1", text: "Go shopping" },
  //   { id: "2", text: "Wash dishes" },
  //   { id: "3", text: "Study for the exam" },
  //   { id: "4", text: "Practice React" },
]
const router = express.Router()
console.log("test 1")
router.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.send(todos)
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id
  const deletedTodo = await Todo.findByIdAndDelete(id)
  console.log(deletedTodo)
  // todos = todos.filter((item) => {
  //   return item.id !== id
  //Todo.delete

  console.log(todos)
  res.status(200).json({ message: `Item ${id} deleted.......` })
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  // console.log(req.body, "the body")
  const { text } = req.body

  try {
    const updated = await Todo.findByIdAndUpdate(id, { text }, { new: true })
    // console.log(todos)
    console.log(updated)
    res.status(200).json({ data: updated })
  } catch {
    res.status(404).json({ message: `Todo not found.........` })
  }
})

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body)
  console.log(req.body)
  await newTodo.save()
  console.log(newTodo, "new todo created.......")
  res.status(200).json({ data: newTodo, message: "New todo created......." })
})

export default router
