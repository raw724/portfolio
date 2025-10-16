import React, { useState } from 'react';

export default function Contact(){
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl">
          <h4 className="font-semibold">Get in touch</h4>
          <p className="mt-3 text-white/80">I’m available for freelance work and school projects. Feel free to reach out.</p>
          <div className="mt-6">
            <div className="text-sm text-white/60">Email</div>
            <div className="font-medium">russell@example.com</div>
            <div className="mt-4 text-sm text-white/60">Phone</div>
            <div className="font-medium">+44 7700 900000</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl">
          <label className="text-sm text-white/60">Your name</label>
          <input required className="w-full mt-2 p-3 rounded-lg bg-white/3 border border-white/6" placeholder="Your name" />
          <label className="text-sm text-white/60 mt-4 block">Email</label>
          <input required type="email" className="w-full mt-2 p-3 rounded-lg bg-white/3 border border-white/6" placeholder="you@example.com" />
          <label className="text-sm text-white/60 mt-4 block">Message</label>
          <textarea required className="w-full mt-2 p-3 rounded-lg bg-white/3 border border-white/6" rows="4" placeholder="Hi Russell —"></textarea>
          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="btn btn-primary">{sent ? 'Sent' : 'Send message'}</button>
            <a href="mailto:russell@example.com" className="btn btn-ghost">Email me</a>
          </div>
        </form>
      </div>
    </section>
  );
}
