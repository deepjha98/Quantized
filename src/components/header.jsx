import React from "react";

//IMPORTING IMAGES
import mainLogo from "../resources/img/logo.png";
import googleLogo from "../resources/img/logo-google.png";
import IBMLogo from "../resources/img/logo-ibm.png";
import MicrosoftLogo from "../resources/img/logo-microsoft.png";
import DwaveLogo from "../resources/img/logo-dwave.png";

/////////////////////////////////////
class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <img src={mainLogo} alt="Quantized" class="header__logo" />
        <h3 class="heading-3" id="custom__head">
          Learn Quantum
        </h3>
        <h1 class="heading-1">Quantum Computer is the future</h1>
        <button class="btn header__btn">View More</button>
        <div class="header__seenon-text">COMPANIES PARTICIPATING</div>
        <div class="header__seenon-logos">
          <img src={googleLogo} alt="company" />
          <img src={IBMLogo} alt="company" />
          <img src={MicrosoftLogo} alt="company" />
          <img src={DwaveLogo} alt="company" />
        </div>
      </header>
    );
  }
}
/////////////////////////////////////
export default Header;
