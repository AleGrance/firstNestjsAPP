import { Controller, Get } from '@nestjs/common';

@Controller({})
export class UsersController {
    @Get('/users')
    index() {
        return {msg: 'API Users...'}
    }

}
