import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import src1 from "../partnerlogo/1 1.png";
import src2 from "../partnerlogo/2 1.png";
import src3 from "../partnerlogo/3 1.png";
import src4 from "../partnerlogo/4 1.png";
import src5 from "../partnerlogo/5 1.png";
function Logos() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  return (
    <motion.article
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="partner_logo"
    >
      <motion.div variants={variants}>
        <img src={src1} />
      </motion.div>
      <motion.div variants={variants}>
        <img src={src2} />
      </motion.div>
      <motion.div variants={variants}>
        <img src={src3} />
      </motion.div>
      <motion.div variants={variants}>
        <img src={src4} />
      </motion.div>
      <motion.div variants={variants}>
        <img src={src5} />
      </motion.div>
    </motion.article>
  );
}

export default Logos;
