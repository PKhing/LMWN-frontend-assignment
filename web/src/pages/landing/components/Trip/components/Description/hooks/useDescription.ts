const useDescription = (description: string) => {
  const descriptionLength = 200;
  return description.slice(0, descriptionLength).concat(" .... ").split("\n\n");
};

export default useDescription;
