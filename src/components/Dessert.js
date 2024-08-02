import milkMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import coneMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import sugarMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugarDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Dessert = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      <div>
        <picture>
          <source media="(min-width: 768px)" srcset={milkDesktop} />
        </picture>
        <img src={milkMobile} alt="milk bottles" />
      </div>
      <div>
        <picture>
          <source media="(min-width: 768px)" srcset={orangeDesktop} />
        </picture>
        <img src={orangeMobile} alt="orange" />
      </div>
      <div>
        <picture>
          <source media="(min-width: 768px)" srcset={coneDesktop} />
        </picture>
        <img src={coneMobile} alt="ice cream cone" />
      </div>
      <div>
        <picture>
          <source media="(min-width: 768px)" srcset={sugarDesktop} />
        </picture>
        <img src={sugarMobile} alt="sugar cubes" />
      </div>
    </section>
  );
};

export default Dessert;
