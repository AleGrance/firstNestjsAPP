import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const apikey = '777888';
    const request = context.switchToHttp().getRequest() as Request;

    if (!request.headers['apikey']) {
      return false;
    } else if (request.headers['apikey'] === apikey) {
      return true;
    } else {
      return false;
    };

  }
}
