import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Web Development Internship Certificate",
    issuer: "Place Mantra",
    date: "August 2025",
    link: "#", 
  },
  {
    title: "NIC Project Trainee Certificate",
    issuer: "National Informatics Centre (NIC)",
    date: "June 2026",
    link: "#", 
  },
  {
    title: "Python Programming Certification",
    issuer: "Self Learning / Online Platform",
    date: "2025",
    link: "#",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <FaCertificate
                  size={50}
                  className="text-blue-400"
                />
              </div>

              <h3 className="text-xl font-bold text-center text-white mb-3">
                {certificate.title}
              </h3>

              <p className="text-gray-400 text-center mb-2">
                {certificate.issuer}
              </p>

              <p className="text-blue-400 text-center mb-6">
                {certificate.date}
              </p>

              {certificate.link !== "#" && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              )}

              {certificate.link === "#" && (
                <button
                  disabled
                  className="w-full bg-gray-700 px-5 py-3 rounded-xl opacity-60 cursor-not-allowed"
                >
                  Certificate Coming Soon
                </button>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;