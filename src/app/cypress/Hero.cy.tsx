import React from "react";
import Hero from "@/components/common/hero";

describe("Hero Component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Set viewport size
  });

  it("renders the Hero component with an image and overlay", () => {
    cy.mount(<Hero />);

    // Check if the hero image is rendered
    cy.get("img[alt='hero-bg']").should("be.visible");

    // Verify the overlay is present
    cy.get("div.absolute.bg-black\\/70.w-full.h-full").should("exist");
  });

  it("displays the correct text content", () => {
    cy.mount(<Hero />);

    // Verify the main heading
    cy.contains(
      "Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights"
    ).should("be.visible");

    // Verify the subheading
    cy.contains(
      "Insights that inspire success: uncover a wealth of knowledge by staying updated"
    ).should("be.visible");
  });

  it("is responsive and adjusts for different screen sizes", () => {
    cy.mount(<Hero />);

    // Test for small screen (mobile)
    cy.viewport(375, 667);
    cy.get("div.relative").should("have.class", "h-60");

    // Test for large screen (desktop)
    cy.viewport(1280, 720);
    cy.get("div.relative").should("have.class", "md:h-[500]");
  });
});
