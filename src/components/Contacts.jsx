import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_ke0t5xy',
        'template_6xithyq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jitesh Jain'
        },
        'V8sj3GYj2gg3oQQko'
      );

      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "jainjitesh2004@gmail.com",
      link: "mailto:jainjitesh2004@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9784874231",
      link: "tel:+919784874231",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Rajasthan, India",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com/JiteshJain123",
      color: "from-gray-500 to-gray-300"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/jitesh-jain22",
      color: "from-blue-500 to-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start a project together? Let's create something amazing!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="text-blue-400" />
                Let's talk about your project
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and help bring your ideas to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl transition-all duration-300 transform hover:scale-95 hover:border-slate-600 group`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${info.color} group-hover:brightness-125`}>
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium">{info.title}</div>
                    <div className={`font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${info.color} text-white transition-all`}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-800 border border-slate-700 rounded-xl transition-all duration-300 transform hover:scale-95 hover:border-slate-600 group`}
                  >
                    <div className={`text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${social.color}`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 transition-all duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white resize-none focus:border-blue-500 transition-all duration-300"
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2025 Jitesh Jain. Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
