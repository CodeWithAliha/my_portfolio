import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Globe & tech icons */}
      <div className="globe-container mb-5">
        <div className="globe"></div>
        <div className="tech-icon icon-1"><div className="icon-content">React</div></div>
        <div className="tech-icon icon-2"><div className="icon-content">Node</div></div>
        <div className="tech-icon icon-3"><div className="icon-content">MongoDB</div></div>
        <div className="tech-icon icon-4"><div className="icon-content">Next.js</div></div>
        <div className="tech-icon icon-5"><div className="icon-content">JS</div></div>
        <div className="tech-icon icon-6"><div className="icon-content">Git</div></div>
        <div className="tech-icon icon-7"><div className="icon-content">GitHub</div></div>
        <div className="tech-icon icon-8"><div className="icon-content">PHP</div></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mt-24">
        <div className="animate-fadeInUp mt-5">
          <h2 className="text-red-500 text-xl md:text-2xl font-semibold mb-4 animate-slideInLeft">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slideInRight">
            Aliha Khan
          </h1>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>

          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 animate-slideInLeft delay-200">
            MERN Stack Developer
          </p>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fadeIn delay-400">
            Building innovative web applications with MongoDB, Express.js, React, and Node.js. Passionate about creating seamless user experiences and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn delay-600">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Aliha_Khan_Resume.pdf';
                link.click();
              }}
              className="group px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-red-500 hover:text-red-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          {/* Scroll indicator below buttons */}
          <div className="mt-20 animate-bounce">
            <div className="inline-block">
              <div className="w-6 h-10 border-2 border-red-500 rounded-full p-1">
                <div className="w-1.5 h-3 bg-red-500 rounded-full mx-auto animate-scroll"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
