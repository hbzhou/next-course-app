import Error from "next/error";
import { useQuery } from "react-query";

export const useUserProfile = (username: string, projectName: string) => {
  return useQuery<UserProfile, ErrorMessage>(`https://api.github.com/repos/${username}/${projectName}`);
};
