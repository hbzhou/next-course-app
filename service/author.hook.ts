import { trpc } from "../server/trpc";
import { authorStore } from "../store/store";

export const useAuthors = () => {
    return trpc.author.authors.useQuery(undefined, {
        onSuccess: (data) => {
            authorStore.authors.set(data);
        },
    })
}