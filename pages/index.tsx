import { NextPage } from "next";
import { useUserProfile } from "../service/github.api.hooks";

const Home: NextPage = () => {
  const {
    isLoading,
    error: error,
    data: userProfile,
  } = useUserProfile("hbzhou", "spring-boot-all");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>{userProfile.name}</h1>
      <p>{userProfile.description}</p>
      <strong>👀 {userProfile.subscribers_count}</strong>{" "}
      <strong>✨ {userProfile.stargazers_count}</strong>{" "}
      <strong>🍴 {userProfile.forks_count}</strong>
    </div>
  );
};

export default Home;
