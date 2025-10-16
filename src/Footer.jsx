import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Russell Walton. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="text-white/60 hover:text-white" href="#">Privacy</a>
          <a className="text-white/60 hover:text-white" href="#">Terms</a>
          <a className="text-white/60 hover:text-white" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
