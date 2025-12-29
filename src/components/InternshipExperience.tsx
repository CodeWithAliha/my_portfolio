import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const InternshipExperience = () => {
  const achievements = [
    'Developed responsive web applications using React.js with modern hooks and state management',
    'Built RESTful APIs with Node.js and Express.js, implementing secure authentication systems',
    'Designed and optimized MongoDB database schemas for efficient data storage and retrieval',
    'Collaborated with senior developers in an Agile environment, participating in daily standups and code reviews',
    'Implemented user-friendly interfaces with Tailwind CSS, ensuring cross-browser compatibility',
    'Debugged and resolved critical issues, improving application performance by 30%',
    'Integrated third-party APIs and services to enhance application functionality',
    'Wrote clean, maintainable code following industry best practices and coding standards',
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Internship <span className="text-red-500">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/20 animate-fadeInUp">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-red-500/10 rounded-xl">
                <Briefcase className="text-red-500" size={36} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  MERN Stack Developer Intern
                </h3>
                <p className="text-xl text-red-500 font-semibold mb-4">
                  GMG Solutions Software Company
                </p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-red-500" />
                    <span>October 2025 - December 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-red-500" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 mt-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Key Responsibilities & Achievements:
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <CheckCircle
                      size={20}
                      className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6 mt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Tech Stack Used:</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'MongoDB',
                  'Express.js',
                  'React.js',
                  'Node.js',
                  'JavaScript',
                  'Tailwind CSS',
                  'Git',
                  'RESTful APIs',
                  'JWT',
                  'Postman',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg font-medium border border-red-500/30 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipExperience;
