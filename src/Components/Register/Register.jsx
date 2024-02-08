import React, { useContext } from "react";
import GoogleAndGit from "../GoogleAndGit/GoogleAndGit";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserName } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoURL = form.image_url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, userName, photoURL);
    createUser(email, password)
      .then((res) => {
        updateUserName(userName, photoURL);
        toast.success("Registration successfully.");
        console.log(res);
        form.reset()
      })
      .catch((err) => {
        const errorMessage = err.message;
        // setError(errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div
      onSubmit={handleSubmit}
      className="mt-5 form-bg w-1/2 mx-auto p-5 text-themeColor rounded-lg"
    >
      <h2 className="text-center text-4xl">Registration Form</h2>
      <form className="max-w-md mx-auto space-y-5 ">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="userName"
            id="userName"
            className="block py-2.5 px-0 w-full text-md text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-themeColor3 dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-themeColor peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="userName"
            className="peer-focus:font-medium absolute text-md text-light  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-themeColor peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-md text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-themeColor3 dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-themeColor peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-light  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-themeColor peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-md text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-themeColor3 dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-themeColor peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-md text-light  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-themeColor peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="image_url"
            id="image_url"
            rows={4}
            className="block py-2.5 px-0 w-full text-md text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-themeColor3 dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-themeColor peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="image_url"
            className="peer-focus:font-medium absolute text-md text-light  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-themeColor peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Input image URL
          </label>
        </div>

        <button
          type="submit"
          className="text-light bg-themeColor hover:bg-themeColor2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-themeColor2 dark:hover:bg-themeColor dark:focus:ring-themeColor2"
        >
          Submit
        </button>
      </form>
      <GoogleAndGit />
    </div>
  );
};

export default Register;
