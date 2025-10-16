import React from 'react';

const projects = [
  { title: 'Portfolio Website', desc: 'This site — a modern Vite + React + Tailwind portfolio with interactive sections and smooth animations.', tech: ['React', 'Vite', 'Tailwind'], link: '#' },
  { title: 'Maths Revision App', desc: 'An app to practice A-level questions with timed tests and performance tracking.', tech: ['JavaScript', 'Node', 'Express'], link: '#' },
  { title: 'Cycling Routes Explorer', desc: 'A small mapping project to plan and track road cycling routes.', tech: ['Leaflet', 'React'], link: '#' }
];

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass p-5 rounded-2xl flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <div className="text-sm text-white/60">{p.tech.join(' • ')}</div>
            </div>
            <p className="mt-4 text-white/80 flex-1">{p.desc}</p>
            <div className="mt-4">
              <a href={p.link} className="btn btn-primary inline-block">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
