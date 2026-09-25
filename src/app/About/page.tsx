import AboutFAQ from "@/components/Aboutpage/AboutFAQ/AboutFAQ";
import AboutHero from "@/components/Aboutpage/AboutHero/AboutHero";
import AboutMisVis from "@/components/Aboutpage/AboutMisVis/AboutMisVis";
import AboutOurValues from "@/components/Aboutpage/AboutOurValues/AboutOurValues";
import Hero from "@/components/Homepage/Hero/Hero";

export default function About() {
    return(
        <>
            <AboutHero />
            <AboutMisVis />
            <AboutOurValues />
            <AboutFAQ />
        </>
    );
}