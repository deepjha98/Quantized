import React from "react";

//SVG SPRITES
import sprite from "../resources/img/sprite.svg";

//////////////////////////////////////////
class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#binary-code-numbers-on-monitor-screen"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">What is a qubit?</h4>
          <p className="feature__text">
            Today's computers use bits—a stream of electrical or optical pulses
            representing 1s or 0s. Everything from your tweets and e-mails to
            your iTunes songs and YouTube videos are essentially long strings of
            these binary digits. Quantum computers, on the other hand, use
            qubits, which are typically subatomic particles such as electrons or
            photons.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#molecule-1"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">What is superposition?</h4>
          <p className="feature__text">
            Qubits can represent numerous possible combinations of 1 and 0 at
            the same time. This ability to simultaneously be in multiple states
            is called superposition. To put qubits into superposition,
            researchers manipulate them using precision lasers or microwave
            beams.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#atom-1"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">What is entanglement?</h4>
          <p className="feature__text">
            Researchers can generate pairs of qubits that are “entangled,” which
            means the two members of a pair exist in a single quantum state.
            Changing the state of one of the qubits will instantaneously change
            the state of the other one in a predictable way. This happens even
            if they are separated by very long distances.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#calculator"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">What is decoherence?</h4>
          <p className="feature__text">
            The interaction of qubits with their environment in ways that cause
            their quantum behavior to decay and ultimately disappear is called
            decoherence. Their quantum state is extremely fragile. The slightest
            vibration or change in temperature—disturbances known as “noise” in
            quantum-speak—can cause them to tumble out of superposition before
            their job has been properly done
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#globe-grid"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            What is quantum supremacy?
          </h4>
          <p className="feature__text">
            It’s the point at which a quantum computer can complete a
            mathematical calculation that is demonstrably beyond the reach of
            even the most powerful supercomputer.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + "#brain"}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Where is a quantum computer likely to be most useful first?
          </h4>
          <p className="feature__text">
            One of the most promising applications of quantum computers is for
            simulating the behavior of matter down to the molecular level. Auto
            manufacturers like Volkswagen and Daimler are using quantum
            computers to simulate the chemical composition of electrical-vehicle
          </p>
        </div>
      </section>
    );
  }
}

//////////////////////////////////////////
export default Features;
