import React from 'react';

const items = [
  { role: 'School Prefect', date: '2023 — Present', company: 'My School', details: 'Led student teams, organised events and supported younger students.' },
  { role: 'Maths Tutor', date: '2022 — Present', company: 'Private Tutoring', details: 'One-to-one tutoring for GCSE and A-level students in Mathematics.' }
];

export default function Experience(){
  return (
    <section id="experience" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      <div className="grid gap-6">
        {items.map((it, i) => (
          <article key={i} className="glass p-6 rounded-2xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-white/60">{it.company}</div>
                <div className="text-lg font-semibold mt-1">{it.role}</div>
                <div className="text-sm text-white/60 mt-1">{it.date}</div>
              </div>
            </div>
            <p className="mt-4 text-white/80">{it.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
