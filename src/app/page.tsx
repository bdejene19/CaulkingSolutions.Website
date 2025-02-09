import ContactFooter from "@/components/contact/ContactFooter";
import ReviewContent from "@/components/reviews/ReviewContent";
import ServiceOptions from "@/components/services/ServiceOptions";
import bg from "../../public/background.png"
import Hero from "@/components/hero/Hero";
import { MainBenefits } from "@/components/benefits/MainBenefits";


export default function Home() {
  return (
    <div style={{
        backgroundImage:  `url(${bg.src})`, 
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
        padding: "1em"
    }}>
        <Hero/>
        <MainBenefits containerStyle={{backgroundColor: "#f9eeee", display: "grid", gap: "1em", borderRadius: "5px",  padding: "2em"}}/>
        <ServiceOptions/>
        <ReviewContent/>
        <ContactFooter></ContactFooter>

    </div>
  );
}
