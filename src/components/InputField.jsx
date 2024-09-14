import React from 'react';

const InputField = ({ id, name, type, value, onChange, label, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-white text-lg mb-2">
        {label}
      </label>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-lg">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 bg-transparent text-white placeholder-gray-300 outline-none rounded-lg"
          placeholder={label}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
