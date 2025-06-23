import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const welcomeMessages = ["Let's Connect!", "Get in Touch!", "Say Hello!"];
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'CET' });
  const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  useEffect(() => {
    let i = 0;
    let msgIdx = 0;
    const typingInterval = setInterval(() => {
      if (i <= welcomeMessages[msgIdx].length) {
        setHeaderText(welcomeMessages[msgIdx].slice(0, i));
        i++;
      } else {
        setTimeout(() => {
          i = 0;
          msgIdx = (msgIdx + 1) % welcomeMessages.length;
          setHeaderText('');
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Main
      title="Contact"
      description="Contact Sachin Poudel via email @ sachinscnpdl@gmail.com"
    >
      <div className="bg-gradient-to-br from-teal-400 to-indigo-500 min-h-screen flex items-center justify-center py-12 px-4">
        <article className="max-w-xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6" id="contact">
          <header className="text-center mb-6">
            <div className="relative w-full max-w-[350px] mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                {headerText}
              </h2>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 animate-blink" style={{ position: 'absolute', margin: 0 }}>|</span>
            </div>
            <p className="text-md text-gray-600 mt-2">
              It's {dayString} at {timeString} CEST. Have a question or idea? Let’s connect!
            </p>
          </header>
          <div className="email-at mb-6 text-center">
            <p className="text-md text-gray-600 mb-2">Reach me directly at:</p>
            <EmailLink />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-50/80 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:bg-gray-100/80 focus:shadow-ripple"
                placeholder="Your Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-50/80 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:bg-gray-100/80 focus:shadow-ripple"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-50/80 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:bg-gray-100/80 focus:shadow-ripple"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all duration-300 animate-pulse-glow"
            >
              Send Message
            </button>
            {formSuccess && (
              <div className="text-center">
                <p className="text-green-500 font-medium inline-flex items-center">
                  <svg className="w-5 h-5 mr-2 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  Message sent! (Mock response)
                </p>
              </div>
            )}
          </form>
          <div className="mt-6 flex justify-center gap-4">
            <ContactIcons />
          </div>
        </article>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.7); }
          50% { box-shadow: 0 0 10px rgba(99, 102, 241, 1); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-blink { animation: blink 1s infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        .focus:shadow-ripple:focus { position: relative; }
        .focus:shadow-ripple:focus::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 50%;
          animation: ripple 0.5s ease-out forwards;
        }
      `}</style>
    </Main>
  );
};

export default Contact;