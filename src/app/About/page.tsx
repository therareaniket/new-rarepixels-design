import AboutFAQ from "@/components/Aboutpage/AboutFAQ/AboutFAQ";
import AboutHero from "@/components/Aboutpage/AboutHero/AboutHero";
import AboutLifeAtRarePixels from "@/components/Aboutpage/AboutLifeAtRarePixels/AboutLifeAtRarePixels";
import AboutMisVis from "@/components/Aboutpage/AboutMisVis/AboutMisVis";
import AboutOurValues from "@/components/Aboutpage/AboutOurValues/AboutOurValues";
import AboutTeams from "@/components/Aboutpage/AboutTeams/AboutTeams";
import AboutWhyRarePixels from "@/components/Aboutpage/AboutWhyRarePixels/AboutWhyRarePixels";
import Hero from "@/components/Homepage/Hero/Hero";

export default function About() {
    return(
        <>
            <AboutHero />
            <AboutMisVis />
            <AboutOurValues />
            <AboutTeams />
            <AboutWhyRarePixels />
            <AboutLifeAtRarePixels />
            <AboutFAQ />
        </>
    );
}