import { Controller, Get } from '@nestjs/common';

@Controller('web')
export class WebController {
  @Get('health')
  getHealth() {
    return { status: 'ok', message: 'Web API is running' };
  }
}
