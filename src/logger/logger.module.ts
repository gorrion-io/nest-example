import { Module } from '@nestjs/common';
import LoggerMiddleware from './logger.middleware'


@Module({
    components: [LoggerMiddleware],
    exports: [LoggerMiddleware]
})
export default class LoggerModule {}