import express from 'express'
import cors from 'cors'

import notesRouter from './routes/notesRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/notes', notesRouter)

app.use((req, res) => {
    res.status(404).send("Not Found")
})

app.listen(5001, () => {
    console.log("server listening on port 5001");
})