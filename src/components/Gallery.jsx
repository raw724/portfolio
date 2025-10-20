import React from 'react';

export default function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
  ];

  return (
    <section className="min-h-screen bg-[--bg] text-[--text] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <p className="text-[--muted] text-center mb-12">
          A collection of visuals that describe who I am.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img src={src} alt="" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/" className="underline text-[--accent] hover:opacity-80">← Back to Home</a>
        </div>
      </div>
    </section>
  );
}
