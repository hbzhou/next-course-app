import React from "react";
import { useUserProfile } from "../service/github.api.hooks";

const Index = () => {
  const { isLoading, error, data } = useUserProfile("hbzhou", "next-course-app");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "An error has occurred: No data";

  return (
    <>
      <h1 className=' text-3xl text-green-600 p-2 m-2'>{data.name}</h1>
      <p className=' text-2xl text-blue-50 p-2 m-2'>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong> <strong>🍴 {data.forks_count}</strong>
    </>
  );
};

export default Index;
