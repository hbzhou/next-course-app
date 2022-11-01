import Error from "next/error";
import { useQuery, QueryKey, UseQueryResult } from "react-query";

export const useUserProfile = (username: string, projectName: string,enabled: boolean = true):UseQueryResult<UserProfile, unknown> => {
 return useQuery<UserProfile>(`https://api.github.com/repos/${username}/${projectName}`, {enabled})
};
