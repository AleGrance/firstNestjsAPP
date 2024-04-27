import { Body, Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    get() {
        //return {msg: 'API Users...'};
        return this.usersService.obtenerUsuarios();
    }

    @Post()
    post(@Body() user: CreateUser) {
        console.log('Post users', user);
        return this.usersService.insertarUsuario(user);
    }

    // Actualizacion total del objeto. Ej se actualiza {name: 'usuario uno',phone: 595986111222, pais: 'PY'}
    @Put()
    put() {
        console.log('Put users');
        return this.usersService.actualizarUsuario();
    }

    // Actualizacion parcial del objeto. Ej se actualiza solo {name: 'usuario uno'} o solo {phone: 595986111222}
    @Patch()
    patch() {
        console.log('Patch users');
        return this.usersService.actualizarNombreUsuario();
    }

    @Delete()
    delete() {
        console.log('Delete users');
        return this.usersService.eliminarUsuario();
    }


}
