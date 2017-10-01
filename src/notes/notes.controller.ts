import { Controller, Get, Post, Body } from "@nestjs/common";

import NotesService from "./notes.service"

import NoteGetModel from './models/note.get.model'
import NoteStoreModel from './models/note.store.model'

@Controller('notes')
export default class NotesController {
    
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async findAll(): Promise<NoteGetModel[]> {
        return await this.notesService.findAll()
    }

    @Post()  
    async add(@Body() note:NoteStoreModel) {
        await this.notesService.add(note)
    }
}