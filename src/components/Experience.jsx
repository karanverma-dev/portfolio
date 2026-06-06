import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "National Informatics Centre (NIC), Baloda Bazar",
    role: "Project Trainee",
    duration: "January 2026 – June 2026",
    description:
      "Developed a full-stack Task Management System for a government organization using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. Implemented secure authentication, role-based task assignment, progress tracking dashboards, and administrative control features.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    type: "Government Internship",
  },
  {
    company: "Place Mantra",
    role: "Web Development Intern",
    duration: "June 2025 – August 2025",
    description:
      "Designed and deployed live web applications, including an Interactive Calculator and a Form Validation Module, using HTML, CSS, and JavaScript. Collaborated on code reviews and followed industry best practices.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    type: "Industry Internship",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-2 border-blue-500 ml-4 md:ml-8">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="mb-12 ml-8 md:ml-12 relative"
            >

              {/* Timeline Icon */}
              <div className="absolute -left-[50px] md:-left-[58px] top-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase size={20} className="text-white" />
              </div>

              {/* Experience Card */}
              <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

                  <div>
                    <h3 className="text-2xl font-bold text-blue-500">
                      {exp.role}
                    </h3>

                    <h4 className="text-lg text-gray-300 mt-1">
                      {exp.company}
                    </h4>
                  </div>

                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium w-fit">
                    {exp.type}
                  </span>

                </div>

                <p className="text-sm text-gray-400 mb-5">
                  {exp.duration}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;