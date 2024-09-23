import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Todo } from "../entity/todo.entity";

export const GetTodo = createParamDecorator((data, ctx: ExecutionContext): Todo => {
    const req = ctx.switchToHttp().getRequest()
    return req.todo
})