import express from 'express'
import {getNote, getAllNotes, updateNote, deleteNote, deleteAllNotes} from '../controller/notesController.js'

const notesRouter = express.Router();

notesRouter.get("/", (req, res) => {
    res.status(200).send("notes obtained")
})

notesRouter.get("/:id", getNote)

notesRouter.post("/addnote", getAllNotes)

notesRouter.put("/updatenote/:id", updateNote)

notesRouter.delete("/deletenotes", deleteAllNotes)

notesRouter.delete("/deletenote/:id", deleteNote)

export default notesRouter;