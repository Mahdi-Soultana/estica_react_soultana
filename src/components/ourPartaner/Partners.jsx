import React from "react";
import { Houses, PartnerStyles } from "./PartnerStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";
import home from "./home.jpg";
import src1 from "./partnerlogo/1 1.png";
import src2 from "./partnerlogo/2 1.png";
import src3 from "./partnerlogo/3 1.png";
import src4 from "./partnerlogo/4 1.png";
import src5 from "./partnerlogo/5 1.png";
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
            <img src={src1} />
          </div>
          <div>
            <img src={src2} />
          </div>
          <div>
            <img src={src3} />
          </div>
          <div>
            <img src={src4} />
          </div>
          <div>
            <img src={src5} />
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
                <img src={home} alt="" />
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
                <img src={home} alt="" />
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
                <img src={home} alt="" />
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
                <img src={home} alt="" />
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
