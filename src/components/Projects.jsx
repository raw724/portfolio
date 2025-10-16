import React from 'react';

const projects = [
  { title: 'Hospitality Operations Tracker', desc: 'Operations dashboard prototype for managing shifts, KPIs and availability.', tech: 'React, Tailwind' },
  { title: 'Sailing Performance Dashboard', desc: 'Track sailing performance and weather analytics.', tech: 'React, Chart.js' },
  { title: 'Hyrox Training Log', desc: 'Training planner and tracker for competitive events.', tech: 'React, Firebase' }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass p-6">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-[--muted] mt-2">{p.desc}</p>
            <p className="text-sm mt-2">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
