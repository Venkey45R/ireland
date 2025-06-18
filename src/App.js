import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hero from './hero.jpeg';
import mem1 from './members/nirmal.jpg';
import mem2 from './members/balaji.jpg';
import mem3 from './members/Kamalesh P.jpg';
import mem4 from './members/Malarvizhi U.jpg';
import mem5 from './members/Rajyalakshmi P.jpg';
import mem6 from './members/Gowthami Manoharan .jpg';
import mem7 from './members/Akash.jpg';
import mem8 from './members/dinesh.jpg';
import mem9 from './members/megashyam.png';
import mem10 from './members/Sankara Narayanan K.jpg';
import mem11 from './members/venkatesh.jpg';

export default function App() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
    desktop: { breakpoint: { max: 1280, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  const members = [
    {
      name: "Nirmalkumar Palanisamy",
      role: "Head",
      bio: "Oversees the overall direction of the project, ensures alignment with goals, and manages high-level planning, decision-making, and team coordination.",
      image: mem1
    },
    {
      name: "Balaji V S",
      role: "AI Developer and Mentor",
      bio: "Leads the design and development of the AI-powered legal chatbot, focusing on model integration, retrieval systems and response generation. Also assists and coordinates the entire team, providing technical guidance, aligning tasks, and ensuring smooth collaboration.",
      image: mem2
    },
    {
      name: "Kamalesh P",
      role: "AI Developer",
      bio: "Designs and develops core components of an AI-powered legal chatbot, specializing in model integration, retrieval-based systems, and intelligent response generation.",
      image: mem3
    },
    {
      name: "Malarvizhi U",
      role: "Data Curator",
      bio: "Responsible for gathering legal documents, statutes, and online resources related to Irish law to support chatbot development.",
      image: mem4
    },
    {
      name: "Rajyalakshmi P",
      role: "Data Curator",
      bio: "Curated comprehensive Irish legal content, including statutes and digital references, to enhance the chatbot’s accuracy and domain understanding.",
      image: mem5
    },
    {
      name: "Gowthami",
      role: "Data Curator",
      bio: "Sourced and organized Irish legal materials and online references to provide a reliable data foundation for the chatbot’s development.",
      image: mem6
    },
    {
      name: "Akash G",
      role: "Frontend Developer",
      bio: "Developed user-friendly interfaces to present Irish legal information clearly, ensuring seamless interaction with the AI-powered chatbot.",
      image: mem7
    },
    {
      name: "Dinesh K",
      role: "Frontend Developer",
      bio: "Designed and implemented responsive front-end components that deliver legal content from the chatbot in a clear and intuitive manner.",
      image: mem8
    },
    {
      name: "Mega Shyam V",
      role: "Frontend Developer",
      bio: "Built and refined the chatbot's front-end interface, focusing on accessibility, responsiveness, and smooth integration of Irish legal data.",
      image: mem9
    },
    {
      name: "Sankara Narayanan K",
      role: "Frontend Developer",
      bio: "Collaborated with AI and backend teams to develop a dynamic frontend experience that accurately reflects Irish legal data through the chatbot.",
      image: mem10
    },
    {
      name: "Venkatesh A",
      role: "Frontend Developer",
      bio: "Engineered the chatbot's front-end interface, prioritizing clean UI/UX design to enhance user interaction with Irish legal resources.",
      image: mem11
    },
  ];

  return (
    <div className="bg-[#b4b1ba] text-[#2e2b32]">
      {/* Navbar */}
      <nav className="w-full bg-[#64626a] shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/logo.png" alt="LawBot Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-semibold text-white">Law Bot</h1>
          <div className="text-white">Your Legal Assistant</div>
        </div>
      </nav>

      <div className="pt-6">
        {/* Hero */}
        <section className="min-h-screen px-6 md:px-20 gap-6 flex flex-col md:flex-row items-center justify-center bg-[#f1f0f4]">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-6xl font-bold text-[#2e2b32] my-4"
            >
              Welcome to LawBot
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#2e2b32] max-w-xl my-8 text-justify"
            >
              We are creating a smart legal assistant chatbot—a virtual helper that you can chat with—designed especially for newcomers and residents in Ireland who have legal questions. This chatbot uses trusted information from Irish government websites and legal sources to help people understand their rights, laws, and what to do in common legal situations
            </motion.p>
            <button className="bg-[#00906d] text-white px-8 text-xl md:text-2xl py-4 rounded-xl hover:bg-emerald-800 shadow-lg transition">
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

        {/* What Section */}
        <section id="what" className="py-12 bg-[#f6f5f8]">
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#00906d]">What are we building</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
            {[
              "Answers legal questions using the latest and most accurate Irish laws and policies",
              "Provides easy-to-follow guidance for real-life situations",
              "Connects users to official resources and legal services in Ireland",
              "Works on mobile and desktop devices, with accessibility built-in for all users"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#e5e4e9] hover:bg-[#f1f0f4] p-5 rounded-xl shadow-sm transition">
                <span className="text-[#00906d] text-2xl mt-1"><i className="fas fa-check-circle"></i></span>
                <p className="text-[#2e2b32] text-md font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Section */}
        <section id="who" className="py-12 bg-[#f1f0f4]">
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#00906d]">Who it helps</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
            {[
              "New immigrants adjusting to Irish laws and systems",
              "Asylum seekers navigating legal processes",
              "Workers and tenants facing rights issues",
              "Irish citizens and residents who want quick, trusted answers",
              "Support organizations that help people understand the law"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#e5e4e9] hover:bg-[#f6f5f8] p-5 rounded-xl shadow-sm transition">
                <span className="text-[#00906d] text-2xl mt-1"><i className="fas fa-user-check"></i></span>
                <p className="text-[#2e2b32] text-md font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Section */}
        <section id="why" className="py-12 bg-[#f6f5f8]">
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#00906d]">Why it matters</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
            {[
              "Bridge the gap between people and the legal help they need",
              "Reduce confusion and anxiety around legal rights and obligations",
              "Empower communities with reliable, accessible legal knowledge"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#e5e4e9] hover:bg-[#f1f0f4] p-5 rounded-xl shadow-sm transition">
                <span className="text-[#00906d] text-2xl mt-1"><i className="fas fa-balance-scale"></i></span>
                <p className="text-[#2e2b32] text-md font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Members Carousel */}
       <section id="members" className="min-h-screen px-4 py-16 bg-[#f1f0f4]">
        <h3 className="text-3xl font-semibold text-center mb-8 text-[#00906d]">Our Team</h3>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} itemClass="px-4">
          {members.map((mem, index) => (
            <div
              key={index}
              className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl transition duration-300 hover:scale-105 bg-[#e5e4e9] flex flex-col h-[520px]" // Fixed card height
            >
              <div className="w-full h-64 flex items-center justify-center bg-white">
                <img src={mem.image} alt={mem.name} className="object-contain w-full h-full p-4 rounded-xl" />
              </div>
              <div className="p-6 text-center text-[#2e2b32] flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-2xl font-bold">{mem.name}</h4>
                  <p className="text-lg text-[#00906d] font-medium">{mem.role}</p>
                </div>
                <p
                  className="text-base text-justify overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {mem.bio}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>


        {/* Footer */}
        <footer className="bg-[#64626a] text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-xl flex flex-col md:flex-row items-center justify-between">
            <p>© {new Date().getFullYear()} LawBot. All rights reserved.</p>
            <div className="flex space-x-4 gap-6 mt-4 md:mt-0 text-2xl text-white">
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
