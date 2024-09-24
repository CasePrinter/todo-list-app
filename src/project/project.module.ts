import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from './repository/project.repository';
import { ProjectService } from './service/project.service';
import { ProjectController } from './project.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectRepository])
    ],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}
