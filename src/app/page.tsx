import About from "@/components/Homepage/About/About";
import Hero from "@/components/Homepage/Hero/Hero";
import Industries from "@/components/Homepage/Industries/Industries";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Testimonials />
            <About />
            <Industries />
        </>
    );
}
