import express from 'express'
import { getAllNotes, createNote, updateNote, deleteNote, deleteAllNotes} from '../controller/notesController.js'

const notesRouter = express.Router();

notesRouter.get("/", getAllNotes)

notesRouter.post("/addnote", createNote)

notesRouter.put("/updatenote/:id", updateNote)

notesRouter.delete("/deletenotes", deleteAllNotes)

notesRouter.delete("/deletenote/:id", deleteNote)

export default notesRouter;