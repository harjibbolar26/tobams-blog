import React from "react";
import { mount } from "cypress/react";
import Navbar from "@/components/common/navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Set viewport size for desktop
  });

  it("renders the logo", () => {
    mount(<Navbar />);
    cy.get("img[alt='logo']").should("be.visible");
  });

  it("shows Account and Take Assessment buttons on desktop", () => {
    mount(<Navbar />);
    cy.get("button").contains("Account").should("be.visible");
    cy.get("button").contains("Take Assessment").should("be.visible");
  });

  it("toggles menu on mobile", () => {
    cy.viewport(375, 667);
    mount(<Navbar />);
    cy.get("[data-cy='dropdown-trigger']")
      .should("be.visible")
      .should("not.have.css", "pointer-events", "none")
      .click();
    cy.get("[data-cy='dropdown-menu']")
      .should("be.visible")
      .should("not.have.css", "pointer-events", "none")
      .click();
    cy.get("[data-cy='dropdown-trigger']").click();
  });
});
