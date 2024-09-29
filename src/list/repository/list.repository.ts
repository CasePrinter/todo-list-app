import { User } from "../../auth/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { ListDto } from "../dto/list.dto";
import { List } from "../entity/list.entity";
import { ListPayload } from "../interface/list-payload.interface";
import { Todo } from "src/todo/entity/todo.entity";

@EntityRepository(List)
export class ListRepository extends Repository<List> {
    async createList(
        listDto: ListDto,
        user: Todo
    ): Promise<List> {
        const { title, description, status } = listDto

        const list = new List()

        list.title = title
        list.description = description
        list.todo = user
        list.status = status

        await list.save()

        delete list.todo
        return list
    }

    async getAllList(user: Todo): Promise<ListPayload[]> {
        const query = this.createQueryBuilder('list')

        query.where('list.userId = :userId', { userId: user.id })

        const lists = await query.getMany()
        return lists
    }
}