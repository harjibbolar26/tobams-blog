// cypress/component/MainBlog.cy.tsx
import React from "react";
import MainBlog from "@/components/common/blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Mock blog data
const mockBlogs = [
  {
    id: "1",
    title: "Test Blog 1",
    description: "Description 1",
    cover_image: "/test1.jpg",
    tags: "Technology",
    slug: "test-blog-1",
    created_at: "2024-01-01T00:00:00Z",
    reading_time_minutes: 5,
    tag_list: ["Technology", "Web"],
  },
  {
    id: "2",
    title: "Development Blog",
    description: "Description 2",
    cover_image: "/test2.jpg",
    tags: "Development",
    slug: "dev-blog",
    created_at: "2024-01-02T00:00:00Z",
    reading_time_minutes: 3,
    tag_list: ["Development", "Programming"],
  },
  // Add more mock blogs to test load more functionality
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `${i + 3}`,
    title: `Blog ${i + 3}`,
    description: `Description ${i + 3}`,
    cover_image: "/test.jpg",
    tags: "General",
    slug: `blog-${i + 3}`,
    created_at: "2024-01-03T00:00:00Z",
    reading_time_minutes: 4,
    tag_list: ["General"],
  })),
];

describe("MainBlog Component", () => {
  beforeEach(() => {
    // Mock the API call
    cy.intercept("GET", "https://dev.to/api/articles", {
      statusCode: 200,
      body: mockBlogs,
    }).as("getBlogs");

    // Mount component with QueryClientProvider
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <MainBlog />
      </QueryClientProvider>
    );

    // Wait for the initial API call to complete
    cy.wait("@getBlogs");
  });

  it("renders the main heading", () => {
    cy.contains("Stay Updated with the Latest trends in Tobams Group").should(
      "be.visible"
    );
  });

  describe("Search and Filter Functionality", () => {
    it("search input should be disabled initially", () => {
      cy.get('input[placeholder="Search"]').should("be.disabled");
    });

    it("enables search when filter method is selected", () => {
      cy.get(".w-\\[180px\\]").click();
      cy.contains("Title").click();
      cy.get('input[placeholder="Search"]').should("not.be.disabled");
    });

    it("filters blogs by title", () => {
      // Select title filter
      cy.get(".w-\\[180px\\]").click();
      cy.contains("Title").click();

      // Type in search
      cy.get('input[placeholder="Search"]').type("Development");

      // Should show only the development blog
      cy.contains("Development Blog").should("be.visible");
      cy.contains("Test Blog 1").should("not.exist");
    });

    it("filters blogs by tag", () => {
      // Select tag filter
      cy.get(".w-\\[180px\\]").click();
      cy.contains("Tag").click();

      // Search for Technology tag
      cy.get('input[placeholder="Search"]').type("Technology");

      // Should show only blogs with Technology tag
      cy.contains("Test Blog 1").should("be.visible");
      cy.contains("Development Blog").should("not.exist");
    });
  });

  describe("Load More Functionality", () => {
    it("initially shows 6 blogs", () => {
      cy.get(".grid > div").should("have.length", 6);
    });

    it("shows load more button when there are more blogs", () => {
      cy.contains("Load More").should("be.visible");
    });

    it("loads all blogs when Load More is clicked", () => {
      cy.contains("Load More").click();
      cy.get(".grid > div").should("have.length", mockBlogs.length);
      cy.contains("Show Less").should("be.visible");
    });

    it("returns to initial state when Show Less is clicked", () => {
      cy.contains("Load More").click();
      cy.contains("Show Less").click();
      cy.get(".grid > div").should("have.length", 6);
      cy.contains("Load More").should("be.visible");
    });
  });
});
