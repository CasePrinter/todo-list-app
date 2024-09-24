import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListRepository } from './repository/list.repository';
import { ListService } from './service/list.service';
import { ListController } from './list.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ListRepository])
    ],
    controllers: [ListController],
    providers: [ListService]
})
export class ListModule {}
