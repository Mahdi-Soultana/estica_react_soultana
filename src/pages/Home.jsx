import React from "react";
import Agent from "../components/agents/Agent";
import Layout from "../components/layout/Layout";
import Partners from "../components/ourPartaner/Partners";
import WhyUs from "../components/whyus/WhyUs";

function Home() {
  return (
    <Layout>
      <Partners />
      <Agent />
      <WhyUs />
    </Layout>
  );
}

export default Home;
