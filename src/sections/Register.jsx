import React, { useState } from "react";
import InputField from "../components/InputField"; // Adjust path as needed
import Button from "../components/Button"; // Adjust path as needed
import { useInView } from "react-intersection-observer";
import { Desktop } from "../assets/images";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form data submitted:", formData);
  };

  // Use the intersection observer to track when the form comes into view
  const { ref: formRef, inView: formVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-black flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
            <img
              src={Desktop}
              class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
              class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>

      {/* Form on the right */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-4 ml-2 md:ml-6 font-palanquin">
          Register
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`bg-black bg-opacity-20 p-4 md:p-8 pr-4 md:pr-20 rounded-lg shadow-lg transition-transform duration-1000 ease-in-out ${
            formVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <InputField
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            label="Name"
            required
          />
          <InputField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            required
          />
          <InputField
            id="phoneNo"
            name="phoneNo"
            type="tel"
            value={formData.phoneNo}
            onChange={handleChange}
            label="Phone Number"
            required
          />
          <InputField
            id="branch"
            name="branch"
            type="text"
            value={formData.branch}
            onChange={handleChange}
            label="Branch"
            required
          />
          <InputField
            id="year"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            label="Year"
            required
          />
          <div className="mt-6">
            <Button
              label="Register"
              backgroundColor="bg-gradient-custom"
              textColor="text-white"
              borderColor="border-black"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
