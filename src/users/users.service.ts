import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    saludoUsers():string {
        return "Hola desde el servicio de Users"
    }

}
