import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';

export interface User {
    name: string,
    phone: number,
    pais: string
}

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            name: 'usuario uno',
            phone: 595986111222,
            pais: 'PY',
        }

    ];
    obtenerUsuarios(): User[] {
        return this.users;
    }

    insertarUsuario(user: CreateUser) {
        this.users.push(user);
        return user;
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
