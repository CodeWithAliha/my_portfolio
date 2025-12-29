import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'E-commerce', 'MERN Stack', 'React', 'HTML/CSS'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects.filter(
          (project) =>
            project.title !== 'MovieVault - Film Database' &&
            project.title !== 'WeatherNow - Weather Dashboard' &&
            project.title !== 'CaféCulture - Coffee Shop Site'
        )
      : projects.filter(
          (project) =>
            project.category === activeFilter &&
            project.title !== 'MovieVault - Film Database' &&
            project.title !== 'WeatherNow - Weather Dashboard' &&
            project.title !== 'CaféCulture - Coffee Shop Site'
        );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my journey from basic web development to
            full-stack MERN applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Private</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
