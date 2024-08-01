"use client"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-SDZLZ08D6Z";


const GTagComp = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing Page" });
  }, []);

  return null; // Ensure the component returns null to avoid potential issues
};

// Wrap the component with the error boundary
const GTagCompWithErrorBoundary = () => {
  return (
      <GTagComp />
  );
};

export default GTagCompWithErrorBoundary;
