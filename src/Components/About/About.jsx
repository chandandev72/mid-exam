import React from "react";

const About = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            enim varius, condimentum turpis vel, tristique dolor.
          </p>
        </div>
        <div className="mt-20">
          <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            enim varius, condimentum turpis vel, tristique dolor. In hac
            habitasse platea dictumst.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            enim varius, condimentum turpis vel, tristique dolor. In hac
            habitasse platea dictumst.
          </p>
        </div>
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl transform translate-x-4 translate-y-6 rotate-6 lg:translate-x-16 lg:-translate-y-24 lg:rotate-12">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1499343628900-3521f6be8e8e"
            alt="About image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
