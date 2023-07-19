import { isEmpty } from "lodash";
import { authorStore } from "../store/store";
import { useAuthors } from "./author.hook";

export const useAuthorNames = (authorIds: string[] | undefined) => {
  const authors = authorStore.authors.get();
  const authorDict = new Map(authors?.map((author) => [author.id, author.name]));
  return authorIds?.map((id) => authorDict.get(id) ?? "").filter((name) => !isEmpty(name));
};
