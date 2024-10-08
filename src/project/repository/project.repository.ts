import { User } from "../../auth/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { ProjectDto } from "../dto/project.dto";
import { Project } from "../entity/project.entity";
import { ProjectPayload } from "../interface/project-payload.interface";
import { Todo } from "src/todo/entity/todo.entity";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
    async createProject(
        projectDto: ProjectDto,
        todo: Todo
    ): Promise<Project> {
        const { title, description, deadlineDate, priority, status } = projectDto

        const project = new Project()

        project.title = title
        project.description = description
        project.todo = todo
        project.deadlineDate = deadlineDate
        project.priority = priority
        project.status = status

        await project.save()

        delete project.todo
        return project
    }

    async getAllProject(user: Todo): Promise<ProjectPayload[]> {
        const query = this.createQueryBuilder('project')

        query.where('project.userId = :userId', { userId: user.id })

        const projects = await query.getMany()
        return projects
    }
}