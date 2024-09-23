import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "../../todo/entity/todo.entity";
import { ProjectDto } from "../dto/project.dto";
import { Project } from "../entity/project.entity";
import { ProjectPayload } from "../interface/project-payload.interface";
import { ProjectRepository } from "../repository/project.repository";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectRepository)
        private projectRepository: ProjectRepository
    ) {}

    async getAllProject(user: Todo): Promise<ProjectPayload[]>{
        return this.projectRepository.getAllProject(user)
    }

    async createProject(
        projectDto: ProjectDto,
        user: Todo
    ): Promise<ProjectPayload> {
        return this.projectRepository.createProject(projectDto, user)
    }

    async getProjectById(
        id: number,
        user: Todo
    ): Promise<Project> {
        const project = await this.projectRepository.findOne({ where: { id, userId: user.id } })

        if (!project) {
            throw new NotFoundException(`This ${id} is not found`);
        }
        return project
    }

    async updateProjectById(id: number, projectDto: ProjectDto, user: Todo): Promise<ProjectPayload> {
        const project = await this.getProjectById(id, user)
        project.title = projectDto.title
        project.description = projectDto.description

        await project.save()
        return {
            id: project.id,
            title: project.title,
            description: project.description,
            createdDate: project.createdDate,
            updatedDate: project.updatedDate,
            deadlineDate: project.deadlineDate,
            priority: project.priority,
            status: project.status,
        }
    }

    async deleteProjectById(id: number, user: Todo): Promise<{ message: string }> {
        const project = await this.projectRepository.delete({ id, userId: user.id })

        if (project.affected === 0) {
            throw new NotFoundException(`This ${id} is not found`)
        }
        return { message: 'Deleted successfully !' }
    }
}