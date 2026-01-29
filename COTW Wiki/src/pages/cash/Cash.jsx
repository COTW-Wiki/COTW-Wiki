import React from 'react';
import CashImage from '../../assets/Cash.webp';

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
            Cash
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl font-sans" style={{ width: '270px' }}>
                {/* Infobox Title */}
                <div className="bg-stone-900 text-stone-100 text-center font-bold py-2 border-b border-stone-700 tracking-wide">
                    Cash
                </div>
                
                {/* Image Area */}
                <div className="relative group flex justify-center">
                    <img 
                        src={CashImage} 
                        alt="Cash Reward HUD" 
                        style={{ width: '268.4px', height: '277.93px' }}
                        className="object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p>
                    <strong className="text-stone-100">Cash</strong> is the in-game currency that is used to buy <a href="#" className="text-green-400 hover:underline">weapons</a> and <a href="#" className="text-green-400 hover:underline">equipment</a>. It can be earned by harvesting <a href="#" className="text-green-400 hover:underline">animals</a> or completing <a href="#" className="text-green-400 hover:underline">missions</a> and challenges. Certain factors come into play when determining the amount of money received for harvesting an animal. <a href="#" className="text-green-400 hover:underline">Integrity</a> and the animals <a href="#" className="text-green-400 hover:underline">rating</a> affect the amount of cash one may receive.
                </p>
            </div>

            {/* Earning Cash as a Beginner Section */}
            <div className="clear-both mb-8">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Earning Cash as a Beginner</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>
                
                <p className="text-stone-300 font-sans text-[16px] leading-relaxed">
                    The best way to earn cash in this game is to <a href="#" className="text-green-400 hover:underline">Canada Goose</a> hunt. For this you will need the <a href="#" className="text-green-400 hover:underline">Wild Goose Chase Gear DLC</a> to access goose decoys and a proper <a href="#" className="text-green-400 hover:underline">groundblind</a>. If you do not have this DLC, then you can go to a multiplayer server and hunt <a href="#" className="text-green-400 hover:underline">Pumas</a> or <a href="#" className="text-green-400 hover:underline">Mountain Lions</a>. They are a class 5 animal, so you can use the starter weapon, <a href="#" className="text-green-400 hover:underline">Ranger .243</a> preferably with <a href="#" className="text-green-400 hover:underline">.243 Polymer-Tip Bullet</a>. They each give between 1000-1700 cash per harvest if you pass the harvest check. <a href="#" className="text-green-400 hover:underline">Merriam Turkey</a> give 1000-1300 cash, and are easy and fun to hunt. Hunting <a href="#" className="text-green-400 hover:underline">Pronghorn</a> is a very good way because there are a lot of them and they calm down quickly after shooting, so you can easily kill many of them. It is best to shoot the highest ranking male and then finish the females.
                </p>
            </div>

            {/* Tips Section */}
            <div className="clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Tips</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                <ul className="list-disc list-inside text-stone-300 font-sans text-[16px] leading-relaxed space-y-2 ml-2">
                    <li>To get a lot of money, you need to hit the vital organs, not the head.</li>
                    <li>Use ammunition appropriate to the type of animal.</li>
                    <li>Males give more money than females.</li>
                    <li>Birds are easy to kill and are a good way to break out of the bottom.</li>
                    <li>The faster the animal dies, the better the score and more cash.</li>
                </ul>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}