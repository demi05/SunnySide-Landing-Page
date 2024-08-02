import Nav from "./Nav";
import headerMobile from "../assets/images/mobile/image-header.jpg";
import headerDesktop from "../assets/images/desktop/image-header.jpg";
import downArrow from "../assets/images/icon-arrow-down.svg";

const Header = () => {
  return (
    <div
      className="font-barlow font-bold flex flex-col h-screen bg-cover bg-center gap-16 md:bg-none "
      style={{
        backgroundImage: `url(${headerMobile})`,
        "@media (min-width: 768px)": {
          backgroundImage: `url(${headerDesktop})`,
        },
      }}
    >
      <Nav />
      <div className="flex flex-col gap-12 items-center justify-center font-black text-[5rem] w-[80%] md:w-[100%] mx-auto text-center">
        <h1 className="text-white">WE ARE CREATIVES</h1>
        <div className="w-[10%] md:w-[5%]">
          <a href="#fruits">
            {" "}
            <img src={downArrow} alt="down arrow" className="w-[100%]" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
