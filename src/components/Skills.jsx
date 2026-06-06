import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiDotnet,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" size={40} />,
        level: "75%",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" size={40} />,
        level: "85%",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" size={40} />,
        level: "95%",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" size={40} />,
        level: "90%",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" size={40} />,
        level: "80%",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" size={40} />,
        level: "85%",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "PHP",
        icon: <FaPhp className="text-indigo-400" size={40} />,
        level: "80%",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-400" size={40} />,
        level: "85%",
      },
      {
        name: "Python",
        icon: <FaPython className="text-yellow-300" size={40} />,
        level: "70%",
      },
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      {
        name: "C++",
        icon: <SiCplusplus className="text-blue-500" size={40} />,
        level: "75%",
      },
      {
        name: ".NET",
        icon: <SiDotnet className="text-purple-400" size={40} />,
        level: "70%",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" size={40} />,
        level: "85%",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" size={40} />,
        level: "85%",
      },
      {
        name: "VS Code",
        icon: <TbBrandVscode className="text-blue-400" size={40} />,
        level: "95%",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-10">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >

                    <div className="flex items-center gap-4 mb-5">
                      {skill.icon}

                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>

                          <span className="text-blue-400 text-sm">
                            {skill.level}
                          </span>
                        </div>

                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-blue-500 h-2 rounded-full"
                          />
                        </div>

                      </div>
                    </div>

                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;