import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Index from "../../pages/index";

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
