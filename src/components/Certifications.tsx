import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous
            learning
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/20 animate-fadeInUp">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-500/10 rounded-xl">
                <Award className="text-red-500" size={36} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  MERN Stack Development Certificate
                </h3>
                <p className="text-red-500 font-semibold">GMG Solutions Software Company</p>
                <p className="text-gray-400">Certificate No: 1132 | Issued: December 29, 2025</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl border-2 border-gray-800 hover:border-red-500 transition-all duration-300">
              <img
                src="/images/7f5521c5-32a1-4252-88e8-2cf15359177b.jpg"
                alt="MERN Stack Internship Certificate"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>

            <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">
                Certificate Highlights:
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Completed 3-month intensive MERN Stack development internship program
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Demonstrated excellent dedication and strong work ethic throughout the program
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Consistently delivered high-quality performance on real-world projects
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="/images/7f5521c5-32a1-4252-88e8-2cf15359177b.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink size={20} />
                <span>View Full Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
