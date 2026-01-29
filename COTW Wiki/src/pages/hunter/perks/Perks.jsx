import React from 'react';
import { Link } from 'react-router-dom';
import PerksImage from '../../../assets/Perks.webp';

export default function App() {
  const [selectedLetter, setSelectedLetter] = React.useState(null);

  const renderLink = (name) => {
    if (name === "Body Control") {
      return <Link to="/perks/body-control" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Boomstick") {
      return <Link to="/perks/boomstick" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Both Eyes Open") {
      return <Link to="/perks/both-eyes-open" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Breath Control") {
      return <Link to="/perks/breath-control" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Fast Shouldering") {
      return <Link to="/perks/fast-shouldering" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Focused Shot") {
      return <Link to="/perks/focused-shot" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Full Draw") {
      return <Link to="/perks/full-draw" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Increased Confidence") {
      return <Link to="/perks/increased-confidence" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Lightning Hands") {
      return <Link to="/perks/lightning-hands" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Like a Pro") {
      return <Link to="/perks/like-a-pro" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Move n' Shoot") {
      return <Link to="/perks/move-n-shoot" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Muscle Memory") {
      return <Link to="/perks/muscle-memory" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Pumping Iron") {
      return <Link to="/perks/pumping-iron" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Quick Draw") {
      return <Link to="/perks/quick-draw" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Quick Feet") {
      return <Link to="/perks/quick-feet" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Ranger") {
      return <Link to="/perks/ranger" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Recoil Management") {
      return <Link to="/perks/recoil-management" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Recycle") {
      return <Link to="/perks/recycle" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Sprint & Load") {
      return <Link to="/perks/sprint-and-load" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Steady Hands") {
      return <Link to="/perks/steady-hands" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Survival Instinct") {
      return <Link to="/perks/survival-instinct" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Tracershot") {
      return <Link to="/perks/traceshot" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Windage") {
      return <Link to="/perks/windage" className="text-green-400 hover:underline">{name}</Link>;
    }
    if (name === "Zeroing") {
      return <Link to="/perks/zeroing" className="text-green-400 hover:underline">{name}</Link>;
    }
    return <a href="#" className="text-green-400 hover:underline">{name}</a>;
  };

  const perksTable = [
    { 
      tier: 0, 
      rifle: ["Muscle Memory"], 
      handgun: ["Sprint & Load"], 
      shotgun: ["Both Eyes Open"], 
      bow: ["Full Draw"] 
    },
    { 
      tier: 1, 
      rifle: ["Breath Control", "Steady Hands"], 
      handgun: ["Quick Feet", "Survival Instinct"], 
      shotgun: ["Fast Shouldering", "Body Control"], 
      bow: ["Move n' Shoot"] 
    },
    { 
      tier: 2, 
      rifle: ["Zeroing"], 
      handgun: ["Ranger"], 
      shotgun: ["Tracershot", "Recoil Management"], 
      bow: ["Increased Confidence", "Recycle"] 
    },
    { 
      tier: 3, 
      rifle: ["Focused Shot", "Windage"], 
      handgun: ["Lightning Hands", "Quick Draw"], 
      shotgun: ["Boomstick"], 
      bow: ["Like a Pro", "Pumping Iron"] 
    },
  ];

  const allItems = {
    B: ["Body Control", "Boomstick", "Both Eyes Open", "Breath Control"],
    F: ["Fast Shouldering", "Focused Shot", "Full Draw"],
    I: ["Increased Confidence"],
    L: ["Lightning Hands", "Like a Pro"],
    M: ["Move n' Shoot", "Muscle Memory"],
    P: ["Pumping Iron"],
    Q: ["Quick Draw", "Quick Feet"],
    R: ["Ranger", "Recoil Management", "Recycle"],
    S: ["Sprint & Load", "Steady Hands", "Survival Instinct"],
    T: ["Tracershot"],
    W: ["Windage"],
    Z: ["Zeroing"]
  };

  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Perk
          </h1>
          <p className="text-sm text-stone-400 font-sans absolute top-20 md:static md:ml-4">Category page</p>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-80 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 tracking-wide">
                    Perks
                </div>
                
                {/* Image Area */}
                <div className="relative group bg-stone-900 flex justify-center">
                    <img 
                        src={PerksImage} 
                        alt="Perks Menu Interface" 
                        className="w-[268.4px] h-[276.43px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
                    <strong className="text-stone-100">Perks</strong> represent different weapon-related abilities that provide new opportunities or make certain aspects of using weapons easier. Perks can be purchased with perk points.
                </p>
                <p>
                    Perks are structured in trees and in order to unlock a perk, at first an adjoining node in the tree must be unlocked. They come in four different categories, one for each weapon type: rifles, handguns, shotguns and archery.
                </p>
            </div>

            {/* Available Perks Section */}
            <div className="clear-both mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Available Perks</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-stone-800 border border-stone-700">
                        <thead>
                            <tr className="bg-stone-900 border-b-2 border-stone-700 text-stone-100">
                                <th className="py-3 pl-3 pr-[27px] w-16">Tier</th>
                                <th className="p-3 w-1/4">Rifle</th>
                                <th className="p-3 w-1/4">Handgun</th>
                                <th className="p-3 w-1/4">Shotgun</th>
                                <th className="p-3 w-1/4">Bow</th>
                            </tr>
                        </thead>
                        <tbody className="text-stone-300 divide-y divide-stone-700/50">
                            {perksTable.map((row) => (
                                <tr key={row.tier} className="hover:bg-stone-700/10 align-top">
                                    <td className="py-3 pl-3 pr-[27px] font-bold text-stone-100">{row.tier}</td>
                                    <td className="p-3 space-y-1">
                                        {row.rifle.map((perk, i) => (
                                            <div key={i}>{renderLink(perk)}</div>
                                        ))}
                                    </td>
                                    <td className="p-3 space-y-1">
                                        {row.handgun.map((perk, i) => (
                                            <div key={i}>{renderLink(perk)}</div>
                                        ))}
                                    </td>
                                    <td className="p-3 space-y-1">
                                        {row.shotgun.map((perk, i) => (
                                            <div key={i}>{renderLink(perk)}</div>
                                        ))}
                                    </td>
                                    <td className="p-3 space-y-1">
                                        {row.bow.map((perk, i) => (
                                            <div key={i}>{renderLink(perk)}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* All Items List */}
            <div className="mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-6">
                    <h2 className="text-xl font-bold text-stone-100">All items (24)</h2>
                </div>

                {/* Alphabet Bar */}
                <div className="flex flex-wrap gap-1 mb-8 text-[#3b82f6] font-bold text-sm tracking-widest justify-center md:justify-start items-center">
                    {['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'OTHER'].map((char, index, arr) => (
                        <React.Fragment key={char}>
                            <span 
                                onClick={() => setSelectedLetter(selectedLetter === char ? null : char)}
                                className={`cursor-pointer transition-colors ${selectedLetter === char ? 'text-stone-100' : 'text-[#3b82f6] hover:text-stone-100'}`}
                            >
                                {char}
                            </span>
                            {index < arr.length - 1 && <span className="text-[#3b82f6]">•</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-sans text-[15px]">
                    {Object.entries(allItems)
                        .filter(([letter]) => selectedLetter === null || letter === selectedLetter)
                        .map(([letter, items]) => (
                        <div key={letter} className="relative">
                            <h3 className="text-lg font-bold text-stone-100 border-b border-stone-700 pb-1 mb-2">{letter}</h3>
                            <ul className="space-y-3 pl-4">
                                {items.map((item, idx) => (
                                    <li key={idx}>
                                        {renderLink(item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}