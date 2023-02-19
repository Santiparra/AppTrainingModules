import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    saludoTasks():string {
        return "Hola desde el servicio de Tasks"
    }
}
