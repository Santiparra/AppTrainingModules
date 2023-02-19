import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get() 
    saludoTasks (): string {    
        return this.tasksService.saludoTasks();
    }
}
