export async function getBlogMapping(): Promise<{ [slug: string]: number }> {
  try {
    const response = await fetch("https://api.example.com/blogs");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const blogs: { id: number; slug: string }[] = await response.json();
    return blogs.reduce((acc: { [slug: string]: number }, blog) => {
      acc[blog.slug] = blog.id;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching blog mapping:", error);
    return {}; // Return an empty mapping as a fallback
  }
}
