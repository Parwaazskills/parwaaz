import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogsHero from "../sections/BlogsHero";
import BlogsListingSection from "../sections/BlogsListingSection";

export default function blogs() {
  return (
    <main className="w-full overflow-visible bg-white">
      <div className="absolute left-0 top-0 z-[999] w-full">
                      <Navbar/>
      </div>
     <BlogsHero/>
     <BlogsListingSection/>
      <Footer/>
    </main>
  );
}