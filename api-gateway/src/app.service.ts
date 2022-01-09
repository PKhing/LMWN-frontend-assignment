import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Trip } from './entities/trip.entity';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getTrips(): Promise<Trip[]> {
    try {
      const res = await lastValueFrom(
        this.httpService.get(`${process.env.JSON_SERVER_URL}/trips`),
      );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw new InternalServerErrorException('Cannot connect to JSON server');
      } else {
        throw new HttpException(
          `JSON server error: ${err.response.statusText}`,
          err.response.status,
        );
      }
    }
  }

  async getTripsByKeyword(keyword: string): Promise<Trip[]> {
    const trips = await this.getTrips();
    return keyword ? this.filterTripsByKeyword(trips, keyword) : trips;
  }

  filterTripsByKeyword(trips: Trip[], keyword: string): Trip[] {
    keyword = keyword.toLowerCase();
    return trips.filter((trip) => {
      return (
        trip.title.toLowerCase().includes(keyword) ||
        trip.description.toLowerCase().includes(keyword) ||
        trip.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    });
  }
}
