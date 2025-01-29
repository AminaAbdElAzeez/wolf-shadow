import Image from "next/image";
// import styles from "./page.module.css";
import Platform from "./components/platform/Platform";
import Statistics from "./components/statistics/Statistics";
import AboutUs from "./components/aboutUs/AboutUs";
import Offer from "./components/offer/Offer";
import OurServices from "./components/ourServices/OurServices";
import ContactUs from "./components/contactUs/ContactUs";
import ProfileSlider from "./components/profileSlider/profileSlider";
import Slider from "./components/slider/slider";
import ChooseUs from "./components/chooseUs/ChooseUs";

export default function Home() {
  return (
    <section className="home">
      <Platform />
      <Statistics />
      <Slider />
      <AboutUs />
      <ChooseUs />
      <Offer />
      <OurServices />
      <ProfileSlider />
      <ContactUs />
    </section>
  );
}
