import { useQuery, UseQueryResult } from "react-query";

export const useUserProfile = (
  username: string,
  projectName: string,
  enabled: boolean = true
): UseQueryResult<UserProfile, ErrorMessage> => {
  return useQuery<UserProfile, ErrorMessage, UserProfile>(
    `https://api.github.com/repos/${username}/${projectName}`,
    { enabled }
  );
};
