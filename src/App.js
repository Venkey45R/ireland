import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hero from './hero.jpeg';
import tech from './tech.avif';
import member from './member.png';
import mem1 from './balaji.jpg';
import mem2 from './Akash.jpg';
import mem3 from './Kamalesh P.jpg';
import mem4 from './dinesh.jpg';

export default function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  const members = [
  {
    name: "Balaji V S",
    role: "Mentor",
    bio: "Guides the team with technical and strategic input, ensuring the project's alignment",
    image: mem1
  },
  {
    name: "Akash G",
    role: "Developer",
  bio: "Handles the technical implementation of features, ensuring functionality",
    image: mem2
  },
  {
    name: "Dinesh K",
    role: "Developer",
  bio: "Handles the technical implementation of features, ensuring functionality and responsiveness across devices.",
    image: mem4
  },
  {
    name: "Kamalesh P",
    role: "Mentor",
    bio: "Guides the team with technical and strategic input, ensuring the project's alignment",
    image: mem3
  },
];

  return (
      <div className="bg-slate-50 text-slate-900">
    {/* Navbar */}
    <nav className="w-full bg-slate-200 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <img src="/logo.png" alt="LawBot Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-semibold text-center text-blue-900">Law Bot</h1>
        <div className="text-blue-900">Your Legal Assistant</div>
      </div>
    </nav>

    <div className="pt-6">
      {/* Hero */}
      <section className="min-h-screen px-6 md:px-20 gap-6 flex flex-col md:flex-row items-center justify-center bg-slate-100">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 my-4"
          >
            Welcome to LawBot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl text-slate-900 max-w-2xl my-8 text-justify"
          >
            We are building a smart legal assistant chatbot — a virtual helper designed for newcomers and residents in Ireland. It answers legal questions using trusted sources and government data.
          </motion.p>
          <button className="bg-blue-600 text-white px-8 text-xl md:text-2xl py-4 rounded-xl hover:bg-blue-700 shadow-lg">
            Learn more
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <img src={hero} alt="Ireland Government" className="w-full rounded-2xl shadow-2xl" />
        </motion.div>
      </section>

      {/* Sections (What / Who / Why) */}
      <section id="what" className="py-12 bg-white">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">What are we building</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          {[
            "Answers legal questions using the latest and most accurate Irish laws and policies",
            "Provides easy-to-follow guidance for real-life situations",
            "Connects users to official resources and legal services in Ireland",
            "Works on mobile and desktop devices, with accessibility built-in for all users"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-slate-100 p-5 rounded-xl shadow-sm hover:bg-slate-200">
              <span className="text-blue-600 text-2xl mt-1"><i className="fas fa-check-circle"></i></span>
              <p className="text-slate-800 text-md font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who" className="py-12 bg-slate-100">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">Who it helps</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          {[
            "New immigrants adjusting to Irish laws and systems",
            "Asylum seekers navigating legal processes",
            "Workers and tenants facing rights issues",
            "Irish citizens and residents who want quick, trusted answers",
            "Support organizations that help people understand the law"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-white hover:bg-gray-100 p-5 rounded-xl shadow-sm">
              <span className="text-blue-600 text-2xl mt-1"><i className="fas fa-user-check"></i></span>
              <p className="text-slate-800 text-md font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="py-12 bg-white">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">Why it matters</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          {[
            "Bridge the gap between people and the legal help they need",
            "Reduce confusion and anxiety around legal rights and obligations",
            "Empower communities with reliable, accessible legal knowledge"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-slate-100 hover:bg-slate-200 p-5 rounded-xl shadow-sm">
              <span className="text-blue-600 text-2xl mt-1"><i className="fas fa-balance-scale"></i></span>
              <p className="text-slate-800 text-md font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Members Carousel */}
        <section id="members" className="min-h-screen px-4 py-16 bg-slate-100">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">Members</h3>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} itemClass="px-4">
            {members.map((mem, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:brightness-105 bg-gradient-to-br from-emerald-100 via-blue-100 to-pink-100"
              >
                <div className="w-full h-64 flex items-center justify-center bg-white/30">
                  <img src={mem.image} alt={mem.name} className="object-contain w-full h-full p-4 rounded-xl" />
                </div>
                <div className="p-6 text-center text-gray-900">
                  <h4 className="text-2xl font-bold">{mem.name}</h4>
                  <p className="text-lg text-blue-800 font-medium">{mem.role}</p>
                  <p className="text-base mt-3 text-justify">{mem.bio}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      {/* Footer */}
     <footer className="bg-slate-200 text-blue-900 py-8 px-4">
        <div className="max-w-7xl mx-auto text-xl  flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} LawBot. All rights reserved.</p>
          <div className="flex space-x-4 gap-6 mt-4 md:mt-0 text-2xl">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </footer>
    </div>
  </div>

  );
}
