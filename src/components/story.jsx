import Story1 from "../resources/img/story-1.jpeg";
import Story2 from "../resources/img/story-2.jpeg";

///////////////////////////////////////////
export const Story = () => {
  return (
    <>
      <div class="story__pictures">
        <img src={Story1} alt="Ibm Computer" class="story__img--1" />
        <img src={Story2} alt="Photo" class="story__img--2" />
      </div>
      <div class="story__content">
        <h3 class="heading-3 mb-sm">IBM(s) Summit or OLCF-4</h3>
        <h2 class="heading-2 heading-2--dark mb-md">
          &ldquo; Summit or OLCF-4 is a supercomputer developed by IBM for use
          at Oak Ridge National Laboratory &rdquo;
        </h2>
        <p class="story__text">
          Summit and Sierra are supercomputers at Oak Ridge National Laboratory
          and Lawrence Livermore National Laboratory. They're helping us model
          supernovas, pioneer new materials and explore cancer, genetics and the
          environment — using technologies available to all businesses.
        </p>
        <button class="btn">Try Super Computer</button>
      </div>
    </>
  );
};
