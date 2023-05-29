import got from "got";

const GithubTransport = () => {
  const getUserProfile = (userName: string, projectName: string): Promise<UserProfile> => {
    return got(`https://api.github.com/repos/${userName}/${projectName}`).json<UserProfile>();
  };
  return {
    getUserProfile,
  };
};

export default GithubTransport();
