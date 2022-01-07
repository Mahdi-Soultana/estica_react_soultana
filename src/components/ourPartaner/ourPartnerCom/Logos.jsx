import React from "react";
import { motion } from "framer-motion";
import InView from "../../anim/InView";
import src1 from "../partnerlogo/1 1.png";
import src2 from "../partnerlogo/2 1.png";
import src3 from "../partnerlogo/3 1.png";
import src4 from "../partnerlogo/4 1.png";
import src5 from "../partnerlogo/5 1.png";
function Logos() {
  return (
    <motion.article className="partner_logo">
      {[src1, src2, src3, src4, src5].map((src, i) => (
        <InView
          slide="up"
          threshold={1}
          anime={{
            scale: [2.2, 0.5, 1],
            transition: {
              delay: i * 0.2,
              type: "spring",
              duration: 0.4,
              damping: 10,
              times: [0, 0.8, 1],
            },
          }}
          hidden={{
            scale: [0, 1, 0],
            times: [0, 0.8, 1],
            transition: {
              delay: i * 0.2,
              type: "spring",
              duration: 0.1,
              damping: 10,
            },
          }}
        >
          <img src={src} />
        </InView>
      ))}
    </motion.article>
  );
}

export default Logos;
