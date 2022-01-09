import {renderHook} from "@testing-library/react-hooks";

describe("useDialog", () => {
  let mockKeyword = "keyword 1";

  // useSearchParams
  const setSearchParamsSpy = jest.fn((keyword: string) => {
    mockKeyword = keyword;
  });
  const useSearchParamsSpy = jest.fn(() => [
    {get: (string: string) => (string === "keyword" ? mockKeyword : undefined)},
    setSearchParamsSpy,
  ]);

  jest.doMock("react-router-dom", () => ({
    useSearchParams: useSearchParamsSpy,
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set keyword same as keyword in search param", async () => {
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());
    expect(useSearchParamsSpy).toBeCalledTimes(1);
    expect(result.current.keyword).toBe(mockKeyword);
  });
});
