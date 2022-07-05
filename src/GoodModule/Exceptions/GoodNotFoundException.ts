import { HttpException, HttpStatus } from '@nestjs/common';

export class GoodNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(msg || 'GoodNotFound', status || HttpStatus.NOT_FOUND);
  }
}
