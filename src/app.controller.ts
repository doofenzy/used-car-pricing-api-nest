import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller()
export class AppController {
  constructor() {}

  @Get()
  someProtectedRoute(@Req() req) {
    return { message: 'This is a protected route', userId: req.userId };
  }
}
