import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      <div className="grid gap-6">
        <div className="glass p-6">
          <h4 className="font-semibold">Manager on Duty — Pizza Express, Jersey</h4>
          <p className="text-[--muted] mt-2">Leadership, staff coordination, and customer service excellence.</p>
        </div>
        <div className="glass p-6">
          <h4 className="font-semibold">Senior Dinghy Instructor — RYA</h4>
          <p className="text-[--muted] mt-2">Led lessons, managed safety, mentored junior instructors.</p>
        </div>
      </div>
    </section>
  );
}
