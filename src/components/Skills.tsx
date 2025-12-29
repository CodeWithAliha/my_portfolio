import { Code, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux', level: 80 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JWT Authentication', level: 85 },
        { name: 'Socket.io', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'Mongoose', level: 85 },
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'npm/yarn', level: 88 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Agile/Scrum', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern,
            scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <category.icon className="text-red-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-red-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 ease-out animate-expandWidth"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
