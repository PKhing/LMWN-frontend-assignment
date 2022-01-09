import {act, renderHook} from "@testing-library/react-hooks";
import React from "react";
import {mockUseSearchParams} from "common/test/mockUseSearchParams";

describe("useSearchField", () => {
  let mockParamsKeyword = "keyword 1";
  const mockKeyword = "keyword 2";

  const {mockSearchParams, useSearchParamsSpy, setSearchParamsSpy} =
    mockUseSearchParams();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set keyword same as keyword in search param", async () => {
    useSearchParamsSpy.mockReturnValue(mockSearchParams(mockParamsKeyword));
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());

    expect(result.current.keyword).toBe(mockParamsKeyword);
  });

  it("should set keyword as empty string if keyword in search param is undefined", async () => {
    useSearchParamsSpy.mockReturnValue(mockSearchParams(""));
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());

    expect(result.current.keyword).toBe("");
  });

  it("should set keyword correctly when handleChange is triggered", async () => {
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());

    act(() => {
      result.current.handleChange({
        target: {value: mockKeyword},
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.keyword).toBe(mockKeyword);
  });

  it("should set search params correctly after handleChange is triggered for 500ms", async () => {
    jest.useFakeTimers("legacy");
    jest.spyOn(global, "setTimeout");
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());
    act(() => {
      result.current.handleChange({
        target: {value: mockKeyword},
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);

    jest.runAllTimers();

    expect(setSearchParamsSpy).toBeCalledTimes(1);
    expect(setSearchParamsSpy).toBeCalledWith({keyword: mockKeyword});
  });

  it("should clear search params and keyword correctly when trigger handleClear", async () => {
    const {default: useSearchField} = await import("./useSearchField");
    const {result} = renderHook(() => useSearchField());

    act(() => {
      result.current.handleClear();
    });

    expect(setSearchParamsSpy).toBeCalledWith({});
    expect(result.current.keyword).toBe("");
  });
});
