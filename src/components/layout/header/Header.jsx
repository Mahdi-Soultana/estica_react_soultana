import React from "react";
import Home2 from "./home2.jpg";
import { HeaderStyles } from "./HeaderStyles";
import { Paragraph } from "../../globlaStyledComponents/globalComponents";
import { motion, useViewportScroll, useTransform } from "framer-motion";
function Header({ children }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,

        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const navVariant = {
    hidden: { y: -100, opacity: 0 },
    show: {
      opacity: 1,
      y: 40,
      mass: 0.5,
      velocity: 2,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 100, 300], [0, -100, 140]);
  return (
    <HeaderStyles variants={container} initial="hidden" animate="show">
      <motion.div
        variants={navVariant}
        style={{ position: "absolute", width: "100%" }}
      >
        {children}
      </motion.div>
      <motion.div variants={navVariant} className="mainContainer">
        <motion.article style={{ y: y2 }} animate={{ y: 100 }}>
          {" "}
          <h1>
            The better way
            <br /> to buy real estate.
          </h1>
          <Paragraph weight="500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its versions have
            evolved over layout.{" "}
          </Paragraph>
          <form>
            <div>
              <input type="text" />
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </form>
        </motion.article>
        <motion.article style={{ y }}>
          <div className="imgContainer">
            <img src={Home2} alt="placeholder" />
          </div>
        </motion.article>
      </motion.div>
    </HeaderStyles>
  );
}

export default Header;
