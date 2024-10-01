"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Banner from "./components/banner/Banner";
import AboutSection from "./components/aboutSection/AboutSection";
import Symptoms from "./components/Symptoms/Symptoms";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <>
      <Banner />
      <AboutSection />
      <Symptoms/>
    </>
  );
};

export default Home;
