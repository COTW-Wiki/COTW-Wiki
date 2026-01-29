import React from 'react';
import HeartRateImage from '../../assets/Heart_rate.webp';

export default function App() {
  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Heart Rate
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Heart Rate
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={HeartRateImage} 
                        alt="Heart Rate HUD" 
                        className="w-[268.4px] h-[277.93px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Gallery Icon overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    Whenever the player moves around quickly (via holding of [SHIFT] / clicking (L3)), the <strong className="text-white">heart rate</strong> will increase. If the player remains still or moves slowly, the heart rate will return to a normal level. The current heart rate is indicated by a dynamic icon in the lower righthand corner of the HUD.
                </p>
                <p>
                    An elevated heart rate will increase aim wobble (the standard movement of the iron cross). This aim wobble can temporarily be steadied via breath holding (via holding of [SHIFT] / clicking (L3)), but this will cause the heart rate to rise. At a certain point, the breath can no longer be hold and the steady aim will be lost.
                </p>
                <p>
                    Elevated heart rate will be indicated by red tinting and pulsation of the heart icon. The elevation level (and thus the aim wobble) will decrease to the normal level if the player moves slowly or stands still.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}