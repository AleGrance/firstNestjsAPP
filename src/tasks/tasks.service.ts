import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [];

    obtenerTareas() {
        return this.tasks;
    }

    crearTarea(task: any) {
        this.tasks.push(task);
        console.log('TaskService: ', task);
    }
}
