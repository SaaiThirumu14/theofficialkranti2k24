import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL +"/feedback", form);
      alert("✅ Feedback sent successfully!");
      setForm({ message: "" });
    } catch (error) {
      console.error("Error sending feedback:", error);
      alert("❌ Failed to send feedback.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex-[0.75] p-8 rounded-2xl w-full max-w-lg text-center"
      >
        <p className="text-pink-400 text-[18px]">Get in touch</p>
        <h3 className="text-white text-[32px] font-bold">Feedback</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-pink-400 font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-transparent py-4 px-6 placeholder:text-pink-300 text-white rounded-lg outline-none border-2 border-pink-500 focus:border-pink-400 transition-all duration-300"
            />
          </label>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 py-3 px-8 rounded-xl text-white font-bold shadow-lg shadow-pink-500 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
