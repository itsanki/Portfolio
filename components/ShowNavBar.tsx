"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { BlurFade } from "@/components/magicui/blur-fade";

const ShowNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 0.05);

    return () => clearTimeout(timer);
  });

  return <>{showNavbar && <Navbar />}</>;
};

export default ShowNavBar;
