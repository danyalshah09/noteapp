import Note from "../models/Note.js"

//Get All Notes
export async function getAllNotes (_,res){
try {
    const notes = await Note.find().sort({createdAt:-1})
res.status(200).json(notes)
} catch (error) {
    console.error("Error in getAllNotes Controlller Please fix it")
    res.status(500).send("Internal Server Error ")
}
}

//Get Note By Id
export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById Controller: ", error);
        res.status(500).send("Internal Server Error");
    }
}

export async function createNote (req,res){
    try {
        const {title,content}= req.body
        const newNote = new Note({title,content})

        await newNote.save();
        res.status(200).json("You just created a note")

    } catch (error) {
        console.error("Error in createNote Controller:", error);
        res.status(500).send("Internal Server Error ");
    }
    }

export async function updateNote (req,res){
    try {
     const {title,content} = req.body
     const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content}, {new:true})
     console.log(updatedNote)
     if(!updatedNote){
        return res.status(404).json({message: "Note Not Found"})
     }
     res.status(200).json(updatedNote)
    } catch (error) {
     console.error("Error in updateNote Controller: ", error)
     res.status(500).send("Internal Server Error ")
    }
 }

export async function deleteNote (req,res){

    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id,{title,content}, {new:true})
        // console.log(deleteNote)
        if(!deleteNote){
           return res.status(404).json({message: "Note Not Found"})
        }
        res.status(200).send({message: "You just deleted a note"})

    } catch (error) {

    }
}
