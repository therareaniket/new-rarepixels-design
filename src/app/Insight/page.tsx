import BlogListingHero from "@/components/BlogListingpage/BlogHero/BlogListingHero";
import BlogListingCards from "@/components/BlogListingpage/BlogListingCards/BlogListingCards";
import BlogTopCards from "@/components/BlogListingpage/BlogTopCards/BlogTopCards";
import ScrollToTopButton from "@/components/Global/ScrollToTop/ScrollToTopButton";



export default function Blog() {
    return(
        <>
            {/* <BlogListingHero /> */}
            <BlogTopCards /> 
            <BlogListingCards />

            <ScrollToTopButton />
        </>
    );
}