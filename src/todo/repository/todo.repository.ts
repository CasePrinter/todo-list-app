import { User } from "../../auth/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { TodoDto } from "../dto/todo.dto";
import { Todo } from "../entity/todo.entity";
import { TodoPayload } from "../interface/todo-payload.interface";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
    async createTodo(
        todoDto: TodoDto,
        user: User
    ): Promise<Todo> {
        const { title, description, deadlineDate, priority, status } = todoDto

        const todo = new Todo()

        todo.title = title
        todo.description = description
        todo.user = user
        todo.deadlineDate = deadlineDate
        todo.priority = priority
        todo.status = status

        await todo.save()

        delete todo.user
        return todo
    }

    async getAllTodo(user: User): Promise<TodoPayload[]> {
        const query = this.createQueryBuilder('todo')

        query.where('todo.userId = :userId', { userId: user.id })

        const todos = await query.getMany()
        return todos
    }
}