import React from "react";
import { FooterStyles } from "./StylesFooter";
import Divider from "./divder/Divider";
import src1 from "./social/Vector.png";
import src2 from "./social/Vector-2.png";
import src3 from "./social/Vector-1.png";

function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="mainContainer">
          <ul>
            <ul>
              <li>— ABOUT US</li>
              <li>Donec quis tincidunt felis. Sed </li>
              <li>aliquet ac nulla a condimentum</li>
              <li>Curabitur massa sapien.</li>
              <ul className="social">
                <li>
                  <img src={src3} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={src1} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={src2} alt="" />
                </li>
              </ul>
            </ul>
            <ul>
              <li>— ABOUT US</li>
              <li>Register</li>
              <li>Forum</li>
              <li>Affiliate</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>— ABOUT US</li>
              <li>About Us</li>

              <li>Why Buy With Us?</li>

              <li>Our agent</li>

              <li>Contact Us</li>
            </ul>
            <ul>
              <li>— ABOUT US</li>

              <li>Terms</li>

              <li>Licenses</li>

              <li>Become an affiliate</li>

              <li>Help Center</li>
            </ul>
          </ul>
        </div>
      </FooterStyles>
      <Divider />
    </>
  );
}

export default Footer;
