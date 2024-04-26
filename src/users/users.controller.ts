import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/users')
    get() {
        //return {msg: 'API Users...'};
        return this.usersService.obtenerUsuarios();
    }

    @Post('/users')
    post() {
        console.log('Post users')
        return 'Creando users...'
    }

    // Actualizacion total del objeto. Ej se actualiza {name: 'usuario uno',phone: 595986111222, pais: 'PY'}
    @Put('/users')
    put() {
        return 'Actualizando users...'
    }

    // Actualizacion parcial del objeto. Ej se actualiza solo {name: 'usuario uno'} o solo {phone: 595986111222}
    @Patch('/users')
    patch() {
        return 'Actualizando parcialmente users...'
    }

    @Delete('/users')
    delete() {
        return 'Eliminando users...'
    }


}
