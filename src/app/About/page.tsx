import AboutFAQ from "@/components/Aboutpage/AboutFAQ/AboutFAQ";
import AboutHeroSectionDesktop from "@/components/Aboutpage/AboutHeroSectionDesktop/AboutHeroSectionDesktop";
import AboutLifeAtRarePixels from "@/components/Aboutpage/AboutLifeAtRarePixels/AboutLifeAtRarePixels";
import AboutMisVis from "@/components/Aboutpage/AboutMisVis/AboutMisVis";
import AboutOurValues from "@/components/Aboutpage/AboutOurValues/AboutOurValues";
import AboutTeams from "@/components/Aboutpage/AboutTeams/AboutTeams";
import AboutTimeline from "@/components/Aboutpage/AboutTimeline/AboutTimeline";
import AboutWhyRarePixels from "@/components/Aboutpage/AboutWhyRarePixels/AboutWhyRarePixels";
import ScrollToTopButton from "@/components/Global/ScrollToTop/ScrollToTopButton";

export default function About() {
    return (
        <>
            <AboutHeroSectionDesktop />
            <AboutTimeline />
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