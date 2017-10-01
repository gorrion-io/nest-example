import { Module } from '@nestjs/common';
import NotesModule from './notes/notes.module'
import DataModule from './data/data.module'

@Module({
    modules: [NotesModule]
})
export class ApplicationModule {}