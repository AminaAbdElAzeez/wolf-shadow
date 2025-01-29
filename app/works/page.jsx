import React from "react";
import Custom from "../components/custom/Custom";
import Statistics from "../components/statistics/Statistics";
import VideoSection from "../components/videoSection/VideoSection";
import Profile from "../components/profile/Profile";
import ContactUs from "../components/contactUs/ContactUs";
import Slider from "../components/slider/slider";

function Works() {
  return (
    <section>
      <Custom />
      <Statistics />
      <Slider />
      <VideoSection />
      <Profile />
      <ContactUs />
    </section>
  );
}

export default Works;
