import React, { useState } from 'react';
import InputField from '../components/InputField'; // Adjust path as needed
import Button from '../components/Button'; // Adjust path as needed

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

  return (
    <section className="max-w-7xl mx-auto p-6 bg-black flex items-center">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-1/3 p-6">
        <img
          src="/path/to/your/image.jpg"  // Replace with your image path
          alt="Registration"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Form on the right */}
      <div className="w-2/3 p-6">
        <h2 className="text-4xl font-bold text-white text-left mb-2 ml-6 font-palanquin">Register</h2>
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-20 p-8 pr-20 rounded-lg shadow-lg">
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
          <Button
            label="Register"
            backgroundColor="bg-gradient-custom"
            textColor="text-white"
            borderColor="border-black"
          />
        </form>
      </div>
    </section>
  );
};

export default Register;
