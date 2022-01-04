import React from "react";
import { WhyUsStyles, Icon, H3 } from "./WhyUsStyles";
import v2Src from "/resources/whyusicons/Vector-1.png";
import v1Src from "/resources/whyusicons/Vector.png";
import v3Src from "/resources/whyusicons/Vector-2.png";
function WhyUs() {
  return (
    <WhyUsStyles className="mainContainer">
      <h1>— Why Choose Us?</h1>
      <section className="whyusGrid">
        <article>
          <Icon url={v3Src}></Icon>
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
          <Icon url={v1Src}></Icon>
          <H3 size="2.4rem" weight="600">
            Buy and Sell Awsome Property
          </H3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit
          </p>
        </article>
        <article>
          <Icon url={v2Src}></Icon>
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
