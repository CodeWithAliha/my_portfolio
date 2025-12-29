import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aliha_Khan_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Resume</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/20 text-center animate-fadeInUp">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-red-500/10 rounded-full">
                <FileText className="text-red-500" size={64} />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Download My Resume
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              Get a comprehensive overview of my skills, experience, education, and projects in
              a professionally formatted document.
            </p>

            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              <Download
                size={24}
                className="group-hover:translate-y-1 transition-transform"
              />
              <span>Download Resume (PDF)</span>
            </button>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
