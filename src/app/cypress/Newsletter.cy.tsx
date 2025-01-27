import React from "react";
import Newsletter from "@/components/common/newsletter";

describe("Newsletter Component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Default viewport size for desktop
  });

  it("renders the newsletter section with correct text", () => {
    cy.mount(<Newsletter />);

    // Check for the main heading
    cy.contains("Sign Up for Our Newsletter").should("be.visible");

    // Check for the description text
    cy.contains("Subscribe to receive our latest company updates").should(
      "be.visible"
    );
  });

  it("has an input field with a placeholder", () => {
    cy.mount(<Newsletter />);

    // Verify input field exists and has correct placeholder
    cy.get("input[name='search']")
      .should("be.visible")
      .and("have.attr", "placeholder", "Enter your email");
  });

  it("renders the subscribe button", () => {
    cy.mount(<Newsletter />);

    // Verify button exists and has correct text
    cy.get("button").contains("Subscribe").should("be.visible");
  });

  it("is responsive across different screen sizes", () => {
    cy.mount(<Newsletter />);

    // Test for small screen (mobile)
    cy.viewport(375, 667);
    cy.get("div").should("have.class", "p-4");
  });

  it("allows typing into the input field", () => {
    cy.mount(<Newsletter />);

    // Type into the input field and verify the value
    cy.get("input[name='search']")
      .type("user@example.com")
      .should("have.value", "user@example.com");
  });
});
