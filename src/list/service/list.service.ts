import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "../../todo/entity/todo.entity";
import { ListDto } from "../dto/list.dto";
import { List } from "../entity/list.entity";
import { ListPayload } from "../interface/list-payload.interface";
import { ListRepository } from "../repository/list.repository";

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(ListRepository)
        private listRepository: ListRepository
    ) {}

    async getAllList(user: Todo): Promise<ListPayload[]>{
        return this.listRepository.getAllList(user)
    }

    async createList(
        listDto: ListDto,
        user: Todo
    ): Promise<ListPayload> {
        return this.listRepository.createList(listDto, user)
    }

    async getListById(
        id: number,
        user: Todo
    ): Promise<List> {
        const list = await this.listRepository.findOne({ where: { id, userId: user.id } })

        if (!list) {
            throw new NotFoundException(`This ${id} is not found`);
        }
        return list
    }

    async updateListById(id: number, listDto: ListDto, user: Todo): Promise<ListPayload> {
        const list = await this.getListById(id, user)
        list.title = listDto.title
        list.description = listDto.description

        await list.save()
        return {
            id: list.id,
            title: list.title,
            description: list.description,
            createdDate: list.createdDate,
            updatedDate: list.updatedDate,
            status: list.status,
        }
    }

    async deleteListById(id: number, user: Todo): Promise<{ message: string }> {
        const list = await this.listRepository.delete({ id, userId: user.id })

        if (list.affected === 0) {
            throw new NotFoundException(`This ${id} is not found`)
        }
        return { message: 'Deleted successfully !' }
    }
}