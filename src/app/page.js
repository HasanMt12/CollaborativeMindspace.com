import Featured from "@/components/featured/HeroSection";
import CategoryItems from "@/components/categoryList/CategoryItems";
import Menu from "@/components/Menu/Menu";
import BlogCardList from "@/components/blogCardList/BlogCardList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Featured />
      <CategoryItems />
      <div className="flex gap-12">
        <BlogCardList />
        <Menu />
      </div>
    </div>
  )
}
