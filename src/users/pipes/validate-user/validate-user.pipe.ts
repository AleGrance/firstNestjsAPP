import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Valor: ', value)

    const userCode = parseInt(value.code.toString(), 10);

    if (isNaN(userCode)) {
      console.log('No es un numero');
      throw new HttpException('El código no es un numero', HttpStatus.BAD_REQUEST);
    }

    return { ...value, code: userCode };
  }
}
