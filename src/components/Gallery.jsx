import React from 'react';

export default function Gallery() {
  const images = [
    '/20220421_153956_iOS.jpg',
'/20220421_154006_iOS.jpg',
'/20220421_154012_iOS.jpg',
'/20220421_154017_iOS.jpg',
'/20220421_154022_iOS.jpg',
'/20220421_154028_iOS.jpg',
'/20220421_154033_iOS.jpg',
'/20220421_154038_iOS.jpg',
'/20220421_154043_iOS.jpg',
'/20220421_154048_iOS.jpg',
'/20220421_154053_iOS.jpg',
'/20220421_154058_iOS.jpg',
'/20220421_154103_iOS.jpg',
'/20220421_154108_iOS.jpg',
'/20220421_154113_iOS.jpg',
'/20220421_154118_iOS.jpg',
'/20220421_154123_iOS.jpg',
'/20220421_154128_iOS.jpg',
'/20220421_154133_iOS.jpg',
'/20220421_154138_iOS.jpg'

  ];

  return (
    <section className="min-h-screen bg-[--bg] text-[--text] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <p className="text-[--muted] text-center mb-12">
          A visual collection of moments, passions, and things that define me.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl glass hover:scale-[1.03] transition-transform">
              <img src={src} alt="" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/" className="btn btn-primary">← Back to Home</a>
        </div>
      </div>
    </section>
  );
}
