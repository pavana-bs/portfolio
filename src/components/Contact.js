import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <div className="flex justify-center text-justify">
          <p className="max-w-xl">
          I am currently actively seeking a full-time Frontend Developer role. 
          If you would like to discuss potential opportunities or have any inquiries, 
          please feel free to reach out to me via email or phone. I would be more than 
          happy to connect and explore further opportunities.
          </p>
        </div>

        <p className="py-2 text-center mt-5">
          <span className="font-bold">Email:</span> pavanabs06@gmail.com
        </p>
        <p className="text-center">
          <span className="font-bold">Phone:</span> +91 8660590529
        </p>
      </div>
    </section>
  );
};

export default Contact;
