import Hero from "../sections/Home Page/Hero";
import GetStarted from "../sections/Home Page/GetStarted";
import Benefits from "../sections/Home Page/Benefits";
import AboutUs from "../sections/Home Page/AboutUs";
import Testimonials from "../sections/Home Page/Testimonials";
import Quiz from "../sections/Home Page/Quiz";
import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import Layout from "../sections/Layout/Layout";

const Save = React.lazy(() => import("../sections/Home Page/Save"));
const Recipes = React.lazy(() => import("../sections/Home Page/Recipes"));
const RcGrid = React.lazy(() => import("../sections/Home Page/RcGrid"));
function HomePage() {
  return (
    <Layout>
      <Hero />
      <GetStarted />
      <Benefits />
      <AboutUs />
      <Testimonials />
      <Quiz />
      <Suspense fallback={<Spinner />}>
        <Save />
        <Recipes />
        <RcGrid />
      </Suspense>
    </Layout>
  );
}

export default HomePage;
