import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { Paragraph } from "../../globlaStyledComponents/globalComponents";
function Text() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 1,
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
    <article>
      <motion.h2
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
      >
        — Our Partners
      </motion.h2>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </Paragraph>
      </motion.div>
    </article>
  );
}

export default Text;
