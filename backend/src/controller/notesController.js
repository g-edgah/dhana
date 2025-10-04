export function getNote(req, res) {
    res.status(200).send("note obtained")
}

export function getAllNotes(req, res) {
    res.status(200).send("notes obtained")
}

export function createNote(req, res) {
    res.status(201).send("notes created")
}

export function updateNote(req, res) {
    res.status(200).send("notes updated")
}

export function deleteNote(req, res) {
    res.status(200).send("note deleted")
}

export function deleteAllNotes(req, res) {
    res.status(200).send("notes deleted")
}
