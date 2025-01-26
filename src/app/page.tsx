import MainBlog from "@/components/common/blog";
import Hero from "@/components/common/hero";

export default function Home() {
  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <Hero />
        <MainBlog />
        {/* <Newsletter /> */}
      </div>
    </div>
  );
}
