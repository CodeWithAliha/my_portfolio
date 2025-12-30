import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex justify-center items-center">
              &copy; {currentYear} <span className="text-red-500 font-semibold">&nbsp; Aliha Khan</span>{" "}
              <Heart className="text-red-500 fill-red-500 animate-pulse mx-1" size={18} /> All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
