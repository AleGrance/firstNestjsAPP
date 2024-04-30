import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
export class AppController {
    @ApiTags('API')
    @Get()
    get() {
        return { msg: 'Nestjs API'}
    }
}
