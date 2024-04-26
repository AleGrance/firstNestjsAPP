import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/')
    index() {
        return { msg: 'Nestjs API...'}
    }

    @Get('/tasks')
    getAll() {
        return this.tasksService.obtenerTareas(); //{ msg: 'Obteniendo todas las tareas...'}
    }
}
