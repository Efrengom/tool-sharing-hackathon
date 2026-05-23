import { useState } from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Borrow tools from your neighbors
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Share what you have, borrow what you need. ToolShare connects your community so no one has to buy a tool they'll use once.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Browse Tools
          </button>
          <button className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            List a Tool
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 py-16 max-w-5xl mx-auto">
        {[
          { title: 'Find What You Need', desc: 'Search tools available in your neighborhood.' },
          { title: 'Easy Requests', desc: 'Request a tool and coordinate pickup in a few taps.' },
          { title: 'Share Your Own', desc: 'List tools you own and help your community.' },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      <section className="px-8 pb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Near You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['Power Drill', 'Circular Saw', 'Ladder (8 ft)', 'Pressure Washer', 'Tile Cutter', 'Lawn Mower'].map((tool) => (
            <div key={tool} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                No image
              </div>
              <h4 className="font-semibold text-gray-800">{tool}</h4>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit">
                Available
              </span>
              <button className="mt-auto px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Request
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
