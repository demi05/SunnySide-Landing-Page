import emily from "../assets/images/image-emily.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import thomas from "../assets/images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <section className="py-8 px-4 md:py-20 md:px-8">
      <h2 className="text-darkGrayishBlue text-center font-bold text-3xl mb-9">
        CLIENT TESTIMONIALS
      </h2>
      <div className="grid grid-cols-1 text-center gap-[4em] md:grid-cols-3">
        <div className="flex flex-col items-center gap-[1.5em]">
          <div className="w-[20%]">
            <img className="rounded-[50%]" src={emily} alt="a lady" />
          </div>
          <p className="w-[85%] mx-auto font-bold text-veryDarkGrayishBlue">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <h3 className="text-veryDarkDesaturatedBlue font-black">
              Emily R.
            </h3>
            <p className="text-grayishBlue font-medium">Marketing Director</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1.5em]">
          <div className="w-[20%]">
            <img className="rounded-[50%]" src={thomas} alt="a man" />
          </div>
          <p className="w-[85%] mx-auto font-bold text-veryDarkGrayishBlue">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <h3 className="text-veryDarkDesaturatedBlue font-black">
              Thomas S.
            </h3>
            <p className="text-grayishBlue font-medium">
              Chief Operating Officer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1.5em]">
          <div className="w-[20%]">
            <img className="rounded-[50%]" src={jennie} alt="a lady" />
          </div>
          <p className="w-[85%] mx-auto font-bold text-veryDarkGrayishBlue">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <h3 className="text-veryDarkDesaturatedBlue font-black">
              Jennie F.
            </h3>
            <p className="text-grayishBlue font-medium">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
