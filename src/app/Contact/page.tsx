import ContactFAQ from "@/components/Contactpage/ContactFAQ/ContactFAQ";
import ContactForm from "@/components/Contactpage/ContactForm/ContactForm";
import ContactHero from "@/components/Contactpage/ContactHero/ContactHero";
import ContactWhatHappen from "@/components/Contactpage/ContactWhatHappen/ContactWhatHappen";


export default function Contact () {
    return(
        <>
            <ContactHero />
            <ContactForm />
            <ContactWhatHappen />
            <ContactFAQ />
        </>
    );
}