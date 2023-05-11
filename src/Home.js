import React from "react";
import Navbar from "./component/navbar";
import Header from './component/Header';
import HowItWorks from "./component/HowItWorks";
import Aboutus from "./component/Aboutus";
import Services from "./component/Services";
import Contacts from "./component/Contact";
import Footer from "./component/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
