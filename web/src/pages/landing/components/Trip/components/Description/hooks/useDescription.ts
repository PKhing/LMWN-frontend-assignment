import {descriptionLength} from "./constants";

const useDescription = (description: string) => {
  return description.slice(0, descriptionLength).concat(" .... ").split("\n\n");
};

export default useDescription;
