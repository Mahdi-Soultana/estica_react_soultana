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
      {[src1, src2, src3, src4, src5].map((src) => (
        <InView>
          <img src={src} />
        </InView>
      ))}
    </motion.article>
  );
}

export default Logos;
