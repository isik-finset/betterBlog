import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { get, includes } from 'lodash';

@Injectable()
export class HeaderValidationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    if (Object.keys(request).length === 0) {
      return false;
    } else {
      return this.validate(request.headers);
    }
  }

  validate(header): boolean {
    let result = false;

    // const apiTranId: string = get(header, ['x-api-tran-id']);

    // if (apiTranId != null && apiTranId !== undefined) {
    //   result = apiTranId.length === 25 ? true : false;
    // }

    const authorization: any = get(header, ['Authorization']);

    if (authorization != null && authorization !== undefined) {
      result = includes(authorization, 'Bearer ') != null ? true : false;
    }

    return result;
  }
}
