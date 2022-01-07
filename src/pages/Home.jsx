import React from "react";
import Agent from "../components/agents/Agent";
import Layout from "../components/layout/Layout";
import Partners from "../components/ourPartaner/Partners";
import WhyUs from "../components/whyus/WhyUs";
import Reviews from "../components/reviews/Reviews";
import Divider from "../components/divder/Divider";
import Question from "../components/question/Question";
import { motion, useViewportScroll } from "framer-motion";
import Line from "./Line";
function Home() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      <Layout>
        <div className="line">
          <Line />
        </div>
        <Partners />
        <Agent />
        <WhyUs />
        <Divider />
        <Reviews />
        <Question />
      </Layout>
    </>
  );
}

export default Home;
