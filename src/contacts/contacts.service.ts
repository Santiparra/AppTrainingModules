import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
    saludoContacts():string {
        return "Hola desde el servicio de Contacts"
    }

}
