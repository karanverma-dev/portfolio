import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gray-950">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-blue-500 font-semibold mb-4 tracking-widest">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Karan Verma
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-4xl mb-6 h-16">
            <span className="text-blue-400 font-semibold">
              <Typewriter
                words={[
                  "Aspiring Full Stack Developer",
                  "Web Development Enthusiast",
                  "Results-Driven Problem Solver",
                  "Open to Software Opportunities",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Results-driven web developer with hands-on experience in
            full-stack development, government projects at NIC Baloda Bazar,
            and industry internships. Passionate about building scalable,
            modern, and user-friendly applications that solve real-world
            problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Karan_Verma_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 inline-block"
            >
              Download Resume
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105 inline-block"
            >
              View Projects
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start">

            <a
              href="https://github.com/karanverma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition hover:scale-110"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/karan-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:karan.verma.dev01@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>

          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 scale-110"></div>

            <img
              src="/profile.jpg"
              alt="Karan Verma"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
            />

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;