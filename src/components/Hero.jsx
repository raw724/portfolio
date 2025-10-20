import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-7xl lg:text-8xl font-extrabold leading-tight text-[--text] tracking-tight"
  style={{ fontFamily: "'Saira', sans-serif" }}>Russell Walton.</h1>
          <p className="mt-4 text-lg text-[--muted] max-w-xl">
            Computer Science undergraduate at the University of Exeter. Driven by energy, milestones and vibes.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn btn-primary">View Personal Pursuits</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="glass p-6 rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold">My Next Goal</h3>
            <p className="text-[--muted] text-sm mt-2">Red Bull Student Marketeer • This job was made for me</p>
            <p className="mt-4 text-sm">me@russellwalton.com</p>
            <p className="text-sm">07797 770500</p>
          </div>
        </div>
      </div>
    </section>
  );
}
