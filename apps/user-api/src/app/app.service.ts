import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getDato(): { message: string } {
    return { message: 'Hello API dato' };
  }
}
