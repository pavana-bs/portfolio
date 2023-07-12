import React from "react";

import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="flex justify-center">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I am <span className="text-accent">P</span>avana B S{" "}
              <br />
              Frontend Developer
            </h1>

            <p className="py-5">
              I am proficient in JavaScript, React.js and Tailwind CSS, Web3
            </p>

            <div className="flex justify-center py-5">
              <a
                href="https://twitter.com/PavanaBs"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineTwitter size={40} />
              </a>
              <a
                href="https://github.com/pavana-rslabs"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/pavana-bs-096882ba/"
                className="pr-4 inline-block text-accent hover:text-white mb-3"
              >
                <AiOutlineLinkedin size={40} />
              </a>
            </div>

            <a
              href="/#projects"
              className="btn bg-accent rounded-lg border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            >
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
