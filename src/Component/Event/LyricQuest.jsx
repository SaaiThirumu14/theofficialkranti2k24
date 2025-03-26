import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import image from "../Event/images/lyric-quest.webp";

export default function LyricQuest() {
  const [isOpen, setIsOpen] = useState(false);
  const [teamLimitReached, setTeamLimitReached] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    event: "Lyric Quest",
    member1: { name: "", phone: "", email: "", collegeName: "", year: "" },
    member2: { name: "", phone: "", email: "", collegeName: "", year: "" },
  });

  const event = {
    title: "Lyric Quest",
    img: image,
    date: "April 15, 2025",
    venue: "CSE CR-2",
    description: "Decode the Lyrics, Feel the Rhythm!",
    rules: [
      "Each team must consist of two members.",
      "All participants must register before the event begins.",
      "The use of mobile phones, internet access, or external assistance is strictly prohibited during the event.",
      "Time limits for each round must be followed strictly.",
    ],
    rounds: [
      {
        title: " Round 1: Lost Lyrics Challenge",
        description: [
          "Participants will be given song lyrics with jumbled words or missing parts.",
          "Teams must reconstruct the correct lyrics within 30 seconds.",
          "Points will be awarded based on accuracy and speed.",
          "The highest-scoring teams will advance to Round 2.",
        ],
      },
      {
        title: " Round 2: Silent Symphony",
        description: [
          "One team member will wear noise-canceling headset playing loud music.",
          "The other member must convey the song using gestures or lip-syncing.",
          "The person with the headset must guess the song within 45 seconds.",
          "Points will be awarded for correct guesses.",
        ],
      },
    ],
    coordinator: [
      "Pramoth Bavan R",
      "Pranav N",
      "Prince Godwin D",
      "Ram Badri Narayana",
    ],

    contact: ["+91 86102 71705", "+91 90257 70052"],
  };
  const checkTeamLimit = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/lyric/count"
      );
      if (res.data.count >= 30) {
        setTeamLimitReached(true);
      }
    } catch (error) {
      console.error("Error checking team limit", error);
      toast.error("Failed to check team limit.");
    }
  };

  useEffect(() => {
    checkTeamLimit();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("member1_")) {
      setFormData((prev) => ({
        ...prev,
        member1: {
          ...prev.member1,
          [name.split("member1_")[1]]: value,
        },
      }));
    } else if (name.startsWith("member2_")) {
      setFormData((prev) => ({
        ...prev,
        member2: {
          ...prev.member2,
          [name.split("member2_")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/lyric",
        formData
      );
      if (res.status === 200) {
        toast.success("Registration successful!");
        setFormData({
          teamName: "",
          event: "Lyric Quest",
          member1: {
            name: "",
            phone: "",
            email: "",
            collegeName: "",
            year: "",
          },
          member2: {
            name: "",
            phone: "",
            email: "",
            collegeName: "",
            year: "",
          },
        });
        setIsOpen(false);
        checkTeamLimit();
      } else if (res.status === 409) {
        toast.error("Team name already exist");
      } else {
        toast.error("Registration failed.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(err.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden relative">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#0e0e0e",
            color: "#00ffff",
            border: "1px solid #00ffff",
            boxShadow: "0 0 12px #00ffff, 0 0 24px #0ff2",
          },
        }}
      />
      <motion.div
        className="max-w-3xl w-full bg-gray-950 p-8 rounded-2xl shadow-purple-500/40 shadow-2xl border border-purple-500 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={event.img}
          alt={event.title}
          className="w-full h-[66] object-cover rounded-lg shadow-lg border-4 border-purple-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-3xl font-bold mt-6 mb-3 text-purple-400 text-center">
          {event.title}
        </h1>
        <p className="text-lg mb-3 text-white text-center">
          {event.description}
        </p>
        <p className="text-md text-purple-300 text-center">
          📅 Date: {event.date}
        </p>
        <p className="text-md text-purple-300 text-center">
          📍 Venue: {event.venue}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Rules & Regulations
          </h2>
          <ul className="mt-2 text-white list-disc list-inside">
            {event.rules.map((rule, index) => (
              <li key={index} className="mt-1">
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">Rounds</h2>
          <ul className="mt-2 text-white list-disc list-inside">
            {event.rounds.map((round, index) => (
              <li key={index} className="mt-1">
                <span className="font-medium">{round.title}</span>
                <br />
                <p>{round.description[0]}</p>
                <p>{round.description[1]}</p>
                <p>{round.description[2]}</p>
                <p>{round.description[3]}</p>
                <br />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Event Coordinators
          </h2>
          {event.coordinator.map((c, i) => (
            <p key={i} className="text-white">
              {c}
            </p>
          ))}

          <h2 className="text-xl font-semibold text-purple-400 mt-3">
            Contact
          </h2>
          {event.contact.map((c, i) => (
            <p key={i} className="text-white">
              📞 {c}
            </p>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsOpen(true)}
            className={`py-2 px-6 text-white rounded-lg text-md font-semibold transition-all shadow-[0_0_15px_3px_rgba(168,85,247,0.6)] ${
              teamLimitReached
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
            disabled={teamLimitReached}
          >
            {teamLimitReached ? "Registrations Full" : "Register Now"}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black  p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-950 text-white p-6 rounded-xl shadow-2xl border-2 border-purple-500 w-full max-w-lg overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">
              🚀 Register for {event.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="teamName"
                placeholder="Team Name"
                required
                value={formData.teamName}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />

              <h3 className="text-purple-300 font-semibold mt-4">Member 1</h3>
              <input
                type="text"
                name="member1_name"
                placeholder="Name"
                required
                value={formData.member1.name}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member1_name" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                name="member1_phone"
                type="tel"
                pattern="\d{10}"
                maxLength="10"
                placeholder="Phone"
                required
                value={formData.member1.phone}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member1_phone" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                type="email"
                name="member1_email"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                value={formData.member1.email}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member1_email" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                type="text"
                name="member1_collegeName"
                placeholder="College Name"
                required
                value={formData.member1.collegeName}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <select
                name="member1_year"
                required
                value={formData.member1.year}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              >
                <option value="" disabled>
                  Select Year
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <h3 className="text-purple-300 font-semibold mt-4">Member 2</h3>
              <input
                type="text"
                name="member2_name"
                placeholder="Name"
                required
                value={formData.member2.name}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member2_name" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                type="tel"
                pattern="\d{10}"
                maxLength="10"
                required
                name="member2_phone"
                placeholder="Phone"
                value={formData.member2.phone}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member2_phone" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                type="email"
                name="member2_email"
                placeholder="Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={formData.member2.email}
                onChange={(e) =>
                  handleInputChange({
                    ...e,
                    target: { ...e.target, name: "member2_email" },
                  })
                }
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <input
                type="text"
                name="member2_collegeName"
                placeholder="College Name"
                required
                value={formData.member2.collegeName}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              />
              <select
                name="member2_year"
                required
                value={formData.member2.year}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-purple-400 rounded-md"
              >
                <option value="" disabled>
                  Select Year
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-[0_0_12px_3px_rgba(168,85,247,0.5)] transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-red-500"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
