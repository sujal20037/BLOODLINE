// src/components/AddBloodBankForm.jsx
import React, { useState } from "react";

const AddBloodBankForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact: "",
    stock: {
      "A+": "",
      "A-": "",
      "B+": "",
      "B-": "",
      "O+": "",
      "O-": "",
      "AB+": "",
      "AB-": "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Object.keys(formData.stock).includes(name)) {
      setFormData({ ...formData, stock: { ...formData.stock, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.location || !formData.contact) {
      alert("Please fill all required fields.");
      return;
    }

    onAdd(formData); // Send data to parent
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-10 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Add New Blood Bank</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Blood Bank Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Contact"
            />
          </div>
          <h3 className="text-lg font-bold mb-2">Blood Stock (Units)</h3>
          {Object.keys(formData.stock).map((bloodType) => (
            <div key={bloodType} className="mb-2">
              <label className="block text-sm font-medium mb-1">{bloodType}</label>
              <input
                type="number"
                name={bloodType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder={`Enter units for ${bloodType}`}
              />
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-8"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Blood Bank
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBloodBankForm;
