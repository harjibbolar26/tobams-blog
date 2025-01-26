"use client";

import React, { createContext, useContext } from "react";

const BlogMappingContext = createContext<Record<string, unknown>>({});

interface BlogMappingProviderProps {
  value: Record<string, unknown>;
  children: React.ReactNode;
}

export function BlogMappingProvider({
  value,
  children,
}: BlogMappingProviderProps) {
  return (
    <BlogMappingContext.Provider value={value}>
      {children}
    </BlogMappingContext.Provider>
  );
}

export function useBlogMapping() {
  const context = useContext(BlogMappingContext);
  if (!context) {
    throw new Error("useBlogMapping must be used within a BlogMappingProvider");
  }
  return context;
}
