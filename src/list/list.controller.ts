import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { GetTodo } from "../todo/decorator/get-todo.decorator";
import { Todo } from "../todo/entity/todo.entity";
import { ListDto } from "./dto/list.dto";
import { List } from "./entity/list.entity";
import { ListPayload } from "./interface/list-payload.interface";
import { ListService } from "./service/list.service";

@ApiTags('List')
@ApiBearerAuth()
@Controller('list')
@UseGuards(AuthGuard())

export class ListController {
    constructor(
        private listService: ListService
    ) {}

    @Get()
    getAllList(
        @GetTodo() user: Todo
    ): Promise<ListPayload[]> {
        return this.listService.getAllList(user)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createList(
        @Body() listDto: ListDto,
        @GetTodo() user: Todo
    ): Promise<ListPayload> {
        return this.listService.createList(listDto, user)
    }

    @Get('/:id')
    getListById(
        @Param('id', ParseIntPipe) id: number,
        @GetTodo() user: Todo
    ): Promise<List> {
        return this.listService.getListById(id, user)
    }

    @Patch('/:id')
    updateListById(
        @Param('id', ParseIntPipe) id: number,
        @Body() listDto: ListDto,
        @GetTodo() user: Todo
    ): Promise<ListPayload>{
        return this.listService.updateListById(id, listDto, user)
    }

    @Delete('/:id')
    deleteListById(
        @Param('id', ParseIntPipe) id: number,
        @GetTodo() user: Todo
    ): Promise<{ message: string }>{
        return this.listService.deleteListById(id, user)
    }
}