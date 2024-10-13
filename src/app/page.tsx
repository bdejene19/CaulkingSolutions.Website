import ContactFooter from "@/components/contact/ContactFooter";
import Navbar from "@/components/navbar/Navbar";
import ReviewContent from "@/components/reviews/ReviewContent";
import ServiceOptions from "@/components/services/ServiceOptions";
import bg from "../../public/background.png"


export default function Home() {
  return (
    <div style={{
        backgroundImage:  `url(${bg.src})`, 
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll"
    }}>
      <Navbar/>
      <main style={{padding: "1em"}}>
        <ServiceOptions/>
        <ReviewContent/>
        <ContactFooter></ContactFooter>
      </main>
    </div>
  );
}
