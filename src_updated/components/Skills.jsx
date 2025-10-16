import React from 'react';

const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'HTML', 'CSS'] },
  { title: 'Frameworks', items: ['React', 'Vite'] },
  { title: 'Tools', items: ['Git', 'VSCode', 'Tailwind'] }
];

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((g, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl">
            <div className="text-sm text-white/60">{g.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm border border-white/10 text-white/90 bg-white/3">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
