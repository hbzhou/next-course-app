import { trpc } from "../server/trpc";

export const useAuthors = () => {
    return trpc.author.authors.useQuery()
}