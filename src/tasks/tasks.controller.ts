import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Request, Response, query } from 'express';
import { CreateTask } from './dto/create-task.dto';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get('/')
    getAll(@Query() query: any) {
        //console.log(query);
        return this.tasksService.obtenerTareas(); //{ msg: 'Obteniendo todas las tareas...'}
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.obtenerTarea(parseInt(id));
    }

    @Post('/')
    post(@Body() task: CreateTask) {
        this.tasksService.crearTarea(task);
        return task;
    }

}
