import Footer from "../components/Footer";
// import Customize from "../components/Customize";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import Timeline from "../components/Timeline";
import GradientPlatform from "../components/GradientPlatform";
import LandingHero from "../components/LandingHero";
import React from "react";
import AiInCLI from "../components/AiInCLI";
import Navbar from "../components/Navbar";
import { Profiler } from 'react';

// function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
//   // Aggregate or log render timings...
//   console.table({
//     id, phase, actualDuration, baseDuration, startTime, commitTime
//   });
// }

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <AiInCLI />
      <GradientPlatform />
      <Timeline />
      <Authlite />
      <Showcase />
      {/* <Customize /> */}
      <Footer />
    </>
  );
}
