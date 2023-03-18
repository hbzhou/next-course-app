import { render, screen } from "@testing-library/react";
import Index from "../../pages/index";
import { withReactTRPC } from "../../server/trpcReactWrapper";

const mockData = {
  name: "spring-boot-all",
  description: "next app beginner",
  subscribers_count: 2,
  stargazers_count: 3,
  forks_count: 4,
};

describe("Index Page", () => {
  beforeEach(async () => {
    const wrapper = render(<Index />, { wrapper: withReactTRPC });
  });

  it("rending a head", () => {
    screen.debug();
  });
});
