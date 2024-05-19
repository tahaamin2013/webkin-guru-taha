import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center flex-col md:flex-row  py-3 px-[50px]">
        <h1 className="text-3xl mb-2 md:text-5xl font-bold">
          Our Journey to a leading{" "}
          <p className="text-primary">
            Software Development <br /> Partner
          </p>
        </h1>

        <div>
          <img
            src="./taha.JPG"
            alt="Taha A human image"
            width="280px"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="bg-[#211041] py-[70px] px-3 lg:px-60 font-bold text-white text-4xl flex flex-col">
        <button className="text-black w-fit px-5 py-2 rounded-lg text-xl bg-white">
          Our Mission
        </button>
        <div>
          Help companies deliver{" "}
          <span className="text-primary">innovative technology</span> solutions
          to
          <span className="text-primary"> power their growth</span> by unlocking
          access to passionate and experienced{" "}
          <span className="text-primary">engineers and solution providers</span>
        </div>
      </div>
      <div className="px-5 md:px-[120px] mt-3">
        <button className="rounded-sm  py-1 text-black text-md px-2 border-2 border-primary">
          About Us
        </button>
        <h1 className="text-4xl font-bold text-[#1a0f2e]">
          Devsinc helps start-ups, SMEs <br /> and enterprises grow their <br />{" "}
          business
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-md mt-2 text-zinc-700 font-sans">
            We’ve been helping customers since 2009 and take pride in delivering
            high-quality custom <br /> services designed to help you build,
            grow, and revolutionize your business.
          </p>
          <button className="group text-white bg-primary hover:border-2 hover:bg-transparent transition-all duration-300 hover:border-primary justify-between  hover:text-black rounded-full px-5 py-4 flex items-center gap-9 font-bold">
            Learn More
            <div className="mt-0.5 p-1 bg-white rounded-full group-hover:bg-black transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
