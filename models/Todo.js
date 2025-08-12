import mongoose from "mongoose"

const Todo = new mongoose.Schema({
  text: String,
})

export default mongoose.model("Todo", Todo)
