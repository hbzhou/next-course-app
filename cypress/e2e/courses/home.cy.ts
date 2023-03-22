describe("home page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/trpc/*").as("courses");
    cy.visit("/");
  });

  it("Navbar", () => {
    cy.get(".navbar-start > img").should("have.attr", "alt").and("eq", "logo");
    cy.get(".navbar-end .btn").should("be.visible").should("have.text", "Logout");
    cy.get(".navbar-end > div").children("div").first().should("have.text", "Jeremy");
  });

  it("Courses search bar", () => {
    cy.get(".courses input").should("have.attr", "placeholder").and("eq", "Enter Course Name");
    cy.get(".courses .btn-square").should("have.text", "Search");
  });

  it("Course content", () => {
    cy.get(".course-card").should("have.length", 1);
    cy.get(".card-body .card-title").should("be.visible").should("have.text", "Testing");
    cy.get(".card-body p").should("contain.text", "Javascript is a good  programming language");
    cy.get(".card-body > div").children().should("have.length", 4);
  });
});
