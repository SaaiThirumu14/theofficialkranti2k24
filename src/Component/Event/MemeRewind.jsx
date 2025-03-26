import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import image from "../Event/images/meme.webp";

export default function MemeRewind() {
  const event = {
    title: "Meme Rewind",
    img: image,
    date: "online",
    description:
      "Meme Rewind is a fun and creative event where participants express their humor through memes! Participants will be given a specific theme and must create original memes that will be posted on our official Instagram page. The meme with the highest number of likes and shares will be crowned the winner. This event is perfect for those who love trending memes, pop culture, and social media engagement. Get ready to make the internet laugh and win exciting prizes!",
    rules: [
      "Theme-Based Memes: Participants must create memes based on the given themes, which will be revealed at the start of the event.",

      "Original Content Only: Memes must be original and should not be copied or taken from the internet. Plagiarized entries will be disqualified.",

      "Format: Memes can be in image, GIF, or short video format (max 30 seconds).",

      "Submission Deadline: All memes must be submitted within the given time limit. Late entries will not be considered.",

      "Social Media Posting: The submitted memes will be posted on the official Kranti 2K25 Instagram page.",

      "Winner Selection: The meme with the highest likes and engagement (likes + shares) by the deadline will be declared the winner.",

      "No Offensive Content: Memes should be funny yet respectful—any offensive, political, or inappropriate content will lead to disqualification.",

      "Editing Allowed: Participants can use any editing software or meme-making tools to create their submissions.",

      "Team Participation: Individual participation is allowed.",

      "Judges' Decision: In case of a tie or any disputes, the event coordinators' decision will be final.",
    ],
    coordinator: ["Mohideen Abdul Aziz", "Seysanth V", "Arthyvarshini E"],
    contact: ["+91 9840332386", "+91 90257 70052"],
    need: ["Name", "Insta ID", "Department", "Year", "College"],
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
        <p className="text-lg mb-3 text-white">{event.description}</p>
        <p className="text-md text-purple-300 text-center">
          📅 Mode of Event: {event.date}
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
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Details need to be provided
          </h2>
          <h2 className="text-xl text-white">
            Send the above details along with your meme to our Instagram link
            mentioned below
          </h2>

          <ul className="text-white list-disc list-inside">
            {event.need.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/yourpage", "_blank")
            }
            className="py-2 px-6 text-white rounded-lg text-md font-semibold transition-all shadow-[0_0_15px_3px_rgba(168,85,247,0.6)] bg-purple-600 hover:bg-purple-700"
          >
            Upload your meme
          </button>
        </div>
      </motion.div>
    </div>
  );
}
