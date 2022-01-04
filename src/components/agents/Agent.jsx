import React from "react";
import { AgentStyles, H1, Agents, H3, H5 } from "./AgentStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";
import src1 from "./social/Vector.png";
import src2 from "./social/Vector-1.png";
import src3 from "./social/Vector-2.png";
import home from "./home.jpg";
function Agent() {
  return (
    <AgentStyles>
      <div className="mainContainer">
        <H1>- Our Perfact Agents</H1>
        <Agents imgHeight="300px">
          <div>
            <div className="imgContainer">
              <img src={home} alt="" />
            </div>
            <H3 size="20px">Mahdi Soultana</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={src1} alt="facebook" />
              </a>
              <a href="#">
                <img src={src2} alt="facebook" />
              </a>
              <a href="#">
                <img src={src3} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={home} alt="" />
            </div>
            <H3 size="20px">John Doe</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={src1} alt="facebook" />
              </a>
              <a href="#">
                <img src={src2} alt="facebook" />
              </a>
              <a href="#">
                <img src={src3} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={home} alt="" />
            </div>
            <H3 size="20px">Sozi chli</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={src1} alt="facebook" />
              </a>
              <a href="#">
                <img src={src2} alt="facebook" />
              </a>
              <a href="#">
                <img src={src3} alt="facebook" />
              </a>
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img src={home} alt="" />
            </div>
            <H3 size="20px">Makos Nid</H3>
            <H5>18 Properties</H5>
            <div className="social">
              <a href="#">
                <img src={src1} alt="facebook" />
              </a>
              <a href="#">
                <img src={src2} alt="facebook" />
              </a>
              <a href="#">
                <img src={src3} alt="facebook" />
              </a>
            </div>
          </div>
        </Agents>
      </div>
    </AgentStyles>
  );
}

export default Agent;
