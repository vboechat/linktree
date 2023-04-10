describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should successfully render page", () => {
    cy.get("h1").should("contain", "Victor Ribeiro Boechat");
  });

  it("should be able to click and redirect to some page", () => {
    cy.get('a[data-testid="LinkedIn"]')
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/victor-ribeiro-boechat-641225238/"
      )
      .should("have.attr", "target", "_blank");
  });
});
