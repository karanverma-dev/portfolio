import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-500">
              Karan Verma
            </h2>

            <p className="text-gray-400 mt-2">
              Web Developer | Full Stack Developer | MSc IT Student
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">

            <a
              href="https://github.com/karanverma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/karan-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:karan.verma.dev01@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition text-2xl"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">

          <p className="text-gray-500 flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()} Karan Verma. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;