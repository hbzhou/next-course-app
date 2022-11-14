import React from "react";
import { render, screen, renderHook, waitFor } from "@testing-library/react";
import Index from "../../pages/index";
import * as apiHooks from "../../service/github.api.hooks";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const mockData = {
  name: "spring-boot-all",
  description: "next app beginner",
  subscribers_count: 2,
  stargazers_count: 3,
  forks_count: 4,
};
const queryClient = new QueryClient();

describe("Index Page", () => {
  beforeEach(async () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    );
  });

  it("rending a head", () => {
    screen.debug();
  });
});
