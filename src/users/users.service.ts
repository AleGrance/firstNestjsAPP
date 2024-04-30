import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

export interface User {
    name: string,
    phone: number,
    pais: string
}

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {

    }
    // public users: User[] = [
    //     {
    //         name: 'usuario uno',
    //         phone: 595986111222,
    //         pais: 'PY',
    //     }

    // ];
    obtenerUsuarios() {
        //return this.users;
        return this.prisma.user.findMany();
    }

    insertarUsuario(user: CreateUser) {
        //this.users.push(user);
        return this.prisma.user.create({data: user});
    }

    actualizarUsuario() {
        return 'Actualizando usuario...'
    }

    actualizarNombreUsuario() {
        return 'Actualizando nombre de usuario...'
    }

    eliminarUsuario() {
        return 'Eliminando usuario...'
    }
}
