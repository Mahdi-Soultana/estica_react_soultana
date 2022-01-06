import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { Paragraph } from "../../globlaStyledComponents/globalComponents";
import InViewC from "../../Anim/InView";
function Text() {
  return (
    <article>
      <InViewC>
        <motion.h2>— Our Partners</motion.h2>
        <motion.div>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </Paragraph>
        </motion.div>
      </InViewC>
    </article>
  );
}

export default Text;
