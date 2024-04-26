import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    obtenerUsuarios() {
        let users = [
            {
                name: 'usuario uno',
                phone: 595986111222,
                pais: 'PY',
            },

            {
                name: 'usuario dos',
                phone: 595986333444,
                pais: 'BR',
            }
        ];

        return users;
    }
}
