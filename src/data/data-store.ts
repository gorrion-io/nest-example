import { Component } from '@nestjs/common'
import Note from './note'

class NotesStore {

    allNotes = [
        { _id: "967d0f12-0e95-4d6f-ab0a-2848243d2d58", text: "Talk to the hand", author: "A. Schwarzenegger" },
        { _id: "0b18f92a-bc6f-4e81-9e0a-ad6303c40d24", text: "Hold the dooor", author: "Hodor" }
    ]

    async findAll(): Promise<Note[]> {
        return this.allNotes
    }

    async add(note: Note) {
        this.allNotes.push(note)   
    }
}

@Component()
export default class DataStore {
    notes = new NotesStore()
}