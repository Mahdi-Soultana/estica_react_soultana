import React from "react";
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
              <img src="/resources/home.jpg" alt="" />
            </div>
            <H3 size="20px">Mahdi Soultana</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src="/resources/social/Vector.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-2.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-1.png" alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src="/resources/home.jpg" alt="" />
            </div>
            <H3 size="20px">John Doe</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src="/resources/social/Vector.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-2.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-1.png" alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src="/resources/home.jpg" alt="" />
            </div>
            <H3 size="20px">Sozi chli</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src="/resources/social/Vector.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-2.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-1.png" alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src="/resources/home.jpg" alt="" />
            </div>
            <H3 size="20px">Makos Nid</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src="/resources/social/Vector.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-2.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/resources/social/Vector-1.png" alt="facebook" />
              </a>
            </div>
          </div>
        </Agents>
      </div>
    </AgentStyles>
  );
}

export default Agent;
