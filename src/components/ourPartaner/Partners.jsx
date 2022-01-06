import React from "react";
import { motion } from "framer-motion";
import { Houses, PartnerStyles } from "./PartnerStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";
import home from "./home.jpg";

import Text from "./ourPartnerCom/Text";
import Logos from "./ourPartnerCom/Logos";

import InViewC from "../anim/InView";
function Partners() {
  return (
    <PartnerStyles className="mainContainer">
      <section>
        <Text />
        <Logos />
      </section>
      <Houses size="1.8rem">
        <article>
          <InViewC slide="down" threshold={0.5} distance={200}>
            <motion.h2>— Home For Sale</motion.h2>

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </Paragraph>
          </InViewC>

          <div className="houses">
            {dataJSX.map((item, i) => (
              <InViewC
                key={i}
                slide="down"
                threshold={0}
                anime={{
                  transition: { delay: i * 0.1, type: "spring", stifness: 50 },
                }}
              >
                {item}
              </InViewC>
            ))}
          </div>
        </article>
      </Houses>
    </PartnerStyles>
  );
}
const dataJSX = [
  <div>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80"
        }
        alt=""
      />
    </div>
    <h3>Financial Office, Romania</h3>
    <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
    <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
      $20,000 <span>$10,500</span>
    </Paragraph>
    <div className="underline"></div>
    <InViewC
      slide="up"
      distance={100}
      anime={{ transition: { duration: 1.5, type: "tween" } }}
    >
      <button className="btn">inquiry now</button>
    </InViewC>
  </div>,
  <div>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
    </div>
    <h3>Financial Office, Romania</h3>
    <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
    <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
      $20,000 <span>$10,500</span>
    </Paragraph>
    <div className="underline"></div>
    <InViewC slide="up" distance={200} anime={{ transition: { duration: 1 } }}>
      <button className="btn">inquiry now</button>
    </InViewC>
  </div>,
  <div>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
    </div>
    <h3>Financial Office, Romania</h3>
    <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
    <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
      $20,000 <span>$10,500</span>
    </Paragraph>
    <div className="underline"></div>
    <InViewC slide="up" distance={200} anime={{ transition: { duration: 1 } }}>
      <button className="btn">inquiry now</button>
    </InViewC>
  </div>,
  <div>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
    </div>
    <h3>Financial Office, Romania</h3>
    <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
    <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
      $20,000 <span>$10,500</span>
    </Paragraph>
    <div className="underline"></div>
    <InViewC slide="up" distance={200} anime={{ transition: { duration: 1 } }}>
      <button className="btn">inquiry now</button>
    </InViewC>
  </div>,
];
export default Partners;
