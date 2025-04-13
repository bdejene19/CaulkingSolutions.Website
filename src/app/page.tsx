import ContactFooter from "@/components/contact/ContactFooter";
import ReviewContent from "@/components/reviews/ReviewContent";
import ServiceOptions from "@/components/services/ServiceOptions";
import bg from "../../public/background.png"
import Hero from "@/components/hero/Hero";
import { MainBenefits } from "@/components/benefits/MainBenefits";
import { Faqs } from "@/components/faqs/Faqs";


export default function Home() {
  return (
    <div style={{
        padding: "3em"
    }}>
        <Hero/>
        <MainBenefits containerStyle={{backgroundColor: "#f9eeee", display: "grid", height: "100%", gap: "1em", borderRadius: "5px",  padding: "2em"}}/>
        <ServiceOptions/>
        <Faqs/>
        <ReviewContent/>
        <ContactFooter></ContactFooter>

    </div>
  );
}
