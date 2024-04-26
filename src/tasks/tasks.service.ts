import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks = [];

    obtenerTareas() {
        return this.tasks;
    }

    obtenerTarea(id: number) {
        const tareaEncontrada = this.tasks.find(task => task.id === id);

        if (!tareaEncontrada) {
            return new NotFoundException(`Tarea con id ${id} no encontrada.`)
        }

        return tareaEncontrada
    }

    crearTarea(task: CreateTask) {
        this.tasks.push(task);
        console.log('TaskService: ', task);
    }
}
