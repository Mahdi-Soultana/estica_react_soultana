import React, { useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styled from "styled-components";
export const LineBg = styled.div`
  width: ${(p) => p.width || "100%"};
  background-color: red;
  height: 3px;
`;
function Line() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    // <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //   <motion.path
    //     d="M0,288L34.3,282.7C68.6,277,137,267,206,240C274.3,213,343,171,411,144C480,117,549,107,617,122.7C685.7,139,754,181,823,202.7C891.4,224,960,224,1029,229.3C1097.1,235,1166,245,1234,229.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
    //     style={{ pathLength: 0 }}
    //   ></motion.path>
    // </motion.svg>
    <>
      <LineBg width={"40%"} />
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
    </>
  );
}

export default Line;
