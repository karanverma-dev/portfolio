import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          I'm actively seeking opportunities in software development
          and open to internships, freelance projects, and full-time
          roles. Let's connect and build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl p-8 md:p-10 shadow-xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* Email */}
            <a
              href="mailto:karan.verma.dev01@gmail.com"
              className="flex items-center gap-5 p-5 bg-gray-700/60 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 border border-transparent transition-all duration-300"
            >
              <FaEnvelope className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-white text-lg">
                  Email
                </h3>

                <p className="text-gray-300">
                  karan.verma.dev01@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919644008588"
              className="flex items-center gap-5 p-5 bg-gray-700/60 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 border border-transparent transition-all duration-300"
            >
              <FaPhone className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-white text-lg">
                  Phone
                </h3>

                <p className="text-gray-300">
                  +91 9644008588
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 p-5 bg-gray-700/60 rounded-2xl border border-transparent">
              <FaMapMarkerAlt className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-white text-lg">
                  Location
                </h3>

                <p className="text-gray-300">
                  Raipur, Chhattisgarh, India
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karan-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 bg-gray-700/60 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 border border-transparent transition-all duration-300"
            >
              <FaLinkedin className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-white text-lg">
                  LinkedIn
                </h3>

                <p className="text-gray-300">
                  linkedin.com/in/karan-verma-dev
                </p>
              </div>
            </a>

          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="mailto:karan.verma.dev01@gmail.com"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              <FaPaperPlane />
              Send Email
            </a>

            <a
              href="https://github.com/karanverma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              <FaGithub />
              Visit GitHub
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;