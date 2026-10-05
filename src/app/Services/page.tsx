import ScrollToTopButton from "@/components/Global/ScrollToTop/ScrollToTopButton";
import ServiceFAQ from "@/components/Servicepage/ServiceFAQ/ServiceFAQ";
import ServiceHero from "@/components/Servicepage/ServiceHero/ServiceHero";
import ServicesHowWeWork from "@/components/Servicepage/ServicesHowWeWork/ServicesHowWeWork";


export default function Services() {
    return (
        <>
            <ServiceHero />
            <ServicesHowWeWork />
            <ServiceFAQ />

            <ScrollToTopButton />
        </>
    );
}