import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email", // Make sure the backend is running
        formData
      );
      alert(response.data.message);
      setFormData({ email: "", phone: "", message: "" }); // Clear form after submission
    } catch (error) {
      alert("Failed to send email.");
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-row items-center justify-center mt-10  ">
      <div className="mt-10 bg-[#031137b1] w-[90%] rounded-xl md:w-[60%]">
        <h2
          className=" 
        flex
        flex-row
        justify-center
        items-center
        text-white
          w-[100%]
          font-bold
          text-2xl
          pt-10
          drop-shadow-[2px_2px_2px_white]"
        >
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col justify-around items-center mt-7 h-[35vh]"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[90%] bg-[#b0b0b04e] text-white  text-[1.6vh] px-4 py-2 rounded"
          />

          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-[90%] bg-[#b0b0b04e] text-white px-4 py-2 text-[1.6vh]  rounded"
            placeholder="Phone"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell Us About Your Company Requirements"
            className="w-[90%] bg-[#b0b0b04e] text-[1.6vh] text-white px-3 pt-3 pb-10 rounded"
          />
          <button
            type="submit"
            className=" bg-[#001d37] px-10 py-2 text-white font-bold rounded-md"
          >
            SEND MAIL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
