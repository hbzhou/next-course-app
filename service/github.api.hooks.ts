import { truncateSync } from "fs";
import { useQuery, QueryKey } from "react-query";

export const useUserProfile = (username: string, projectName: string,enabled: boolean = true) => {
 return useQuery<UserProfile>(`https://api.github.com/repos/${username}/${projectName}`, {enabled})
};
