import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Jitesh Jain' },
        'V8sj3GYj2gg3oQQko'
      );
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, title: 'Email', value: 'jainjitesh2004@gmail.com', link: 'mailto:jainjitesh2004@gmail.com', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', hoverBorder: 'hover:border-blue-500/50' },
    { icon: <Phone size={20} />, title: 'Phone', value: '+91 9784874231', link: 'tel:+919784874231', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', hoverBorder: 'hover:border-green-500/50' },
    { icon: <MapPin size={20} />, title: 'Location', value: 'Rajasthan, India', link: '#', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', hoverBorder: 'hover:border-purple-500/50' },
  ];

  const socials = [
    { icon: <Github size={20} />, name: 'GitHub', handle: 'JiteshJain123', link: 'https://github.com/JiteshJain123', color: 'text-gray-300', hoverBorder: 'hover:border-slate-400' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', handle: 'jitesh-jain22', link: 'https://linkedin.com/in/jitesh-jain22', color: 'text-blue-400', hoverBorder: 'hover:border-blue-500/60' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-5 rounded-full" />
        </div>

        <div data-reveal className="grid lg:grid-cols-2 gap-10">

          {/* ── LEFT — Info ── */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <MessageCircle className="text-pink-400" size={24} />
                Let's build something great
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to collaborate on new projects — whether it's a startup idea,
                an AI integration challenge, or just a conversation about tech.
              </p>
            </div>

            {/* Response time badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full">
              <Clock size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Typically responds within 24 hours</span>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.link}
                  className={`flex items-center gap-4 p-4 bg-slate-800/60 border border-slate-700 ${info.hoverBorder} rounded-xl transition-all duration-300 group`}
                >
                  <div className={`p-2.5 rounded-xl border ${info.bg} ${info.color} flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{info.title}</div>
                    <div className="text-sm text-white font-semibold group-hover:text-gray-200 transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-2.5 bg-slate-800 border border-slate-700 ${s.hoverBorder} rounded-xl transition-all duration-200 group`}
                  >
                    <span className={`${s.color}`}>{s.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-white">{s.name}</div>
                      <div className="text-xs text-gray-500">@{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 overflow-hidden">
            {/* Top shimmer */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {sent && (
              <div className="mb-4 flex items-center gap-2 px-4 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jitesh Jain"
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                  rows={5}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/20 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2.5"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Bottom shimmer */}
            <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <p className="text-gray-500 text-sm">
            © 2025 Jitesh Jain · Crafted with ❤️ using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
