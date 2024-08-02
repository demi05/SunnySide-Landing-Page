import logoFooter from "../assets/images/logo Footer.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-darkModerateCyanFooter text-darkDesaturatedCyanGraphicdesigntext flex flex-col  items-center py-12 px-5 gap-10">
      <div className="w-[30%]">
        <img src={logoFooter} className="w-[100%]" alt="sunnyside logo" />
      </div>
      <div
        className="w-[100
      %]"
      >
        <ul className="flex flex-col items-center justify-between gap-12 font-bold md:flex-row md:gap-52">
          <a href="/" className="hover:text-white">
            <li>About</li>
          </a>
          <a href="/" className="hover:text-white">
            <li>Services</li>
          </a>
          <a href="/" className="hover:text-white">
            <li>Projects</li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center mt-5 gap-14">
        <a href="/">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="/">
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="/">
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="/">
          <img src={pinterest} alt="pinterest icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
