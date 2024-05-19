"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextCycle from "@/components/Motions/TextCycle";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  const texts = ["Text 1", "Text 2", "Text 3"];

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-10 flex flex-col items-center justify-center text-center">
        <motion.ul variants={container} initial="hidden" animate="visible">
   <div>     <div
            aria-hidden="true"
            className="pointer-events-none mt-[20px] absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div></div>
          <div className="flex items-center flex-col">
          <motion.li key="1" variants={item}>
              <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md transition-all hover:border-gray-300 hover:bg-white/50">
                <p className="text-sm font-semibold text-gray-700">
                  Learn About Us
                </p>
              </div>
            </motion.li>
            <motion.li key="2" variants={item}>
              {/* {texts.map((text, index) => ( */}
              {/* ))} */}
              {/* <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                <span className="text-purple-600">Get a Free Mobile</span>{" "}
                Friendly Design
              </h1> */}

              <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                <TextCycle />
              </h1>
            </motion.li>
            <motion.li
              key="3"
              variants={item}
              className="mt-5 max-w-prose text-zinc-700 sm:text-lg"
            >
              Proud to Develop PAKISTAN’S FIRST FREELANCE MARKETPLACE
              Motivational Blog called BEINGGURU Free Online Training Portal LCT
              ONLINE Social Networking Mobile App
            </motion.li>
            <motion.li key="4" className="mt-5" variants={item}>
              <Link href="/contact">
                <Button size="lg">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.li>
          </div>
        </motion.ul>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
      

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/file-upload-preview.jpg"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>

       `  `
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Designed by developers for developers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience our markdown, diagram-as-code, keyboard navigation,
              seamless dark mode, GitHub integration, and syntax highlighted
              code blocks.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">Diagram as Code</span>
              <span className="mt-2 text-zinc-700">
                allows you to create beautiful diagrams with a straightforward
                syntax, all without fumbling with a GUI.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">GitHub integration</span>
              <span className="mt-2 text-zinc-700">
                Our GitHub integration keeps your markdown docs and diagrams
                next to code. You can even create PRs.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">Eraser AI</span>
              <span className="mt-2 text-zinc-700">
                Eraser AI generates stunning diagrams in seconds. You can
                kickstart your diagram with existing code or text excerpts.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
