import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [TripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
