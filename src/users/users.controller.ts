import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard)
    get() {
        //return {msg: 'API Users...'};
        return this.usersService.obtenerUsuarios();
    }

    @Post()
    @HttpCode(201)
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

    @Delete('/delete')
    @HttpCode(500)
    delete() {
        console.log('Delete users');
        return this.usersService.eliminarUsuario();
    }

    @Get('/tasksByUser/:num')
    getTasksByUser(@Param('num', ParseIntPipe) num: number) {
        return num + 8;
    }

    @Get('validate')
    validar(@Query(ValidateUserPipe) query: any) {
        console.log(query);
    }


}
