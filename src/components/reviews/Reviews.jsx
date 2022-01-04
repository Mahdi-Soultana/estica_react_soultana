import React from "react";
import { WhyUsStyles, H3 } from "./WhyUsStyles";

import src1 from "./whyusicons/Vector-1.png";
import src2 from "./whyusicons/Vector.png";
import src3 from "./whyusicons/Vector-2.png";

function Reviews() {
  return (
    <WhyUsStyles className="mainContainer">
      <h1>— Our Client Reviews?</h1>
      <section className="whyusGrid">
        <article>
          <img
            src={
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <H3 size="1.8rem" weight="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit corrupti laudantium
          </H3>
          <p>Visvan Monee - Web Design</p>
        </article>
        <article>
          <img
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            }
          />
          <H3 size="1.8rem" weight="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit corrupti laudantium
          </H3>
          <p>Visvan Monee - Web Design</p>
        </article>
        <article>
          <img
            src={
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
          />
          <H3 size="1.8rem" weight="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corporis obcaecati labore autem suscipit corrupti laudantium
          </H3>
          <p>Visvan Monee - Web Design</p>
        </article>
      </section>
    </WhyUsStyles>
  );
}

export default Reviews;
