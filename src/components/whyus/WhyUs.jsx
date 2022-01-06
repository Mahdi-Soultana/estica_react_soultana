import React from "react";
import { WhyUsStyles, Icon, H3 } from "./WhyUsStyles";

import src1 from "./whyusicons/Vector-1.png";
import src2 from "./whyusicons/Vector.png";
import src3 from "./whyusicons/Vector-2.png";
import InViewC from "../anim/InView";
function WhyUs() {
  return (
    <WhyUsStyles className="mainContainer">
      <InViewC once={false}>
        <h1>— Why Choose Us?</h1>
      </InViewC>
      <section className="whyusGrid">
        <article>
          <InViewC slide={"down"}>
            <Icon layout url={src1}></Icon>
            <H3 size="2.4rem" weight="600">
              Professional & Friendly Agents
            </H3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              corporis obcaecati labore autem suscipit corrupti laudantium
              quidem minus eveniet
            </p>
          </InViewC>
        </article>
        <article>
          <InViewC slide={"down"}>
            <Icon layout url={src2}></Icon>
            <H3 size="2.4rem" weight="600">
              Buy and Sell Awsome Property
            </H3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              corporis obcaecati labore autem suscipit
            </p>
          </InViewC>
        </article>

        <article>
          <InViewC slide={"down"}>
            <Icon layout url={src3}></Icon>
            <H3 size="2.4rem" weight="600">
              Search Property from Anywhere
            </H3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              corporis obcaecati labore autem suscipit corrupti laudantium
            </p>
          </InViewC>
        </article>
      </section>
    </WhyUsStyles>
  );
}

export default WhyUs;
