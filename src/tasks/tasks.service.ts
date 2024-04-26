import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    obtenerTareas() {
        return ['Task 1', 'Task 2', 'Task 3'];
    }
}
