import React from "react";
import { WhyUsStyles, H3 } from "./QuestionStyles";

import src1 from "./whyusicons/icons/Vector-1.png";
import src2 from "./whyusicons/icons/Vector.png";
import src3 from "./whyusicons/icons/Vector-3.png";
import src4 from "./whyusicons/icons/Vector-2.png";

function Question() {
  return (
    <WhyUsStyles className="mainContainer">
      <h1>— Why Choose Us?</h1>
      <section className="whyusGrid">
        <article>
          <img src={src1} />
          <H3 size="2.4rem" weight="600">
            CallUs
          </H3>
          <p>(+121)983272234</p>
        </article>
        <article>
          <img src={src4} />

          <H3 size="2.4rem" weight="600">
            Email
          </H3>
          <p>Mans@gmail.com</p>
        </article>
        <article>
          <img src={src2} />

          <H3 size="2.4rem" weight="600">
            Address
          </H3>
          <p>24, Wallstreet, NY 20001</p>
        </article>
        <article>
          <img src={src3} />

          <H3 size="2.4rem" weight="600">
            WEBsite
          </H3>
          <p>www.domain.com</p>
        </article>
      </section>
    </WhyUsStyles>
  );
}

export default Question;
