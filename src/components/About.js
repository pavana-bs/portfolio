import React from "react";
import AboutImg from "../assets/pic.jpeg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Pavana B S. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Next.js, JavaScript, Axios, Typescript, Tailwind, HTML, CSS, Web3, web3.js and many more.
          </p>

          <p>In backend I know Node.js, Express.js</p>
        </div>

        <div className="about-img mt-12 md:mt-0">
          <img
            src={AboutImg}
            alt="image"
            className=" md:w-[40%] lg:w-[60%] md:ml-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
