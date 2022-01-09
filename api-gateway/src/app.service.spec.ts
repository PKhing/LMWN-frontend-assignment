import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

describe('TripService', () => {
  const mockTrip1 = {
    title: 'Trip 1',
    eid: '1',
    url: 'http://example.com/',
    description: 'description 1',
    photos: ['http://example.com/', 'http://example.com/'],
    tags: ['tag 1', 'tag 2'],
  };
  const mockTrip2 = {
    title: 'Trip 2',
    eid: '2',
    url: 'http://example.com/',
    description: 'description 2',
    photos: ['http://example.com/', 'http://example.com/'],
    tags: ['tag 3', 'tag 4'],
  };
  const mockTrips = [mockTrip1, mockTrip2];

  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it.each`
    keyword            | expected
    ${`Trip`}          | ${[mockTrip1, mockTrip2]}
    ${`trip`}          | ${[mockTrip1, mockTrip2]}
    ${`description 1`} | ${[mockTrip1]}
    ${`tag 1`}         | ${[mockTrip1]}
    ${`tag 3`}         | ${[mockTrip2]}
  `('should filter trip correctly', async ({ keyword, expected }) => {
    expect(service.filterTripsByKeyword(mockTrips, keyword)).toMatchObject(
      expected,
    );
  });
});
