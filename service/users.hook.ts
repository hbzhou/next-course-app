import { trpc } from "../server/trpc"

export const useUsers = () => {
    return trpc.user.users.useQuery();
}