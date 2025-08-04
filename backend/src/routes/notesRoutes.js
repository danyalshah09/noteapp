import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router()
router.get("/",getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id",deleteNote);
// app.get("/api/notes", (req, res) => {
//     //send the notes
//     res.status(200).send("Congratulations! You got 5 fuck invites ")
// })

// app.post("/api/notes", (req, res) => {
//     //post the notes
//     res.status(201).json("Congratulations! You createed Post successfully! ")
// })

// app.patch("/api/notes", (req, res) => {
//     //post the notes
//     res.status(200).send("Congratulations! You got 200 NOTES ")
// })


// app.delete("/api/notes", (req, res) => {
//     //post the notes
//     res.status(200).send("Congratulations! You got 200 NOTES ")
// })



export default router;