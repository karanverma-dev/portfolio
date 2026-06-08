import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

const projects = [
  {
    title: "Task Management System",
    description:
      "Enterprise-grade task management application developed for NIC Baloda Bazar. Features include secure authentication, role-based access control, task assignment, progress tracking dashboard, and administrative management.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    github: "",
    demo: "",
    featured: true,
  },
  {
  title: "AI Study Assistant",
  description:
    "AI-powered study assistant built using Python and Gemini AI API. Helps students get instant answers, summaries, explanations, and study support through an interactive chatbot interface.",
  tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Gemini API"],
  github: "",
  demo: "https://study-assistant-1rs1.onrender.com",
  featured: false,
 },
  {
    title: "Interactive Calculator",
    description:
      "Responsive calculator application with keyboard support, modern UI, and smooth user interactions. Developed during internship and deployed on Netlify.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "https://cool-calculator-kv1807.netlify.app",
    featured: false,
  },
  {
    title: "Form Validation Module",
    description:
      "Client-side form validation module using regular expressions to validate emails, phone numbers, and password strength effectively.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "https://form-validation-kv1807.netlify.app",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="relative bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-5 right-5 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
              )}

              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 bg-gray-700/50 px-5 py-3 rounded-xl opacity-60 cursor-not-allowed"
                  >
                    <FaLock />
                    Private Repository
                  </button>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 bg-gray-700/50 px-5 py-3 rounded-xl opacity-60 cursor-not-allowed"
                  >
                    <FaExternalLinkAlt />
                    Coming Soon
                  </button>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;