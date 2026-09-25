import About from "@/components/Homepage/About/About";
import Blog from "@/components/Homepage/Blog/Blog";
import FAQ from "@/components/Homepage/FAQ/FAQ";
import Hero from "@/components/Homepage/Hero/Hero";
import Industries from "@/components/Homepage/Industries/Industries";
import InquiryForm from "@/components/Homepage/InquiryForm/InquiryForm";
import Projects from "@/components/Homepage/Projects/Projects";
import Statistics from "@/components/Homepage/Statistics/Statistics";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs/WhyChooseUs";

export default function Home() {
    return (
        <>
            <Hero />
            <Testimonials />
            <About />
            <Industries />
            <WhyChooseUs />
            <Projects />
            <Statistics />
            <Blog />
            <FAQ />
            <InquiryForm />
        </>
    );
}
