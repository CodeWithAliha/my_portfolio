import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aliha.webdeveloper@gmail.com',
      link: 'mailto:aliha.webdeveloper@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 37173802988',
      link: 'tel:+923001234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/CodeWithAliha', // aapka GitHub
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: '#', // abhi placeholder
      color: 'hover:text-blue-500',
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:aliha.webdeveloper@gmail.com', // aapka Gmail
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <info.icon className="text-red-500" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">
                Open to Opportunities
              </h3>
              <p className="text-gray-400">
                I'm currently looking for new opportunities where I can contribute my skills and
                continue growing as a developer. If you have an exciting project or position,
                let's connect!
              </p>
            </div>
          </div>

          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
