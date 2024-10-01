import AboutSection from "@/components/aboutSection/AboutSection";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/footer";
import FourthSection from "@/components/fourthSection/FourthSection";
import Navbar from "@/components/navbar/Navbar";
import Symptoms from "@/components/Symptoms/Symptoms";

export default function Treatment({ params }) {
  const { treatment } = params;
  return (
    <>
      <Navbar />
      <Banner />
      <AboutSection />
      <Symptoms />
      <FourthSection />
      <Footer />
    </>
  );
}
