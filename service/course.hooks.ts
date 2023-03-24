import { isEmpty } from "lodash";
import { trpc } from "../server/trpc";

export const useAuthors = (authorIds: string[] | undefined) => {
  const { data: authors } = trpc.author.authors.useQuery();
  const authorDict = new Map(authors?.map((author) => [author.id, author.name]));
  return authorIds?.map((id) => authorDict.get(id) ?? "").filter((name) => !isEmpty(name));
};
