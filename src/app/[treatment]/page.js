// pages/treatment/[treatment].js

"use client"; // Ensure this directive is at the top
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import AboutSection from "@/components/aboutSection/AboutSection";
import Symptoms from "@/components/Symptoms/Symptoms";
import FourthSection from "@/components/fourthSection/FourthSection";
import Footer from "@/components/footer/footer";
import { treatmentData } from "@/data/treatmentData"; // Adjust the path as needed

// List of allowed treatments
const allowedTreatments = [
  "psoriasis",
  "osteoarthritis",
  "low-back-pain",
  "hemorrhoids",
  "asthma",
  "sciatica",
  "gall-bladder-stones",
  "rheumatoid-arthritis",
  "arthritis",
  "diabetes-mellitus",
  "kidney-stones",
];

const TreatmentPage = () => {
  const params = useParams();
  const { treatment } = params;

  // If the treatment is not allowed, show a 404
  if (!allowedTreatments.includes(treatment)) {
    notFound();
  }

  // Find the treatment data
  const currentTreatment = treatmentData.find((item) => item.id === treatment);

  // If treatment data not found, show 404
  if (!currentTreatment) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <Banner image={currentTreatment.bannerImage} phoneNumber={currentTreatment.phoneNumber} />
      <AboutSection
        title={currentTreatment.aboutSection.title}
        content={currentTreatment.aboutSection.content}
        image={currentTreatment.aboutSection.image}
      />
      <Symptoms sections={currentTreatment.sections} />
      {currentTreatment.para && (
        <FourthSection
          heading={currentTreatment.para.heading}
          paragraph={currentTreatment.para.paragraph}
          image={currentTreatment.para.image}
        />
      )}
      <Footer />
    </>
  );
};

export default TreatmentPage;
