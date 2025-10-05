import Note from '../models/Note.js';


export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error){
        res.status(500).send("internal server error");
        console.error("getAllNotes error: "+error)
    } 
}

export async function getNote (req, res) {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        res.status(200).json({message: 'note found', note: note})
    } catch (error){
        res.status(500).send("internal server error");
        console.error("getAllNotes error: "+error)
    } 
}

export async function createNote(req, res) {
    try {
       // const title = req.body.title;
       // const constent = req.body.content;
        const{title, content} = req.body;
        const note = new Note({ title, content })

        const newNote = await note.save()
        res.status(201).json({message: "note created successfully", note: newNote})

    } catch (error){
        console.error("error: "+error)
    } 
}

export async function updateNote(req, res) {
    try {
        const id = req.params.id;
        const {title, content} = req.body;

        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true});

        if (!updatedNote) { return res.status().json({message: 'Note not found'})}

        res.status(201).json({message: "note updated successfully", new_note: updatedNote});

    } catch (error){
        console.error("error: "+error)
    } 
}

export async function deleteNote(req, res) {
    try {
        const id= req.params.id;

        const deletedNote = await Note.findByIdAndDelete(id)
        res.status(200).json({message: "note deleted successfully", deleted_note: deletedNote})
    } catch (error){
        console.error("error: "+error)
    } 
}

export async function deleteAllNotes(req, res) {
    try {
        const wipedNotes = await Note.deleteMany();
        res.status(200).json({message: "notes deleted successfully"})
    } catch (error){
        console.error("error: "+error)
    } 
}
