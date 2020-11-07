describe("Login page tests", () => {
  it("should visit the login page", () => {
    cy.visit("/");
  });

  it("should give focus to name input when clicking on it", () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').as("userInput");

    cy.get("@userInput").click();

    // Assert
    cy.get("@userInput").should('have.focus');    
  })

  it("should show error message when giving empty username", () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");

    cy.get("@userInput").click();
    cy.get("@passwordInput").click();

    // Assert
    cy.findByText("Debe informar el campo").should('exist').should('have.class', 'Mui-error');
  })

  it("should show error message when giving empty username", () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");

    cy.get("@passwordInput").click();
    cy.get("@userInput").click();

    // Assert
    cy.findByText("Debe informar el campo").should('exist').should('have.class', 'Mui-error');
  })

  it("should show an error popup when providing invalid credentials", () => {
    // Arrange
    const username = "xxxxx";
    const password = "xxxxx";

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    
    cy.get("@userInput").type(username);
    cy.get("@passwordInput").type(password);
    cy.findByRole("button").click();

    // Assert
    cy.findByRole("alert").should('contain.text', 'Usuario y/o password no válidos');
  })

  it("should show navigate to the submodule list page when providing valid credentials", () => {
    // Arrange
    const username = "admin";
    const password = "test";

    // Act
    cy.visit('/');
    cy.get('input[name="user"]').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    
    cy.get("@userInput").type(username);
    cy.get("@passwordInput").type(password);
    cy.findByRole("button").click();

    // Assert
    cy.url().should("eq", "http://localhost:8080/#/submodule-list");
  })
});
