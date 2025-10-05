import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import notesRouter from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

const port = process.env.PORT; 
const app = express()

app.use(cors())
app.use(express.json())

connectDB();

app.use('/api/notes', notesRouter)

app.use((req, res) => {
    res.status(404).send("Not Found")
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})