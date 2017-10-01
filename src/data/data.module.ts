import { Module } from '@nestjs/common';

import DataStore from './data-store'

@Module({
    components: [DataStore],
    exports: [DataStore]
})
export default class DataModule {}