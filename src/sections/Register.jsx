import React, { useState } from 'react';
import InputField from '../components/InputField'; // Adjust path as needed
import Button from '../components/Button'; // Adjust path as needed
import { useInView } from 'react-intersection-observer'; // Import the hook for visibility tracking

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    branch: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form data submitted:', formData);
  };

  // Use the intersection observer to track when the form comes into view
  const { ref: formRef, inView: formVisible } = useInView({ triggerOnce: true });

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-black flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Image on the left */}
      <div className="w-full md:w-1/3 p-6">
        <img
          src="/path/to/your/image.jpg"  // Replace with your image path
          alt="Registration"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Form on the right */}
      <div className="w-full md:w-2/3 p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-4 ml-2 md:ml-6 font-palanquin">Register</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`bg-black bg-opacity-20 p-4 md:p-8 pr-4 md:pr-20 rounded-lg shadow-lg transition-transform duration-1000 ease-in-out ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
