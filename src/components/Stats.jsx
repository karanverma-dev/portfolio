import { motion } from "framer-motion";
import {
  FaCode,
  FaBriefcase,
  FaAward,
  FaLaptop,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptop size={35} className="text-blue-400" />,
    value: "4+",
    title: "Projects Completed",
  },
  {
    icon: <FaBriefcase size={35} className="text-blue-400" />,
    value: "2",
    title: "Internships",
  },
  {
    icon: <FaCode size={35} className="text-blue-400" />,
    value: "10+",
    title: "Technologies",
  },
  {
    icon: <FaAward size={35} className="text-blue-400" />,
    value: "100%",
    title: "Dedication",
  },
];

function Stats() {
  return (
    <section id="stats" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Achievements & Highlights
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl p-8 text-center shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              <div className="flex justify-center mb-5">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-blue-500 mb-2">
                {stat.value}
              </h3>

              <p className="text-gray-300 font-medium">
                {stat.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;