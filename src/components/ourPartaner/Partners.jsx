import React from "react";
import { Houses, PartnerStyles } from "./PartnerStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";

function Partners() {
  return (
    <PartnerStyles className="mainContainer">
      <section>
        <article>
          <h2>— Our Partners</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </Paragraph>
        </article>
        <article className="partner_logo">
          <div>
            <img src="/resources/partnerlogo/1 1.png" />
          </div>
          <div>
            <img src="/resources/partnerlogo/2 1.png" />
          </div>
          <div>
            <img src="/resources/partnerlogo/3 1.png" />
          </div>
          <div>
            <img src="/resources/partnerlogo/4 1.png" />
          </div>
          <div>
            <img src="/resources/partnerlogo/5 1.png" />
          </div>
        </article>
      </section>
      <Houses size="1.8rem">
        <article>
          <h2>— Home For Sale</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </Paragraph>

          <div className="houses">
            <div>
              <div className="imgContainer">
                <img src="/resources/home.jpg" alt="" />
              </div>
              <h3>Financial Office, Romania</h3>
              <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
              <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
                $20,000 <span>$10,500</span>
              </Paragraph>
              <div className="underline"></div>
              <button className="btn">inquiry now</button>
            </div>
            <div>
              <div className="imgContainer">
                <img src="/resources/home.jpg" alt="" />
              </div>
              <h3>Financial Office, Romania</h3>
              <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
              <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
                $20,000 <span>$10,500</span>
              </Paragraph>
              <div className="underline"></div>
              <button className="btn">inquiry now</button>
            </div>
            <div>
              <div className="imgContainer">
                <img src="/resources/home.jpg" alt="" />
              </div>
              <h3>Financial Office, Romania</h3>
              <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
              <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
                $20,000 <span>$10,500</span>
              </Paragraph>
              <div className="underline"></div>
              <button className="btn">inquiry now</button>
            </div>
            <div>
              <div className="imgContainer">
                <img src="/resources/home.jpg" alt="" />
              </div>
              <h3>Financial Office, Romania</h3>
              <Paragraph m="1rem">1500 sqft | 03 beds | 05 baths</Paragraph>
              <Paragraph m="1rem" size="1.9rem" className="price" weight="700">
                $20,000 <span>$10,500</span>
              </Paragraph>
              <div className="underline"></div>
              <button className="btn">inquiry now</button>
            </div>
          </div>
        </article>
      </Houses>
    </PartnerStyles>
  );
}

export default Partners;
