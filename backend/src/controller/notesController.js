import Note from '../models/Note.js';

export async function getNote(req, res) {
    try {

        let id = req.params.id;

        //const note = await Note.find({id})
    } catch (error){
        console.log ("error: "+error)
    } 
}

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error){
        res.status(500).send("internal server error");
        console.error("getAllNotes error: "+error)
    } 
}

export async function createNote(req, res) {
    try {

    } catch (error){
        console.log ("error: "+error)
    } 
}

export async function updateNote(req, res) {
    try {

    } catch (error){
        console.log ("error: "+error)
    } 
}

export async function deleteNote(req, res) {
    try {

    } catch (error){
        console.log ("error: "+error)
    } 
}

export async function deleteAllNotes(req, res) {
    try {

    } catch (error){
        console.log ("error: "+error)
    } 
}
