export const mockUseSearchParams = (defaultKeyword?: string) => {
  const setSearchParamsSpy = jest.fn();

  const mockSearchParams = (keyword: string | undefined) => [
    {
      get: (string: string) => (string === "keyword" ? keyword : undefined),
    },
    setSearchParamsSpy,
  ];

  const useSearchParamsSpy = jest.fn(() => mockSearchParams(defaultKeyword));

  jest.doMock("react-router-dom", () => ({
    useSearchParams: useSearchParamsSpy,
  }));

  return {mockSearchParams, useSearchParamsSpy, setSearchParamsSpy};
};
