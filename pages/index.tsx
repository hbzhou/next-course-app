import { NextPage } from "next";
import React from "react";
import { useUserProfile } from "../service/github.api.hooks";

const Index = () => {
  const { isLoading, error, data } = useUserProfile("hbzhou", "next-course-app");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1 className=" text-3xl text-green-600 p-2 m-2">{data!.name}</h1>
      <p className=" text-2xl text-red-400 p-2 m-2">{data!.description}</p>
      <strong>👀 {data!.subscribers_count}</strong> <strong>✨ {data!.stargazers_count}</strong>{" "}
      <strong>🍴 {data!.forks_count}</strong>
    </>
  );
};

export default Index;
