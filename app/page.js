import Image from "next/image";
import styles from "./page.module.css";
import Platform from "./_components/platform/Platform";
import Statistics from "./_components/statistics/Statistics";
import AboutUs from "./_components/aboutUs/AboutUs";
import ChooseUs from "./_components/chooseUs/chooseUs";
import Offer from "./_components/offer/Offer";
import OurServices from "./_components/ourServices/OurServices";
import ContactUs from "./_components/contactUs/ContactUs";

export default function Home() {
  return (
    <section className="home">
      <Platform />
      <Statistics />
      <AboutUs />
      <ChooseUs />
      <Offer />
      <OurServices />
      <ContactUs />
    </section>
  );
}
