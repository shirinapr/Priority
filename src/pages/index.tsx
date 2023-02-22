import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div
      className="grid place-items-center h-screen
     bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
      from-gray-900 to-gray-600"
    >
      <div className="border-2 border-slate-800 rounded-[24px] absolute top-6 bottom-6 left-6 right-6 grid place-items-center">
        <div
          className="text-[120px] animate-text font-thin
    bg-gradient-to-r from-gray-800 via-slate-900 to-slate-800 bg-clip-text
     text-transparent"
        >
          <h3>WELCOME</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
