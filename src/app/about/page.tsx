import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const AboutUs: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between overflow-x-hidden items-center flex-col md:flex-row  py-3 px-[50px]">
        <h1 className="text-3xl mb-2 md:text-5xl font-bold">
          Our Journey to a leading
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
      <div className="bg-[#211041] leading-[42px] py-[70px] px-3 lg:px-60 font-bold text-white text-4xl flex flex-col">
        <button className="text-black w-fit px-5 py-2 rounded-lg text-xl bg-white">
          Our Mission
        </button>
        <div>
          Help companies deliver
          <span className="text-primary">innovative technology</span> solutions
          to
          <span className="text-primary"> power their growth</span> by unlocking
          access to passionate and experienced
          <span className="text-primary">
            {" "}
            engineers and solution providers
          </span>
        </div>
      </div>
      <div className="px-5 md:px-[120px] mt-3">
        <button className="rounded-sm  py-1 text-black text-md px-2 border-2 border-primary">
          About Us
        </button>
        <h1 className="text-4xl font-bold text-[#1a0f2e]">
          Devsinc helps start-ups, SMEs <br /> and enterprises grow their <br />
          business
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-md mt-2 text-zinc-700 font-sans">
            We&apos;ve been helping customers since 2009 and take pride in
            delivering high-quality custom <br /> services designed to help you
            build, grow, and revolutionize your business.
          </p>
          <button className="group text-white bg-primary hover:border-2 hover:bg-transparent transition-all duration-300 hover:border-primary w-fit justify-between  hover:text-black rounded-full px-5 py-4 flex items-center gap-9 font-bold">
            Learn More
            <div className="mt-0.5 p-1 bg-white rounded-full group-hover:bg-black transition-all duration-300"></div>
          </button>
        </div>
        <div className="flex flex-col items-center xl:flex-row gap-14">
          <img src="./b.jpg" className="rounded-xl mt-[50px]" alt="" />
          <div className="flex flex-col gap-[30px]">
            <div>
              <h1 className="font-bold text-5xl text-primary">3,000+</h1>
              <p className="font-bold text-zinc-500">Successful projects</p>
            </div>
            <hr />
            <div>
              <h1 className="font-bold text-5xl text-primary">99%</h1>
              <p className="font-bold text-zinc-500">Client satisifcation</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-6 items-center md:grid-cols-2 justify-between">
          <div>
            <img src="./taha2.png" width="330px" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-primary">
              When you choose Devsinc, you&apos;re choosing
            </p>
            <h1 className="text-7xl font-bold text-[#1f1038]">Our Vision</h1>
            <p className="text-zinc-700">
              &quot;While Devsinc has been growing in a tech landscape for more
              than a decade, I recognize the challenges businesses face in
              managing digital systems. As the world transforms into a global
              village, our vision goes beyond. We aim to reimagine IT solutions
              into smart, agile, and AI-enhanced digital assets.&quot;
            </p>
            <p className="text-zinc-700">
              Our commitment is to lead in the digital transformation, providing
              globally agile services to clients in different countries. In
              these times of recent changes, our ever-growing pool of resilient
              tech heads drives the IT world toward a future where innovation
              meets the demands of an ever-evolving digital era.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="rounded-sm  py-1 text-black text-md px-2 border-2 border-primary">
            Our Values
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">Innovation</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                There&apos;s no use in pushing boundaries if it&apos;s not for
                innovation. As a software development company, we make the
                future a reality today.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <div className="values-image object-contain">
                  <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                  <img src="./idea.webp" loading="lazy" width={280} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="values-image object-contain">
                <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                <img src="./re.webp" loading="lazy" width={280} alt="" />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">Adaptability</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                Our determination fuels relentless pursuit, turning challenges
                into triumphs. It propels tech experts at Devsinc to overcome
                obstacles and achieve success against all odds.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">Tenacity</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                Our determination fuels relentless pursuit, turning challenges
                into triumphs. It propels tech experts at Devsinc to overcome
                obstacles and achieve success against all odds.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <div className="values-image object-contain">
                  <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                  <img src="./fast.webp" loading="lazy" width={280} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="values-image object-contain">
                <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                <img
                  src="./transparent.webp"
                  loading="lazy"
                  width={280}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-4xl md:text-5xl mb-4">
                Transparency
              </h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                Fostering a culture of transparency is Devsinc&apos;s forte for
                its resilient clients. It has helped maintain a productive and
                qualitative relationship between the two.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">Customer-Centric</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                Our one-in-all business models, dedication to quality, and
                ownership of every project we take speak for our
                customer-centric approach.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <div className="values-image object-contain">
                  <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                  <img src="./man.webp" loading="lazy" width={280} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent   justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="values-image object-contain">
                <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>
                <img src="./globsvg.svg" loading="lazy" width={280} alt="" />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">Global Expansion</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                We like to play in a wider field while setting new boundaries.
                Our online and offline teams bring the best solutions regardless
                of where you are.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-9">
          <div className="flex mb-5 justify-between flex-col sm:flex-row">
            <h1 className="font-bold text-4xl text-[#1f1038] md:mb-0 mb-5">
              Leadership Team
            </h1>
            <p className="text-zinc-500">
              Meet the driving force, the dreamers, the minds behind crafting a
              cutting-edge <br /> software development company, aka, Devsinc.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col gap-3">
              <img src="./IMG_3364.JPG" className="rounded-t-xl" alt="" />
              <div>
                <h1 className="text-2xl">Taha Amin</h1>
                <p className="text-zinc-500">Chief Finance Officer</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src="./IMG_3364.JPG" className="rounded-t-xl" alt="" />
              <div>
                <h1 className="text-2xl">Taha Amin</h1>
                <p className="text-zinc-500">Chief of Staff</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src="./IMG_3364.JPG" className="rounded-t-xl" alt="" />
              <div>
                <h1 className="text-2xl">Taha Amin</h1>
                <p className="text-zinc-500">Chief Delivery Officer</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src="./IMG_3364.JPG" className="rounded-t-xl" alt="" />
              <div>
                <h1 className="text-2xl">Taha Amin</h1>
                <p className="text-zinc-500">Chief Business Officer</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img src="./IMG_3364.JPG" className="rounded-t-xl" alt="" />
              <div>
                <h1 className="text-2xl">Taha Amin</h1>
                <p className="text-zinc-500">Head of New Markets </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary mt-3 text-white py-[40px] px-2 md:px-[100px] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-4">
          We&lsquo;ve helped our clients complete +3,000 <br /> projects
        </h1>
        <p className="text-lg font-sans">
          Over the last 14 years, we&lsquo;ve been driven by our passion for
          helping clients achieve their goals.
        </p>
        <Carousel className="w-full max-w-5xl text-black mt-3">
          <CarouselContent className="-ml-1 ">
            <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devsinc&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="hidden md:block pl-1" />
        </Carousel>
      </div>
    </section>
  );
};
export default AboutUs;
