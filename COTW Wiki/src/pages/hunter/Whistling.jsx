import React from 'react';
import whistleImage from '../../assets/Whistle.webp';

export default function WhistlingPage() {
  return (
    <div className="min-h-screen text-stone-100 font-sans tracking-tight bg-stone-900">
      
      <div className="w-full p-6 md:p-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0 text-white">
            Whistling
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="flex flex-row items-start gap-8">
            
            {/* Left Column: Text */}
            <div className="text-stone-300 font-sans text-[16px] leading-relaxed" style={{ width: '595.58px', height: '147px' }}>
               <p className="mb-4">
                 <strong className="text-white font-bold">Whistling</strong> can be used to spook nearby animals. This is especially useful to hunt waterborne birds such as the <a href="#" className="text-green-400 hover:text-green-300 hover:underline">mallard</a> ethically. Whistling can be activated by pressing [X]/Left D-Button or on xbox by holding down The Right Bumper.
               </p>
            </div>

            {/* Right Column: Infobox Image Card */}
            <div className="w-auto shrink-0">
                <div className="bg-stone-800 border border-stone-700 shadow-xl">
                    {/* Card Title */}
                    <div className="bg-green-900 text-white text-center font-bold flex items-center justify-center border-b border-stone-700 font-sans tracking-wide" style={{ width: '268.4px', height: '46.5px' }}>
                        Whistling
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative group flex justify-center bg-black">
                        <img 
                            src={whistleImage} 
                            alt="Whistling" 
                            className="object-cover block opacity-90 hover:opacity-100 transition-opacity"
                            style={{ width: '268.4px', height: '277.65px' }}
                        />
                        {/* Gallery/Expand Icon overlay */}
                        <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}