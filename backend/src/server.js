import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import notesRouter from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

const app = express()

console.log(process.env.MONGO_URI)
app.use(cors())
app.use(express.json())

connectDB();

app.use('/api/notes', notesRouter)

app.use((req, res) => {
    res.status(404).send("Not Found")
})

app.listen(5001, () => {
    console.log("server listening on port 5001");
})