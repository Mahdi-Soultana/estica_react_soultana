import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const InViewC = ({ children }) => {
  return (
    <InView threshold={0.7}>
      {({ ref, inView }) => {
        return (
          <motion.div
            ref={ref}
            animate={{
              x: inView ? 0 : -200,
              opacity: inView ? 1 : 0,
              transition: { delay: 1, stiffness: 100, type: "spring" },
            }}
          >
            {children}
          </motion.div>
        );
      }}
    </InView>
  );
};

export default InViewC;
