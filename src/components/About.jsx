import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-800/70 backdrop-blur-md border border-gray-700 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-blue-500/10 transition duration-300"
        >

          <p className="text-gray-300 text-lg leading-relaxed">
            I am an <span className="text-blue-500 font-semibold">
              Aspiring Full Stack Developer
            </span>{" "}
            with hands-on experience in developing responsive and
            user-centric web applications using modern technologies
            such as HTML, CSS, JavaScript, PHP, React, and MySQL.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            I have contributed to real-world projects during my
            internship at{" "}
            <span className="text-blue-500 font-semibold">
              National Informatics Centre (NIC), Baloda Bazar
            </span>{" "}
            and gained valuable industry exposure through my Web
            Development internship at{" "}
            <span className="text-blue-500 font-semibold">
              Place Mantra
            </span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            I am passionate about building scalable, efficient,
            and user-friendly digital solutions while continuously
            enhancing my technical expertise and problem-solving abilities.
            Currently, I am seeking opportunities to contribute,
            learn, and grow as a software development professional.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">2+</h3>
              <p className="text-gray-400 mt-2">Internships</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">4+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400 mt-2">Dedication</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;