//THIS IS THE PAGE FOR THE TOP QUNATUM COMPUTERS CARD
import React from "react";

//IMPORT IMAGES
import Computer1 from "../resources/img/house-1.jpeg";
import Computer2 from "../resources/img/house-2.jpeg";
import Computer3 from "../resources/img/house-3.jpeg";
import Computer4 from "../resources/img/house-4.jpeg";
import Computer5 from "../resources/img/house-5.jpeg";
import Computer6 from "../resources/img/house-6.jpeg";

//SVG SPRITES
import sprite from "../resources/img/sprite.svg";

////////////////////////////////////////////
const Computers = () => {
  return (
    <section className="computers">
      <div className="computer">
        <img src={Computer1} alt="CARD 1" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">Google Sycamore</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>Google</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Nonlinear superconducting resonator</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>9×6 lattice</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>53 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>

      {/* <!-- CARD 1 ENDS --> */}
      <div className="computer">
        <img src={Computer2} alt="CARD 2" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">IBM Q 53</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>IBM</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Superconducting</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>T</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>53 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>
      {/* <!-- CARD 2 ENDS--> */}
      <div className="computer">
        <img src={Computer3} alt="CARD 3" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">X24</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>Xanadu</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Photonics</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>N/A</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>24 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>
      {/* <!-- CARD 3 ENDS--> */}
      <div className="computer">
        <img src={Computer4} alt="CARD 4" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">19Q Acorn</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>Rigetti</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Superconducting</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>N/A</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>19 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>
      {/* <!-- CARD 4 ENDS--> */}
      <div className="computer">
        <img src={Computer5} alt="CARD 5" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">D-Wave Advantage</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>D-Wave</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Superconducting</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>Pegasus P16</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>5000 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>
      {/* <!-- CARD 5 ENDS--> */}
      <div className="computer">
        <img src={Computer6} alt="CARD 6" className="computer__img" />
        <svg className="computer__like">
          <use
            href={
              sprite +
              "#star-black-shape-in-a-circle-outline-favourite-interface-symbol"
            }
          ></use>
        </svg>
        <h5 className="computer__name">Jiuzhang</h5>
        <div className="computer__company">
          <span className="material-icons"> business </span>
          <p>USTC</p>
        </div>
        <div className="computer__architecture">
          <span className="material-icons"> biotech </span>
          <p>Photonics</p>
        </div>
        <div className="computer__layout">
          <span className="material-icons"> vertical_split </span>
          <p>N/A</p>
        </div>
        <div className="computer__qubit">
          <span className="material-icons"> tag </span>
          <p>76 qb</p>
        </div>
        <button className="btn computer__button">Visit website</button>
      </div>
      {/* <!-- CARD 6 ENDS --> */}
    </section>
  );
};

///////////////////////////////////////////////
export default Computers;
