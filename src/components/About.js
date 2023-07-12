import React from "react";
import AboutImg from "../assets/pic.jpeg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid lg:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5 lg:text-justify">
            Hi, I'm Pavana B S, a Frontend Developer specializing in building
            beautiful websites using React and Tailwind CSS.
          </p>
          <p className="pb-5 lg:text-justify">
            I possess strong proficiency in a wide range of frontend
            technologies including React.js, Next.js, JavaScript, Axios,
            TypeScript, Tailwind CSS, HTML, CSS, Web3, web3.js, and more. This
            allows me to create engaging and interactive user interfaces while
            ensuring optimal performance and responsiveness.
          </p>
          <p className="pb-5 lg:text-justify">
            Additionally, I have extensive knowledge in backend development,
            specifically with Node.js and Express.js. This enables me to
            seamlessly integrate frontend functionalities with robust
            server-side logic, ensuring efficient and scalable web applications.{" "}
          </p>
          <p className="pb-5 lg:text-justify">
            {" "}
            I'm passionate about creating visually appealing and user-friendly
            experiences through my coding skills and leveraging the latest web
            development tools and frameworks.{" "}
          </p>
          <p className="lg:text-justify">
            If you have any questions or require assistance, feel free to reach
            out. I'm here to help you bring your ideas to life!
          </p>
        </div>
        <div className="about-img mt-12 lg:mt-0 flex justify-center md:justify-center">
          <img
            src={AboutImg}
            alt="image"
            className=" md:w-[60%] lg:w-[60%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
