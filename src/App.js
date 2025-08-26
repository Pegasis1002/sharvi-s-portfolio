import React from 'react';

const projects = [
  {
    id: 1,
    title: 'To-Do List App',
    description: 'A simple, responsive to-do list built with React and localStorage for persistence.',
    tags: ['React', 'Tailwind', 'localStorage'],
    link: '#'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'This portfolio built with React + Tailwind. Shows projects, skills and a contact form.',
    tags: ['React', 'Tailwind', 'Design'],
    link: '#'
  },
  {
    id: 3,
    title: 'Calculator',
    description: 'A small calculator app to practice component state and handlers.',
    tags: ['React', 'JS'],
    link: '#'
  }
];

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-pink-600">Sharvi</a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>
        <div className="md:hidden">
          <a href="#projects" className="text-sm px-3 py-1 bg-pink-600 text-white rounded">Projects</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">Hi — I’m Sharvi</h1>
          <p className="text-lg text-gray-700 mb-6">
            I build web interfaces with React and Tailwind CSS. I’m a first-year engineering student learning to turn designs into working apps.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">See Projects</a>
            <a href="#contact" className="px-5 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50">Contact Me</a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Replace this with your own image */}
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-pink-100 flex items-center justify-center text-5xl font-bold text-pink-600">
            S
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-700 mb-6">
        I’m a first-year engineering student focused on front-end development. I enjoy building small projects to practice React, JavaScript and responsive design.
      </p>

      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <ul className="flex flex-wrap gap-2">
        {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git'].map(s => (
          <li key={s} className="px-3 py-1 bg-white rounded-full shadow-sm text-sm">{s}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({project}){
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h4 className="font-semibold text-lg text-gray-800">{project.title}</h4>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-pink-50 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-4">
        <a href={project.link} className="text-pink-600 text-sm">View project →</a>
      </div>
    </div>
  );
}

function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function Contact(){
  function handleSubmit(e){
    e.preventDefault();
    alert('Thanks — your message was received (demo).');
    e.target.reset();
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
      <p className="text-gray-700 mb-6">Want to work together or ask a question? Send a quick message:</p>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 space-y-4">
        <input required name="name" placeholder="Your name" className="w-full border px-4 py-2 rounded" />
        <input required type="email" name="email" placeholder="Your email" className="w-full border px-4 py-2 rounded" />
        <textarea required name="message" rows="4" placeholder="Message" className="w-full border px-4 py-2 rounded" />
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-pink-600 text-white rounded-lg">Send</button>
        </div>
      </form>
    </section>
  );
}

function Footer(){
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-600">© {new Date().getFullYear()} Sharvi — Built with React & Tailwind</div>
    </footer>
  );
}

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
