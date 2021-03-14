//IMAGES IMPORT
import Gal1 from "../resources/img/gal-1.jpeg";
import Gal2 from "../resources/img/gal-2.jpeg";
import Gal3 from "../resources/img/gal-3.jpeg";
import Gal4 from "../resources/img/gal-4.jpeg";
import Gal5 from "../resources/img/gal-5.jpeg";
import Gal6 from "../resources/img/gal-6.jpeg";
import Gal7 from "../resources/img/gal-7.jpeg";
import Gal8 from "../resources/img/gal-8.jpeg";
import Gal9 from "../resources/img/gal-9.jpeg";
import Gal10 from "../resources/img/gal-10.jpeg";
import Gal11 from "../resources/img/gal-11.jpeg";
import Gal12 from "../resources/img/gal-12.jpeg";
import Gal13 from "../resources/img/gal-13.jpeg";
import Gal14 from "../resources/img/gal-14.jpeg";

////////////////////////////////////////////
export const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={Gal1} alt="CoolA" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={Gal2} alt="Gallery ImageB" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={Gal3} alt="CoolC" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={Gal4} alt="Cool" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={Gal5} alt="CoolD" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={Gal6} alt="CoolE" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={Gal7} alt="CoolF" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={Gal8} alt="CoolG" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={Gal9} alt="CoolH" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={Gal10} alt="CoolI" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={Gal11} alt="Gallery ImageJ" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={Gal12} alt="CoolK" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={Gal13} alt="CoolL" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={Gal14} alt="CoolM" className="gallery__img" />
      </figure>
    </section>
  );
};
