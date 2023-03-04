import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '../users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get() 
    saludoTasks (): string {    
        return this.usersService.saludoUsers();
    }
}


