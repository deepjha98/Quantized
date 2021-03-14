//IMPORTING IMAGES
import Use1 from "../resources/img/realtor-1.jpeg";
import Use2 from "../resources/img/realtor-2.jpeg";
import Use3 from "../resources/img/realtor-3.jpeg";

/////////////////////////////////////////////
export const Uses = () => {
  return (
    <div className="uses">
      <h3 className="heading-3" id="custom__head">
        Top Quantum Uses
      </h3>

      <div className="uses__list">
        <img src={Use1} alt="Companies A" className="uses__img" />
        <div className="uses__content">
          <h4 className="heading-4 heading-4--light">Molecular Modeling</h4>
          <p className="uses__text">
            Finding the optimum configurations for chemical reactions
          </p>
        </div>

        <img src={Use2} alt="Companies B" className="uses__img" />
        <div className="uses__content">
          <h4 className="heading-4 heading-4--light">
            Artificial Intelligence
          </h4>
          <p className="uses__text">
            AI is based on the principle of learning from experience, becoming
            more accurate as feedback is given.
          </p>
        </div>

        <img src={Use3} alt="Companies C" className="uses__img" />
        <div className="uses__content">
          <h4 className="heading-4 heading-4--light">Cryptography</h4>
          <p className="uses__text">
            Most cryptography depends onlarge factorization which can be cracked
            easily using quantum computers.
          </p>
        </div>
      </div>
    </div>
  );
};
/////////////////////////////////////////////////
