import AboutFAQ from "@/components/Aboutpage/AboutFAQ/AboutFAQ";
import AboutHeroSectionDesktop from "@/components/Aboutpage/AboutHeroSectionDesktop/AboutHeroSectionDesktop";
import AboutLifeAtRarePixels from "@/components/Aboutpage/AboutLifeAtRarePixels/AboutLifeAtRarePixels";
import AboutMisVis from "@/components/Aboutpage/AboutMisVis/AboutMisVis";
import AboutOurValues from "@/components/Aboutpage/AboutOurValues/AboutOurValues";
import AboutTeams from "@/components/Aboutpage/AboutTeams/AboutTeams";
import AboutWhyRarePixels from "@/components/Aboutpage/AboutWhyRarePixels/AboutWhyRarePixels";
import ScrollToTopButton from "@/components/Global/ScrollToTop/ScrollToTopButton";
import Hero from "@/components/Homepage/Hero/Hero";

export default function About() {
    return(
        <>
            {/* <AboutHero /> */}
            <AboutHeroSectionDesktop />
            <AboutMisVis />
            <AboutOurValues />
            <AboutTeams />
            <AboutWhyRarePixels />
            <AboutLifeAtRarePixels />
            <AboutFAQ />

            <ScrollToTopButton />
        </>
    );
}