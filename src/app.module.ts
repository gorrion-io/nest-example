import { Module } from '@nestjs/common';
import NotesModule from './notes/notes.module'

@Module({
    modules: [NotesModule]
})
export class ApplicationModule {}