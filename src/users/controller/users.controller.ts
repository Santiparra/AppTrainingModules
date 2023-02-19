import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '../users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get("./user") 
    getUsers(): object[] {    
        return [{uuid:332, nombre: "asdwr", apellido:"lorem", email: "lorem@lorem"}, 
                {uuid:333, nombre:"asdasd", apellido:"lorem", email: "lorem@lorem"}, 
                {uuid:444, nombre:"ssrad", apellido:"lorem", email: "lorem@lorem"}];
    }

    @Get("/:uuid") 
    getUser (@Param() params: {uuid: number, nombre: string, apellido: string, email: string}) {    
        return params;
    }

    @Post("/user")
    createUser(@Req() req: Request) {
        return req.body
    }

    @Patch("/uuid")
    actualizar(@Req() req: Request) {
        return req.body
    }

    @Put('/:uuid')
    update(@Param('id') params: {uuid: number, nombre: string, apellido: string, email: string}) {
      return params;
    }

    @Delete("/:uuid") 
    deleteUser (@Param() params: {uuid: number, nombre: string, apellido: string, email: string}) {    
        return params;
    }
}

