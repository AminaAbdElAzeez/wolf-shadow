import dynamic from "next/dynamic";
import TopContact from "../components/topContact/topContact";
import ContactInfo from "../components/contactsInfo/contactsInfo";
// import GoogleMaps from "../components/googleMaps/googleMaps";
import ContactUs from "../components/contactUs/ContactUs";
import Sent from "../components/sent/sent";
import Serve from "../components/serve/serve";
import Map from "../components/map/map";

function Contact() {
  return (
    <section>
      <TopContact />
      <ContactInfo />
      <Map />
      <ContactUs />
      <Sent />
      <Serve />
    </section>
  );
}

export default Contact;
