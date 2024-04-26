import { Injectable } from '@nestjs/common';

export interface User {
    name: string,
    phone: number,
    pais: string
}

@Injectable()
export class UsersService {
    obtenerUsuarios(): User {
        return {
            name: 'usuario uno',
            phone: 595986111222,
            pais: 'PY',
        }
    }

    insertarUsuario() {
        return 'Insertando usuario...'
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
