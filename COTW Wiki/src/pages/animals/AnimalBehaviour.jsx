import React from 'react';
import AnimalAlerted from '../../assets/Animal_behaviour.webp';

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
            Animal Behaviour
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Animals Behaviour
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={AnimalAlerted} 
                        alt="Bear standing alerted" 
                        className="w-[268.4px] h-[276.91px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
                    Animals have different behaviours depending on what their current needs are and whether or not they have been alerted. Over the course of the day, they will seek out <a href="#" className="text-green-400 hover:underline">need zones</a> for resting, eating and drinking. They will revisit need zones daily, unless there is <a href="#" className="text-green-400 hover:underline">hunting pressure</a> in the area. If an animal starts to notice your presence, they will become alerted but not scare immediately. Only when they sense that you are near enough to pose a threat, they will start to run away. Fleeing animals will run until they feel safe and then return to their normal behaviour. They will, however, remain vigilant with heightened senses for a short period after having calmed down.
                </p>
                <p>
                    The current state of the animal behaviour can be <a href="#" className="text-green-400 hover:underline">spotted</a> with the skill <em className="italic text-green-400 cursor-pointer hover:underline">Sight Spotting</em>.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}