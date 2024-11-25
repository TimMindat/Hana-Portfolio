import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hana Emam
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 mb-8">
                Admin & Marketeer
              </h2>
              <div className="space-y-4">
                <a href="mailto:hanaemam2001@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  hanaemam2001@gmail.com
                </a>
                <a href="tel:+20-01141461741" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  +20-01141461741
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  Cairo, Egypt
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/hLw9J7B.png"
                alt="Hana Emam"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
          
          {/* Featured Role */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12 transform hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Restore Language and Culture Center</h3>
            <p className="text-xl text-gray-600 mb-4">Administration & Marketing Coordination</p>
            <p className="text-gray-500">April 2024 - Present • Cairo, Egypt</p>
          </div>

          {/* Grid of Other Roles */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "Remontada",
                role: "Marketing & Social Media Management",
                period: "August 2023 - Present",
                details: "Customer Support & Event Organization"
              },
              {
                company: "Language Exchange (UK)",
                role: "Social Media Management",
                period: "April 2023 - Present",
                details: "Customer Support"
              },
              {
                company: "Upwork",
                role: "Translation & Social Media Management",
                period: "2021 - Present",
                details: "Freelance Services"
              },
              {
                company: "Cairo Bazaar",
                role: "Marketing & Social Media Management",
                period: "August 2021 - 2022",
                details: "Customer Support"
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.company}</h3>
                <p className="text-blue-600 mb-2">{job.role}</p>
                <p className="text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-600">{job.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-blue-50" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Skills */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Core Skills</h3>
              <ul className="space-y-3">
                {["Administration", "Customer Support", "Customer Experience", "Marketing", "Social Media Management", "Translation", "Event Organization"].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Technical Skills</h3>
              <ul className="space-y-3">
                {["Microsoft Office", "Google Suite", "Libre Office"].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Languages</h3>
              <div className="space-y-4">
                {[
                  { lang: "English", level: "Professional" },
                  { lang: "Greek", level: "Professional" },
                  { lang: "Arabic", level: "Native" }
                ].map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{lang.lang}</span>
                      <span className="text-blue-600">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Bachelor of Greek Language</h3>
            <p className="text-xl text-gray-800 mb-2">Faculty of Arts, Cairo University</p>
            <p className="text-gray-600">2020 - 2024</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">© 2024 Hana Emam. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:hanaemam2001@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+20-01141461741" className="hover:text-blue-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;