import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {

    @Get('/')
    index() {
        return { msg: 'Nestjs API...'}
    }

    @Get('/tasks')
    getAll() {
        return { msg: 'Obteniendo todas las tareas...'}
    }
}
