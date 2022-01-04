import React from "react";
import { WhyUsStyles, Icon, H3 } from "./WhyUsStyles";

import src1 from "./whyusicons/Vector-1.png";
import src2 from "./whyusicons/Vector.png";
import src3 from "./whyusicons/Vector-2.png";

function WhyUs() {
  return (
    <WhyUsStyles className="mainContainer">
      <h1>— Why Choose Us?</h1>
      <section className="whyusGrid">
        <article>
          <Icon url={src1}></Icon>
          <H3 size="2.4rem" weight="600">
            Professional & Friendly Agents
          </H3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit corrupti laudantium quidem
            minus eveniet
          </p>
        </article>
        <article>
          <Icon url={src2}></Icon>
          <H3 size="2.4rem" weight="600">
            Buy and Sell Awsome Property
          </H3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit
          </p>
        </article>
        <article>
          <Icon url={src3}></Icon>
          <H3 size="2.4rem" weight="600">
            Search Property from Anywhere
          </H3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit corrupti laudantium
          </p>
        </article>
      </section>
    </WhyUsStyles>
  );
}

export default WhyUs;
