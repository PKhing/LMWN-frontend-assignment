import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Trip } from './entities/trip.entity';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getTrips(): Promise<Trip[]> {
    const res = await lastValueFrom(
      this.httpService.get('http://localhost:9000/trips'),
    );
    return res.data;
  }

  async getTripsByKeyword(keyword: string): Promise<Trip[]> {
    const trips = await this.getTrips();
    return keyword ? this.filterTripsByKeyword(trips, keyword) : trips;
  }

  filterTripsByKeyword(trips: Trip[], keyword: string): Trip[] {
    return trips.filter((trip) => {
      return (
        trip.title.includes(keyword) ||
        trip.description.includes(keyword) ||
        trip.tags.some((tag) => tag.includes(keyword))
      );
    });
  }
}
