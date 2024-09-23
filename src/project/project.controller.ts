import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { GetTodo } from "../todo/decorator/get-todo.decorator";
import { Todo } from "../todo/entity/todo.entity";
import { ProjectDto } from "./dto/project.dto";
import { Project } from "./entity/project.entity";
import { ProjectPayload } from "./interface/project-payload.interface";
import { ProjectService } from "./service/project.service";

@ApiTags('Project')
@ApiBearerAuth()
@Controller('project')
@UseGuards(AuthGuard())

export class ProjectController {
    constructor(
        private projectService: ProjectService
    ) {}

    @Get()
    getAllProject(
        @GetTodo() user: Todo
    ): Promise<ProjectPayload[]> {
        return this.projectService.getAllProject(user)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createProject(
        @Body() projectDto: ProjectDto,
        @GetTodo() user: Todo
    ): Promise<ProjectPayload> {
        return this.projectService.createProject(projectDto, user)
    }

    @Get('/:id')
    getProjectById(
        @Param('id', ParseIntPipe) id: number,
        @GetTodo() user: Todo
    ): Promise<Project> {
        return this.projectService.getProjectById(id, user)
    }

    @Patch('/:id')
    updateProjectById(
        @Param('id', ParseIntPipe) id: number,
        @Body() projectDto: ProjectDto,
        @GetTodo() user: Todo
    ): Promise<ProjectPayload>{
        return this.projectService.updateProjectById(id, projectDto, user)
    }

    @Delete('/:id')
    deleteProjectById(
        @Param('id', ParseIntPipe) id: number,
        @GetTodo() user: Todo
    ): Promise<{ message: string }>{
        return this.projectService.deleteProjectById(id, user)
    }
}