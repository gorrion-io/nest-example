import { Test } from '@nestjs/testing'

import NotesService from './notes.service'
import DataModule from '../data/data.module'



describe('NotesService', () => {
    let notesService: NotesService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            modules: [DataModule],
            components: [NotesService]
        }).compile()

        notesService = module.get(NotesService)
    });

    describe('findAll', () => {
        it('should return an array of notes', async () => {
            const results = await notesService.findAll()
            expect(results.length).toBe(2);
        });
    })
})
