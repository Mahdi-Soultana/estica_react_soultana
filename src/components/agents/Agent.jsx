import React from "react";
import { AgentStyles, H1, Agents, H3, H5 } from "./AgentStyles";
import { Paragraph } from "../globlaStyledComponents/globalComponents";
import InView from "../anim/InView";
import src1 from "./social/Vector.png";
import src2 from "./social/Vector-1.png";
import src3 from "./social/Vector-2.png";
import home from "./home.jpg";
import InViewC from "../anim/InView";

function Agent() {
  return (
    <AgentStyles>
      <div className="mainContainer">
        <InViewC once={false}>
          <H1>- Our Perfact Agents</H1>
        </InViewC>
        <Agents imgHeight="300px">
          {dataJSX.map((item, i) => (
            <InViewC slide="up">{item}</InViewC>
          ))}
        </Agents>
      </div>
    </AgentStyles>
  );
}
const dataJSX = [
  <>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
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
  </>,
  <>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
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
  </>,
  <>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        alt=""
      />
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
  </>,
  <>
    <div className="imgContainer">
      <img
        src={
          "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=549&q=80"
        }
        alt=""
      />
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
  </>,
];
export default Agent;
