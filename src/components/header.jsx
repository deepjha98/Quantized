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
      <header id="header" className="header">
        <img src={mainLogo} alt="Quantized" className="header__logo" />
        <h3 className="heading-3" id="custom__head">
          Learn Quantum
        </h3>
        <h1 className="heading-1">Quantum Computer is the future</h1>
        <button className="btn header__btn">View More</button>
        <div className="header__seenon-text">COMPANIES PARTICIPATING</div>
        <div className="header__seenon-logos">
          <img src={googleLogo} alt="company Google" />
          <img src={IBMLogo} alt="company ibm" />
          <img src={MicrosoftLogo} alt="company mICROSOFT" />
          <img src={DwaveLogo} alt="company Dwave" />
        </div>
      </header>
    );
  }
}
/////////////////////////////////////
export default Header;
