import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center flex-row  py-3 px-[50px]">
        <h1 className="text-5xl font-bold">
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
      <div className="bg-[#251249] py-[70px] px-60 font-bold text-white text-4xl flex flex-col">
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
      fsdfsd
    </section>
  );
};

export default AboutUs;
