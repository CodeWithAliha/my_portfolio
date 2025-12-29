import { Code2, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate MERN Stack Developer who recently completed an enriching internship
              at <span className="text-red-500 font-semibold">GMG Solutions</span>, where I honed
              my skills in building full-stack web applications from scratch.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              During my time at GMG Solutions, I worked on real-world projects that enhanced my
              understanding of the complete software development lifecycle. From designing intuitive
              user interfaces with React to developing robust backend APIs with Node.js and Express,
              I've gained hands-on experience in every layer of modern web development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech is driven by a constant desire to learn and create. I specialize in
              transforming ideas into functional, user-friendly applications that solve real problems.
              Whether it's building responsive frontends, designing scalable databases, or optimizing
              server performance, I approach each challenge with enthusiasm and dedication.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm now eager to contribute my skills to innovative projects and continue growing as a
              developer in a collaborative environment.
            </p>
          </div>

          <div className="space-y-6 animate-slideInRight">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Code2 className="text-red-500" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Clean Code Advocate
                  </h3>
                  <p className="text-gray-400">
                    Writing maintainable, scalable, and well-documented code following industry
                    best practices and design patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Lightbulb className="text-red-500" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Problem Solver
                  </h3>
                  <p className="text-gray-400">
                    Tackling complex challenges with creative solutions, debugging efficiently,
                    and optimizing performance for better user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Target className="text-red-500" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Continuous Learner
                  </h3>
                  <p className="text-gray-400">
                    Staying updated with the latest technologies, frameworks, and development
                    trends to deliver modern solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
