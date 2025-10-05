import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import notesRouter from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'

const port = process.env.PORT; 
const app = express();

app.use(cors());
app.use(express.json());


//middleware
//use for authentication or rate limiting
app.use((req, res, next) => {
    console.log(`request method: ${req.method} req url: ${req.url}`);
    next();
});

app.use(rateLimiter)

app.use('/api/notes', notesRouter)

app.use((req, res) => {
    res.status(404).send("Not found on this server");
});

//server only starts listening after database is connected
connectDB().then(() => {
    app.listen(port, () => {
    console.log(`server listening on port ${port}`);
    });
});
