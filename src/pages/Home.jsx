import React from "react";
import Agent from "../components/agents/Agent";
import Layout from "../components/layout/Layout";
import Partners from "../components/ourPartaner/Partners";
import WhyUs from "../components/whyus/WhyUs";
import Reviews from "../components/reviews/Reviews";
import Divider from "../components/divder/Divider";

function Home() {
  return (
    <Layout>
      <Partners />
      <Agent />
      <WhyUs />
      <Divider />
      <Reviews />
    </Layout>
  );
}

export default Home;
