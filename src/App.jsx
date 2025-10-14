import React from "react";
import { motion } from "framer-motion";
import './index.css';

export default function App() {
  const traits = [
    { word: "Activator", tag: "gets things moving" },
    { word: "Visionary", tag: "sees the big picture" },
    { word: "Do-er", tag: "makes it happen" },
  ];
  const experience = [
    { role: "Manager on Duty — Pizza Express (Jersey)", date: "Oct 2022 – Present", bullets: ["Led shift teams, rotas and operations through busy services","Managed cash, stock and safety procedures","Resolved escalations while keeping morale high"] },
    { role: "Senior Dinghy Instructor & Sailing Coach", date: "2021 – 2023 (seasonal)", bullets: ["RYA-qualified instructor supervising safety and lessons","Mentored junior instructors and planned course progressions"] },
    { role: "Farm Hand — Bramble Farm", date: "Summer 2021", bullets: ["Physically demanding outdoor work"] }
  ];
  const achievements = ["RYA Senior Instructor","Hobie 16 — World & European Championship competitor","Hyrox training — first event (Manchester)"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
      <header className="fixed w-full z-40 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-900 to-red-500 flex items-center justify-center text-white font-bold">RW</div>
            <div>
              <div className="text-sm font-semibold">Russell Walton</div>
              <div className="text-xs text-slate-600">Computer Science · Activator</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#redbull-vision">Exeter x Red Bull</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-900 text-white">Contact</a>
          </nav>
        </div>
      </header>
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              I’m <span className="text-blue-900">Russell Walton</span> — an <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-red-500 to-yellow-400">Activator</span> of people, ideas and events.
            </motion.h1>
            <p className="mt-6 text-lg text-slate-700">Computer Science undergraduate at the University of Exeter. Leader, instructor and brand activator — I create energy wherever I go: from managing teams at Pizza Express to coaching on the water and building campus communities. I don’t wait for opportunities — I make them.</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg">Work with me</a>
              <a href="#redbull-vision" className="text-sm font-medium text-blue-900 underline">My Red Bull vision for Exeter</a>
            </div>
            <div className="mt-8 flex gap-4">
              {traits.map((t, i) => (
                <motion.div key={t.word} whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow-md border flex-1">
                  <div className="text-sm text-slate-400">{t.tag}</div>
                  <div className="mt-1 text-xl font-bold text-blue-900">{t.word}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 md:h-[28rem] rounded-3xl bg-gradient-to-br from-blue-50 to-white border shadow-xl overflow-hidden flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-slate-400">Interactive preview</div>
                <div className="mt-4 text-lg font-semibold">Click any marker on the campus map to see an activation idea</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="px-3 py-2 rounded-lg bg-blue-900 text-white text-xs">Library</button>
                  <button className="px-3 py-2 rounded-lg bg-red-500 text-white text-xs">Sports Hall</button>
                  <button className="px-3 py-2 rounded-lg bg-yellow-400 text-slate-900 text-xs">Societies</button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-6 p-2 bg-white rounded-full shadow-lg border"> 
              <div className="text-xs text-slate-500">Resume • DOCX</div>
              <a href="/Russell_Walton_CV.docx" className="text-sm font-medium text-blue-900">Download</a>
            </div>
          </div>
        </section>
        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 text-slate-700">Highly motivated Computer Science undergraduate at the University of Exeter, with strong leadership experience managing teams and aiding staff in hospitality and water sports. Skilled and motivated to deliver outstanding customer experiences, able to take initiative in fast-paced environments. Driven, energetic, and passionate about community building, and exceeding expectations.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-600">Key Skills</h3>
                <ul className="mt-3 list-disc list-inside text-slate-700 space-y-2">
                  <li><strong>Leadership & Management:</strong> Manager on Duty at Pizza Express — shift leadership, problem solving and team morale.</li>
                  <li><strong>Customer Engagement:</strong> Front-of-house skills; confident communication across diverse audiences.</li>
                  <li><strong>Brand Activation:</strong> Setting up brand experiences that match the vibe and create memorable moments.</li>
                  <li><strong>Resilience & Initiative:</strong> Thrive under pressure, adapt quickly, and constantly improve.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-600">Education</h3>
                <div className="mt-3 text-slate-700">
                  <div className="font-medium">University of Exeter — BSc Computer Science</div>
                  <div className="text-sm text-slate-500">2025 – Present</div>
                  <div className="mt-4 font-medium">Victoria College, Jersey</div>
                  <div className="text-sm text-slate-500">2019 – 2025 — A-Levels: Mathematics (A), Physics (B), Computer Science (B)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((e, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl shadow-md border flex gap-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-900 to-red-500 flex items-center justify-center text-white font-semibold">{idx+1}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-blue-900">{e.role}</div>
                      <div className="text-sm text-slate-500">{e.date}</div>
                    </div>
                    <div className="text-sm text-slate-500">Location: Jersey</div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-slate-700">
                    {e.bullets.map((b,i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="achievements" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a,i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-md border">
                <div className="text-sm text-slate-500">Certification / Achievement</div>
                <div className="mt-3 font-semibold text-slate-800">{a}</div>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="redbull-vision" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-red-500">My Red Bull Vision for Exeter</h2>
            <p className="mt-3 text-slate-700">I believe Red Bull should not only show up at headline events, but become embedded in the weekly life of Exeter students. That means:</p>
            <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
              <li>Visible activations at sports fixtures and society socials — quick, high-energy touchpoints that don't interrupt the flow of student life.</li>
              <li>A campus map of weekly micro-activations — pop-up study boosts, recovery stations after events and community sponsorships for grassroots sport.</li>
              <li>Student co-created content (TikTok/Reels) celebrating the energy of Exeter — organic, authentic and shareable.</li>
            </ul>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-xl">Pop-up Sports Booths</div>
              <div className="p-4 bg-red-50 rounded-xl">Micro-Study Stations</div>
              <div className="p-4 bg-yellow-50 rounded-xl">Society Sponsorships</div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-blue-900 to-red-500 text-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Let’s make something happen</h3>
                <p className="mt-3 text-white/90">I’d love to bring energy to a brand team or help activate the Exeter campus. Email me or connect on LinkedIn and let’s set up a 15-minute chat.</p>
                <div className="mt-6 flex gap-4">
                  <a href="mailto:me@russellwalton.com" className="px-4 py-3 bg-white text-blue-900 rounded-lg font-semibold">Email</a>
                  <a href="https://www.linkedin.com/in/russellwalton" target="_blank" rel="noreferrer" className="px-4 py-3 border border-white/30 rounded-lg">LinkedIn</a>
                </div>
              </div>
              <div>
                <div className="bg-white text-slate-900 p-4 rounded-2xl">
                  <div className="text-sm text-slate-500">Quick contact</div>
                  <div className="mt-2 font-medium">Russell Walton</div>
                  <div className="text-sm">St. Brelade, Jersey</div>
                  <div className="mt-2 text-sm">Mobile: 07797 770500</div>
                  <div className="text-sm">Email: me@russellwalton.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Russell Walton — Built with energy.</footer>
      </main>
    </div>
  );
}
