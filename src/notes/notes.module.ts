import { Module, MiddlewaresConsumer } from '@nestjs/common';

import DataModule from '../data/data.module'
import LoggerModule from '../logger/logger.module'

import NotesController from './notes.controller'
import NotesService from './notes.service'

import LoggerMiddleware from '../logger/logger.middleware'

@Module({
    modules: [DataModule, LoggerModule],
    controllers: [NotesController],
    components: [NotesService]
})
export default class NotesModule {
    constructor(private readonly loggerMiddleware: LoggerMiddleware) {}

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(NotesController);
    }
}