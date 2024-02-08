import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Contact Us</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <h3 className="text-lg font-medium text-gray-700">
              Send us a message
            </h3>
            <form className="mt-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Information
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Email</dt>
                  <dd className="text-gray-900">Email: chandanshutrhadar51@gmail.com</dd>
                </div>
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Phone</dt>
                  <dd className="text-gray-900">+880 12345678</dd>
                </div>
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Address</dt>
                  <dd className="text-gray-900">
                    Dhaka, Bangladesh
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
