import {ITrip} from "common/types";
import {shallow} from "enzyme";

describe("Landing", () => {
  const mockTrips: ITrip[] = [
    {
      title: "Trip 1",
      eid: "1",
      url: "http://example.com/",
      description: "asdf",
      photos: ["http://example.com/", "http://example.com/"],
      tags: ["tag 1", "tag 2"],
    },
    {
      title: "Trip 2",
      eid: "2",
      url: "http://example.com/",
      description: "asdf",
      photos: ["http://example.com/", "http://example.com/"],
      tags: ["tag 3", "tag 4"],
    },
  ];

  const useTripsSpy = jest.fn();

  jest.doMock("./hooks/useTrips", () => useTripsSpy);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should not render line after the last trip`, async () => {
    useTripsSpy.mockReturnValue(mockTrips);
    const {default: Landing} = await import(".");

    const wrapper = shallow(<Landing />);

    const tripWrapper = wrapper.childAt(wrapper.children().length - 1);
    const lastTrip = tripWrapper.childAt(tripWrapper.children().length - 1);

    expect(lastTrip.name()).toBe("Trip");
  });

  it(`should render TripNotFound component if useTrip return empty array`, async () => {
    useTripsSpy.mockReturnValue([]);
    const {default: Landing} = await import(".");

    const wrapper = shallow(<Landing />);

    const tripWrapper = wrapper.childAt(wrapper.children().length - 1);
    expect(tripWrapper.childAt(0).name()).toBe("TripNotFound");
  });
});

export {};
