import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Trip } from './entities/trip.entity';

@Controller('/api/trips')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTrips(@Query('keyword') keyword: string): Promise<Trip[]> {
    return await this.appService.getTripsByKeyword(keyword);
  }
}
