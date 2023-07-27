import React from "react";
import edyoda from "../assets/edyoda.png";
import pontoon from "../assets/pontoon.png";
import sign from "../assets/sign.png";
import movie from "../assets/movie.png";
import shoplane from "../assets/shoplane.png";
import quiz from "../assets/quiz.png";
import tokenlist from "../assets/tokenlist.png";
import calculator from "../assets/calculator.png";
import basic from "../assets/basic.png";

const Projects = () => {
  const projects = [
    {
      img: edyoda,
      title: "EdYoda Blogs",
      desc: " EdYoda Blogs landing page ",
      live: "https://codepen.io/pavana_bs/pen/OJQrNNo"
    },
    {
      img: pontoon,
      title: "Pontoon",
      desc: "Pontoon- Cross chain Meta Aggregator Connecting more than 27 chains for assets transfer",
      live: "https://pontoon.fi/"
    },
    {
      img: sign,
      title: "Data Sign App",
      desc: "Data sign app is used for testing API- siging the transaction",
      live: "https://frontier-sign.unifront.io/"
    },
    {
      img: movie,
      title: "Movie website",
      desc: "Movie listing website",
      live: " https://github.com/pavana-rslabs/movie-website"
    },
    {
      img: shoplane,
      title: "Shoplane",
      desc: "Shoplane website",
      live: " https://js-web-app.glitch.me/javascript_final_project/"
    },
    {
      img: quiz,
      title: "Quiz App",
      desc: "Quiz App using JavaScript",
      live: " https://github.com/pavana-rslabs/quiz_app"
    },
    {
      img: tokenlist,
      title: "Tokenlist API",
      desc: "API to fetch tokens based on chain id from tokenlist",
      live: " https://github.com/pavana-bs/node_express_api"
    },
    {
      img: calculator,
      title: "Calculator",
      desc: "Calculator",
      live: " https://github.com/pavana-bs/calc"
    },
    {
      img: basic,
      title: "Admin panel",
      desc: "Basic Admin panel",
      live: " https://github.com/pavana-rslabs/basic-admin"
    }
  ];
 
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React, Tailwind, Typescript, Node.js, Express.js, JavaScript. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
