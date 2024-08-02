import eggMobile from "../assets/images/mobile/image-transform.jpg";
import eggDesktop from "../assets/images/desktop/image-transform.jpg";
import coneMobile from "../assets/images/mobile/image-stand-out.jpg";
import coneDesktop from "../assets/images/desktop/image-stand-out.jpg";
import grapesMobile from "../assets/images/mobile/image-graphic-design.jpg";
import grapesDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import orangeMobile from "../assets/images/mobile/image-photography.jpg";
import orangeDesktop from "../assets/images/desktop/image-photography.jpg";

const Fruits = () => {
  return (
    <section id="fruits" className="grid grid-cols-1 md:grid-cols-2">
      <div className="order-1 md:order-2">
        <picture>
          <source srcSet={eggDesktop} media="(min-width: 768px)" />
          <img src={eggMobile} alt="egg img" className="w-screen h-[80vh]" />
        </picture>
      </div>
      <div className="flex flex-col gap-8 py-10 px-5 text-center order-2 md:order-1 md:text-left md:justify-center">
        <h2 className="text-veryDarkDesaturatedBlue font-black font-barlow  text-[2.5rem]">
          Transform your brand
        </h2>
        <p className="text-darkGrayishBlue font-medium text-[1.05rem]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p className="text-veryDarkDesaturatedBlue font-black font-barlow text-[1.25rem] border-b-2 border-b-yellow hover:cursor-pointer">
          {" "}
          LEARN MORE
        </p>
      </div>
      <div className="order-3">
        <picture>
          <source srcSet={coneDesktop} media="(min-width: 768px)" />
          <img src={coneMobile} alt="egg img" className="w-screen h-[80vh]" />
        </picture>
      </div>
      <div className="flex flex-col gap-8  py-10 px-5 text-center order-4 md:text-left md:justify-center">
        <h2 className="text-veryDarkDesaturatedBlue font-black font-barlow text-[2.5rem]">
          Stand out to the right audience
        </h2>
        <p className="text-darkGrayishBlue font-medium text-[1.05rem]">
          {" "}
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.{" "}
        </p>
        <p className="text-veryDarkDesaturatedBlue font-black font-barlow  text-[1.25rem] border-b-2 border-b-softRed hover:cursor-pointer">
          {" "}
          LEARN MORE
        </p>
      </div>
      <div
        className="h-[110vh] flex order-5"
        style={{
          backgroundImage: `url(${grapesMobile})`,
          "@media (min-width: 768px)": {
            backgroundImage: `url(${grapesDesktop})`,
          },
        }}
      >
        <div className="flex flex-col gap-8  py-10 px-5 text-center mt-auto">
          <h2 className="text-darkDesaturatedCyanGraphicdesigntext font-black font-barlow  text-[2.5rem]">
            Graphic design
          </h2>
          <p className="text-darkDesaturatedCyanGraphicdesigntext font-medium text-[1.05rem]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div
        className="h-[110vh] flex order-6"
        style={{
          backgroundImage: `url(${orangeMobile})`,
          "@media (min-width: 768px)": {
            backgroundImage: `url(${orangeDesktop})`,
          },
        }}
      >
        <div className="flex flex-col gap-8  py-10 px-5 text-center mt-auto">
          <h2 className="text-darkBluePhotographyText font-black font-barlow  text-[2.5rem]">
            Photography
          </h2>
          <p className="text-darkBluePhotographyText font-medium text-[1.05rem]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fruits;
