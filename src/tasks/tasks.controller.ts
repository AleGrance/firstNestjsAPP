import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {

    taskServ: TasksService;

    constructor(tasksService: TasksService) {
        this.taskServ = tasksService;
    }

    @Get('/')
    index() {
        return { msg: 'Nestjs API...'}
    }

    @Get('/tasks')
    getAll() {
        return this.taskServ.obtenerTareas(); //{ msg: 'Obteniendo todas las tareas...'}
    }
}
