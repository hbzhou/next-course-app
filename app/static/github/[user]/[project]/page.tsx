import React from "react";

const Github = async ({ params }: { params: { user: string; project: string } }) => {
  const { user: userName, project: projectName } = params;
  const res = await fetch(`https://api.github.com/repos/${userName}/${projectName}`);
  const data = await res.json();

  if (!data) return "Loading...";

  return (
    <>
      <h1 className=' text-3xl text-green-600 p-2 m-2'>{data.name}</h1>
      <p className=' text-2xl text-red-400 p-2 m-2'>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong> <strong>🍴 {data.forks_count}</strong>
    </>
  );
};

export default Github;
