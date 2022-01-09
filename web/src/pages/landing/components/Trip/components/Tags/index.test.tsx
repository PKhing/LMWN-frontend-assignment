import {mockUseSearchParams} from "common/test/mockUseSearchParams";
import {shallow} from "enzyme";

describe("Tags", () => {
  const {setSearchParamsSpy} = mockUseSearchParams();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`Should render "และ" before the last tag if there are more than one tag`, async () => {
    const {default: Tags} = await import(".");

    const mockTags = ["tag 1", "tag 2", "tag 3"];
    const wrapper = shallow(<Tags tags={mockTags} />);

    const childrenLength = wrapper.children().length;

    expect(childrenLength).toBe(mockTags.length + 2);
    expect(wrapper.childAt(childrenLength - 2).text()).toBe("และ");
  });

  it(`Should not render "และ" if there is only one tag`, async () => {
    const {default: Tags} = await import(".");

    const mockTags = ["tag 1"];
    const wrapper = shallow(<Tags tags={mockTags} />);

    const childrenLength = wrapper.children().length;

    expect(childrenLength).toBe(mockTags.length + 1);
  });

  it(`Should set search params with the tag name when tag is clicked`, async () => {
    const {default: Tags} = await import(".");

    const mockTags = ["tag 1", "tag 2", "tag 3"];
    const wrapper = shallow(<Tags tags={mockTags} />);

    wrapper.childAt(1).simulate("click");
    expect(setSearchParamsSpy).toBeCalledWith({keyword: mockTags[0]});

    wrapper.childAt(2).simulate("click");
    expect(setSearchParamsSpy).toBeCalledWith({keyword: mockTags[1]});
  });
});

export {};
