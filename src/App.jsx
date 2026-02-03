import React, { useState } from 'react';

// Ikony
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 4 1 9 3-3 3-3 5.6 0 .6 0 1.2.5 1.7 1.1 1.2 1.1 1.2s1 4-1 9c-2.8 3.5-6.5 3.5-6.5 3.5z"/></svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-shop Dashboard",
      desc: "Administrační panel pro správu objednávek.",
      tech: ["React", "Tailwind"],
      color: "bg-blue-500"
    },
    {
      title: "Task Manager",
      desc: "Aplikace na správu úkolů.",
      tech: ["React", "Firebase"],
      color: "bg-purple-500"
    },
    {
      title: "Počasí App",
      desc: "Předpověď počasí napojená na API.",
      tech: ["JavaScript", "API"],
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevPortfolio
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 font-medium">O mně</a>
              <a href="#projects" className="hover:text-blue-600 font-medium">Projekty</a>
              <a href="#contact" className="hover:text-blue-600 font-medium">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            React Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900">
            Tvořím moderní <br /> <span className="text-blue-600">webové aplikace.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Vítej na mém portfoliu. Jsem začínající vývojář se zápalem pro čistý kód a moderní design.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-all">
              Moje projekty
            </a>
            <button className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <GithubIcon /> GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Projekty */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ukázka práce</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-50">
                <div className={`h-48 ${project.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl opacity-80">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-bold px-2 py-1 bg-white border rounded-md text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;