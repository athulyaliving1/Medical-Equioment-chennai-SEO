import React from "react";
import { Link } from "react-router-dom";

function Thankyoupage() {
  return (
    <div className="bg-sky-100 ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 2xl:block xl:block ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mt-10 mb-6 text-3xl font-bold leading-none tracking-tight capitalize font-Helvetica text-sky-800 sm:text-4xl md:mx-auto">
            <span className="relative inline-block ">
              <span className="relative"> Your</span>
            </span>
            form is successfully submitted!
          </h2>
          <p className="text-base font-semibold text-sky-800 md:text-lg xl:text-xl 2xl:text-xl font-Helvetica">
            Thank for your enquiring with us! Our Customer Service Executives
            will reach to you at the earliest! Do wait for our call!
          </p>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-fill w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 xl:h-full "
              src="https://athulyahomecare.com/lp/images/medical-equip-banner.jpg"
              alt="thank you"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/home">
            {" "}
            <button className="relative px-10 py-3 font-medium text-white transition duration-300 rounded-md bg-sky-700 hover:bg-sky-800 ease">
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Back To Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thankyoupage;
