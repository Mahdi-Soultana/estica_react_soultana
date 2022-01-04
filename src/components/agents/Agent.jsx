import React from "react";
import homeSrc from "/resources/home.jpg";

import twitterSrc from "/resources/social/Vector.png";
import facebookSrc from "/resources/social/Vector-2.png";
import instagramSrc from "/resources/social/Vector-3.png";
import { AgentStyles, H1, Agents, H3, H5 } from "./AgentStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";

function Agent() {
  return (
    <AgentStyles>
      <div className="mainContainer">
        <H1>- Our Perfact Agents</H1>
        <Agents imgHeight="300px">
          <div>
            <div className="imgContainer">
              <img src={homeSrc} alt="" />
            </div>
            <H3 size="20px">Mahdi Soultana</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={twitterSrc} alt="twitterSrc" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="instagramSrc" />
              </a>
              <a href="#">
                <img src={facebookSrc} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={homeSrc} alt="" />
            </div>
            <H3 size="20px">John Doe</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={twitterSrc} alt="twitterSrc" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="instagramSrc" />
              </a>
              <a href="#">
                <img src={facebookSrc} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={homeSrc} alt="" />
            </div>
            <H3 size="20px">Sozi chli</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={twitterSrc} alt="twitterSrc" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="instagramSrc" />
              </a>
              <a href="#">
                <img src={facebookSrc} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={homeSrc} alt="" />
            </div>
            <H3 size="20px">Makos Nid</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={twitterSrc} alt="twitterSrc" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="instagramSrc" />
              </a>
              <a href="#">
                <img src={facebookSrc} alt="facebook" />
              </a>
            </div>
          </div>
        </Agents>
      </div>
    </AgentStyles>
  );
}

export default Agent;
