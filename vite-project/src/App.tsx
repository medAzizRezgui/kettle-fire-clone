import NavigationBar from "./sections/NavigationBar";
import Hero from "./sections/Hero";
import GetStarted from "./sections/GetStarted";
import Benefits from "./sections/Benefits";
import AboutUs from "./sections/AboutUs";
import Testimonials from "./sections/Testimonials";
import Quiz from "./sections/Quiz";
import React, { Suspense } from "react";

const Save = React.lazy(() => import("./sections/Save"));
const Recipes = React.lazy(() => import("./sections/Recipes"));
const RcGrid = React.lazy(() => import("./sections/RcGrid"));
const Stores = React.lazy(() => import("./sections/Stores"));
const Discount = React.lazy(() => import("./sections/Discount"));
function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <GetStarted />
      <Benefits />
      <AboutUs />
      <Testimonials />
      <Quiz />
      <Suspense fallback={<h1>Loading</h1>}>
        <Save />
        <Recipes />
        <RcGrid />
        <Stores />
        <Discount />
      </Suspense>
    </>
  );
}

export default App;
