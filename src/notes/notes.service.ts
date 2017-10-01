import { Component } from '@nestjs/common'
import uuid from 'uuid'

import NoteGetModel from './models/note.get.model'
import NoteStoreModel from './models/note.store.model'

import DataStore from '../data/data-store'

@Component()
export default class NotesService {

    constructor(private readonly dataStore: DataStore) {}

    async findAll(): Promise<NoteGetModel[]> {
        const notes = await this.dataStore.notes.findAll()
        return notes.map(n => ({
            id: n._id,
            author: n.author,
            text: n.text
        }))
    }

    async add(note: NoteStoreModel) {
        await this.dataStore.notes.add({
            _id: uuid.v4(),
            author: note.author || "Unknown",
            text: note.text 
        })
    } 
}