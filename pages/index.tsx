import { NextPage } from "next";
import React from "react";
import { useUserProfile } from "../service/github.api.hooks";

const Index: NextPage = () => {
  const {
    isLoading,
    error: error,
    data: userProfile,
  } = useUserProfile("test", "test");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <h1>{userProfile.name}</h1>
      <p>{userProfile.description}</p>
      <strong>👀 {userProfile.subscribers_count}</strong>{" "}
      <strong>✨ {userProfile.stargazers_count}</strong>{" "}
      <strong>🍴 {userProfile.forks_count}</strong>
    </>
  );
};

export default Index;
