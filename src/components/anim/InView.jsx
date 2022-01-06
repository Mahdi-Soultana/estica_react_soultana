import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function InViewC({
  children,
  anime,
  hidden: hiddenC,
  slide,
  distance = 200,
  threshold = 0.5,
  delay = 0,
  once = true,
}) {
  let direction;

  switch (slide) {
    case "up":
      direction = -1;
      break;
    case "down":
      direction = 1;
      break;

    default:
      direction = 0;
      break;
  }
  const show = {
    x: 0,
    opacity: 1,
    y: 0,
    originX: 0.5,
    originY: 0.5,
    ...anime,
  };
  const hidden = {
    x: slide == "up" || slide == "down" ? 0 : -200,
    y: distance * direction,
    opacity: 0,
    originX: 0.5,
    originY: 0.5,
    ...hiddenC,
  };
  return (
    <div>
      <InView threshold={threshold} triggerOnce={once}>
        {({ ref, inView }) => {
          return (
            <motion.div ref={ref} animate={inView ? show : hidden}>
              {children}
            </motion.div>
          );
        }}
      </InView>
    </div>
  );
}

export default InViewC;
