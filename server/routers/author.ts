import { mockedAuthorsList } from "../../constants/mockedAuthors";
import { createNextRouter, procedure } from "../server";

export const authorRouter = createNextRouter({
  authors: procedure.query<Author[]>(async () => {
    return mockedAuthorsList;
  }),
});
