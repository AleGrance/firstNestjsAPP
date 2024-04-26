import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Request, Response } from 'express';

@Controller()
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        response.status(200).json({
            msg: 'Nestjs API...'
        })
        //return { msg: 'Nestjs API...'}
    }

    @Get('/tasks')
    getAll() {
        return this.tasksService.obtenerTareas(); //{ msg: 'Obteniendo todas las tareas...'}
    }

    @Post('/tasks')
    post(@Body() task: any) {
        this.tasksService.crearTarea(task);
        return task;
    }
}
