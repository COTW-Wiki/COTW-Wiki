import React, { useState } from 'react';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const footnoteCounters = {};

  const renderTextWithFootnotes = (text) => {
    if (typeof text !== 'string') return text;
    const regex = /\[(\d+)\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const num = match[1];
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      if (!footnoteCounters[num]) footnoteCounters[num] = 0;
      const refId = `ref-${num}-${footnoteCounters[num]}`;
      footnoteCounters[num]++;

      parts.push(
        <sup key={`${num}-${refId}`} id={refId}>
            <a 
                href={`#footnote-${num}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`footnote-${num}`);
                }}
                className="text-green-400 hover:underline cursor-pointer ml-0.5"
            >
                [{num}]
            </a>
        </sup>
      );
      
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  // Data for Rifle Section
  const rifles = [
    { name: "Ranger .243", score: "Default" },
    { name: ".223 Docent", score: "150" },
    { name: ".270 Huntsman", score: "450" },
    { name: ".270 Stradivarius [1]", score: "450" },
    { name: ".270 Warden", score: "0 [2]" },
    { name: "Whitlock Model 86", score: "1000" },
    { name: "7mm Regent Magnum", score: "1500" },
    { name: "7mm Empress Magnum", score: "0 [2]" },
    { name: "Coachmate Lever .45-70", score: "2800" },
    { name: "King 470DB [3]", score: "5700" },
  ];

  const rifleAmmo = [
    { name: ".243 Soft-Point Bullet", score: "Default" },
    { name: ".243 Polymer-Tip Bullet", score: "50" },
    { name: ".223 Soft-Point Bullet", score: "0 [4]" },
    { name: ".223 Polymer-Tip Bullet", score: "0 [4]" },
    { name: ".270 Soft-Point Bullet", score: "0 [4]" },
    { name: ".270 Polymer-Tip Bullet", score: "700" },
    { name: ".30-30 Hollow-Point Bullet", score: "1000" },
    { name: ".30-30 Soft-Point Round Nose Bullet", score: "1300" },
    { name: "7mm Mag. Soft-Point Bullet", score: "0 [4]" },
    { name: "7mm Mag. Polymer-Tip Bullet", score: "0 [4]" },
    { name: ".45-70 Hollow-Point Bullet", score: "0 [5]" },
    { name: ".45-70 Soft-Point Flat Nose Bullet", score: "0 [5]" },
    { name: ".470 Nitro Express Soft Point Bullet [3]", score: "5700" },
    { name: ".470 Nitro Express Full Metal Jacket Bullet [3]", score: "6500" },
  ];

  const rifleSights = [
    { name: "R234 for the Ranger .243", score: "100" },
    { name: "R223 for the .223 Docent", score: "250" },
    { name: "R270 for the .270 Huntsman", score: "850" },
    { name: "R30 for the Whitlock Model 86", score: "1150" },
    { name: "R7 for the 7mm Regent Magnum", score: "1900" },
    { name: "R4570 for the Coachmate Lever .45-70", score: "3100" },
    { name: "R338 for the Rangemaster 338", score: "4800" },
    { name: "Marksman Exakt Reflex Sight [3][6] for the King 470DB[3]", score: "6200" },
  ];

  const rifleScopes = [
    { name: "Ascent 1-4x24 Rifle Scope", score: "Default" },
    { name: "Hyperion 4-8x42 Rifle Scope", score: "550" },
    { name: "Helios 4-8x32 Rifle Scope", score: "2500" },
    { name: "Argus 8-16x50 Rifle Scope", score: "3900" },
  ];

  // Data for Handgun Section
  const handguns = [
    { name: "Focoso 357", score: "Default" },
    { name: ".44 Panther Magnum", score: "850" },
    { name: ".44 Wildcat Magnum", score: "0 [2]" },
    { name: "Rhino 454", score: "3100" },
    { name: "Sundberg 454 [7]", score: "0 [2]" },
  ];

  const handgunAmmo = [
    { name: ".357 Jacketed Hollow-Point Bullet", score: "Default" },
    { name: ".357 Flat Nose Hard-Cast Bullet", score: "450" },
    { name: ".44 Jacketed Hollow-Point Bullet", score: "0 [4]" },
    { name: ".44 Flat Nose Hard-Cast Bullet", score: "2500" },
    { name: ".454 Jacketed Hollow-Point Bullet", score: "0 [4]" },
    { name: ".454 Flat Nose Hard-Cast Bullet", score: "5300" },
  ];

  const handgunSights = [
    { name: "H357 for the Focoso 357", score: "100" },
    { name: "H44 for the .44 Panther Magnum", score: "1150" },
    { name: "H454 for the Rhino 454", score: "3900" },
    { name: "Red Raptor Reflex Sight [6][8]", score: "250" },
  ];

  const handgunScopes = [
    { name: "Goshawk Redeye 2-4x20 Handgun Scope", score: "1700" },
  ];

  // Data for Shotgun Section
  const shotguns = [
    { name: "Couso Model 1897", score: "Default" },
    { name: "Caversham Steward 12G", score: "1000" },
    { name: "Cacciatore 12G", score: "2200" },
    { name: "Nordin 20SA", score: "4235" },
    { name: "Strecker SxS 20G", score: "0 [2]" },
    { name: "Miller Model 1891", score: "5863" },
    { name: "Grelck Drilling Rifle [9]", score: "0 [2]" },
    { name: "Cullman .50 In-Line Muzzleloader [10]", score: "0 [2]" },
  ];

  const shotgunAmmo = [
    { name: "12 Gauge Buckshot", score: "Default" },
    { name: "12 Gauge Birdshot", score: "200" },
    { name: "12 Gauge Slug", score: "400" },
    { name: "20 Gauge Birdshot", score: "0 [2]" },
    { name: "20 Gauge Buckshot", score: "1333" },
    { name: "20 Gauge Slug", score: "2467" },
    { name: "16 Gauge Birdshot", score: "0 [4]" },
    { name: "16 Gauge Buckshot", score: "0 [4]" },
    { name: "16 Gauge Slug", score: "5863" },
    { name: ".50 Hollow Point Sabot [10]", score: "0 [4]" },
    { name: ".50 Round Ball [10]", score: "0 [4]" },
    { name: ".50 Minié Ball [10]", score: "0 [4]" },
  ];

  const shotgunSights = [
    { name: "Red Raptor Reflex Sight [6]", score: "250" },
    { name: "Meridian 1-4x20 Shotgun Scope", score: "1667" },
  ];

  // Data for Bow Section
  const bows = [
    { name: "Razorback Lite CB-60", score: "Default" },
    { name: "Bearclaw Lite CB-60", score: "Default" },
    { name: "Hawk Edge CB-70", score: "1600" },
    { name: "Koter CB-65 [11]", score: "0 [2]" },
    { name: "Houyi Recurve Bow [12]", score: "0 [2]" },
    { name: "Alexander Longbow", score: "0 [13]" },
    { name: "Crosspoint CB-165 [14]", score: "0 [2]" },
  ];

  const arrows = [
    { name: "300 Grain Arrow / Bolt", score: "Default" },
    { name: "420 Grain Arrow / Bolt", score: "350" },
    { name: "600 Grain Arrow / Bolt", score: "700" },
  ];

  const bowSights = [
    { name: "Swift-Mark 3 Bow Sight", score: "Default" },
    { name: "Swift-Mark 5 Bow Sight", score: "1000" },
    { name: "Brightsight Rangefinder Bow Sight [15]", score: "0 [2]" },
    { name: "Hawken 1-5x30 Crossbow Scope [14]", score: "0 [4]" },
  ];

  const renderTable = (title, data, itemHeader = "Item", id) => (
    <div className="mb-6" id={id}>
      <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-2">
         <h3 className="text-lg font-bold text-stone-100">{title}</h3>
         <a href="#" className="text-green-400 text-xs"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
      </div>
      <div className="bg-stone-800 border border-stone-700 text-sm md:text-base font-sans">
        <div className="grid grid-cols-12 gap-4 border-b-2 border-stone-700 p-3 font-bold text-stone-100 bg-stone-900">
          <div className="col-span-8">{itemHeader}</div>
          <div className="col-span-4">Required Score</div>
        </div>
        {data.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-4 border-b border-stone-700/50 p-3 items-center hover:bg-stone-700/10">
             <div className="col-span-8 text-green-400 hover:underline cursor-pointer">{renderTextWithFootnotes(item.name)}</div>
             <div className="col-span-4 text-stone-300 font-medium">{renderTextWithFootnotes(item.score)}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Score
          </h1>

          
        </header>

        {/* Intro Text */}
        <div className="mb-6 text-stone-300 font-sans text-[16px] leading-relaxed space-y-4">
            <p>
                <strong className="text-stone-100">Score</strong> is a parameter which reflects how proficient the player is with the respective <a href="#" className="text-green-400 hover:underline">weapon</a> class. Currently, there are 4 different weapon class scores: <em className="italic">Rifle score</em>, <em className="italic">Handgun score</em>, <em className="italic">Shotgun score</em> and <em className="italic">Bow score</em>. Score is increased by harvesting animals killed with a weapon of the respective class. How much score is gained is affected by the Quick Kill bonus, Integrity bonus and Consecutive harvests, where each bonus will provide 25 score when at 100% (see <a href="#" className="text-green-400 hover:underline">Integrity</a> & <a href="#" className="text-green-400 hover:underline">Harvest Screen</a>). Therefore, the obtained score can lie anywhere between 0 and 75.
            </p>
            <p>
                Several items in the <a href="#" className="text-green-400 hover:underline">shop</a> are locked until a certain class score is reached. Those items are detailed below. Other items, such as callers, don't have this requirement, but may have other requirements such as level or in game money.
            </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 inline-block bg-stone-800 border border-stone-700 p-2 min-w-[250px]">
            <div className="flex justify-between items-center border-b border-stone-700 pb-1 mb-2">
                <span className="font-bold text-stone-100 text-sm">Contents</span>
                <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-[#5aaaf7] text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
            </div>
            {isTocOpen && (
                <ol className="list-decimal list-inside text-stone-300 text-sm space-y-1 font-sans">
                    <li><span onClick={() => scrollToSection('rifle-score')} className="text-[#5aaaf7] hover:text-white cursor-pointer hover:underline">Rifle Score</span>
                        <ul className="list-none ml-4 text-[#5aaaf7] space-y-1">
                            <li><span onClick={() => scrollToSection('rifles')} className="hover:underline cursor-pointer">1.1 Rifles</span></li>
                            <li><span onClick={() => scrollToSection('rifle-ammunition')} className="hover:underline cursor-pointer">1.2 Rifle Ammunition</span></li>
                            <li><span onClick={() => scrollToSection('rifle-sights')} className="hover:underline cursor-pointer">1.3 Rifle Sights</span></li>
                            <li><span onClick={() => scrollToSection('rifle-scopes')} className="hover:underline cursor-pointer">1.4 Rifle Scopes</span></li>
                        </ul>
                    </li>
                    <li><span onClick={() => scrollToSection('handgun-score')} className="text-[#5aaaf7] hover:text-white cursor-pointer hover:underline">Handgun Score</span>
                        <ul className="list-none ml-4 text-[#5aaaf7] space-y-1">
                            <li><span onClick={() => scrollToSection('handguns')} className="hover:underline cursor-pointer">2.1 Handguns</span></li>
                            <li><span onClick={() => scrollToSection('handgun-ammunition')} className="hover:underline cursor-pointer">2.2 Handgun Ammunition</span></li>
                            <li><span onClick={() => scrollToSection('handgun-sights')} className="hover:underline cursor-pointer">2.3 Handgun Sights</span></li>
                            <li><span onClick={() => scrollToSection('handgun-scopes')} className="hover:underline cursor-pointer">2.4 Handgun Scopes</span></li>
                        </ul>
                    </li>
                    <li><span onClick={() => scrollToSection('shotgun-score')} className="text-[#5aaaf7] hover:text-white cursor-pointer hover:underline">Shotgun Score</span>
                        <ul className="list-none ml-4 text-[#5aaaf7] space-y-1">
                            <li><span onClick={() => scrollToSection('shotguns')} className="hover:underline cursor-pointer">3.1 Shotguns</span></li>
                            <li><span onClick={() => scrollToSection('shotgun-ammunition')} className="hover:underline cursor-pointer">3.2 Shotgun Ammunition</span></li>
                            <li><span onClick={() => scrollToSection('shotgun-sights')} className="hover:underline cursor-pointer">3.3 Shotgun Sights</span></li>
                        </ul>
                    </li>
                    <li><span onClick={() => scrollToSection('bow-score')} className="text-[#5aaaf7] hover:text-white cursor-pointer hover:underline">Bow Score</span>
                        <ul className="list-none ml-4 text-[#5aaaf7] space-y-1">
                            <li><span onClick={() => scrollToSection('bows')} className="hover:underline cursor-pointer">4.1 Bows</span></li>
                            <li><span onClick={() => scrollToSection('arrows')} className="hover:underline cursor-pointer">4.2 Arrows</span></li>
                            <li><span onClick={() => scrollToSection('bow-sights')} className="hover:underline cursor-pointer">4.3 Bow Sights</span></li>
                            <li className="list-none"><span onClick={() => scrollToSection('footnotes')} className="hover:underline cursor-pointer text-[#5aaaf7]">4.3.1. Footnotes</span></li>
                        </ul>
                    </li>
                </ol>
            )}
        </div>

        {/* 1. Rifle Score */}
        <div className="mb-12" id="rifle-score">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">1. Rifle Score</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            <p className="text-stone-300 text-[16px] mb-6">
                Rifle score can be increased by using any weapon that is a <a href="#" className="text-green-400 hover:underline">rifle class</a>.
            </p>

            {renderTable("1.1. Rifles", rifles, "Rifle", "rifles")}
            {renderTable("1.2. Rifle Ammunition", rifleAmmo, "Ammunition", "rifle-ammunition")}
            {renderTable("1.3. Rifle Sights", rifleSights, "Tru-Vision Tritium Sights Model", "rifle-sights")}
            {renderTable("1.4. Rifle Scopes", rifleScopes, "Scope", "rifle-scopes")}
        </div>

        {/* 2. Handgun Score */}
        <div className="mb-12" id="handgun-score">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">2. Handgun Score</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            <p className="text-stone-300 text-[16px] mb-6">
                Handgun score can be increased by using any weapon that is a <a href="#" className="text-green-400 hover:underline">handgun class</a>.
            </p>

            {renderTable("2.1. Handguns", handguns, "Handgun", "handguns")}
            {renderTable("2.2. Handgun Ammunition", handgunAmmo, "Ammunition", "handgun-ammunition")}
            {renderTable("2.3. Handgun Sights", handgunSights, "Tru-Vision Tritium Sights Model", "handgun-sights")}
            {renderTable("2.4. Handgun Scopes", handgunScopes, "Scope", "handgun-scopes")}
        </div>

        {/* 3. Shotgun Score */}
        <div className="mb-12" id="shotgun-score">
             <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">3. Shotgun Score</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            <p className="text-stone-300 text-[16px] mb-6">
                Shotgun score can be increased by using any weapon that is a <a href="#" className="text-green-400 hover:underline">shotgun class</a>.
            </p>

            {renderTable("3.1. Shotguns", shotguns, "Shotgun", "shotguns")}
            {renderTable("3.2. Shotgun Ammunition", shotgunAmmo, "Ammunition", "shotgun-ammunition")}
            {renderTable("3.3. Shotgun Sights", shotgunSights, "Tru-Vision Tritium Sights Model / Scope", "shotgun-sights")}
        </div>

        {/* 4. Bow Score */}
        <div className="mb-12" id="bow-score">
             <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">4. Bow Score</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
             <p className="text-stone-300 text-[16px] mb-6">
                Bow score can be increased by using any weapon that is a <a href="#" className="text-green-400 hover:underline">bow class</a>.
            </p>

            {renderTable("4.1. Bows", bows, "Bow", "bows")}
            {renderTable("4.2. Arrows", arrows, "Arrow / Bolt", "arrows")}
            {renderTable("4.3. Bow Sights", bowSights, "Sight / Scope", "bow-sights")}
        </div>

        {/* Footnotes Section */}
        <div className="mb-12" id="footnotes">
             <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">Footnotes</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            
            <div className="text-stone-300 text-[15px] space-y-4 ml-4">
                <ul className="list-disc list-outside mb-4">
                    <li>May be missing some paid DLC items</li>
                </ul>

                <ol className="list-decimal list-outside space-y-2 ml-4">
                   <li id="footnote-1">
                        <span onClick={() => scrollToSection('ref-1-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Locked, but 1 is in storage immediately
                   </li>
                   <li id="footnote-2">
                        <span className="text-[#5aaaf7] align-super text-xs">
                            <span onClick={() => scrollToSection('ref-2-0')} className="cursor-pointer hover:underline">↑</span>{' '}
                            <sup>
                                <span onClick={() => scrollToSection('ref-2-0')} className="cursor-pointer hover:underline">2.0</span>,{' '}
                                <span onClick={() => scrollToSection('ref-2-1')} className="cursor-pointer hover:underline">2.1</span>,{' '}
                                <span onClick={() => scrollToSection('ref-2-2')} className="cursor-pointer hover:underline">2.2</span>,{' '}
                                <span onClick={() => scrollToSection('ref-2-3')} className="cursor-pointer hover:underline">2.3</span>
                            </sup>
                        </span> Alternate version of a locked base weapon that is unlocked immediately
                   </li>
                   <li id="footnote-3">
                        <span className="text-[#5aaaf7] align-super text-xs">
                            <span onClick={() => scrollToSection('ref-3-0')} className="cursor-pointer hover:underline">↑</span>{' '}
                            <sup>
                                <span onClick={() => scrollToSection('ref-3-0')} className="cursor-pointer hover:underline">3.0</span>,{' '}
                                <span onClick={() => scrollToSection('ref-3-1')} className="cursor-pointer hover:underline">3.1</span>,{' '}
                                <span onClick={() => scrollToSection('ref-3-2')} className="cursor-pointer hover:underline">3.2</span>,{' '}
                                <span onClick={() => scrollToSection('ref-3-3')} className="cursor-pointer hover:underline">3.3</span>,{' '}
                                <span onClick={() => scrollToSection('ref-3-4')} className="cursor-pointer hover:underline">3.4</span>
                            </sup>
                        </span> Paid DLC
                   </li>
                   <li id="footnote-4">
                        <span className="text-[#5aaaf7] align-super text-xs">
                            <span onClick={() => scrollToSection('ref-4-0')} className="cursor-pointer hover:underline">↑</span>{' '}
                            <sup>
                                <span onClick={() => scrollToSection('ref-4-0')} className="cursor-pointer hover:underline">4.0</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-1')} className="cursor-pointer hover:underline">4.1</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-2')} className="cursor-pointer hover:underline">4.2</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-3')} className="cursor-pointer hover:underline">4.3</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-4')} className="cursor-pointer hover:underline">4.4</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-5')} className="cursor-pointer hover:underline">4.5</span>,{' '}
                                <span onClick={() => scrollToSection('ref-4-6')} className="cursor-pointer hover:underline">4.6</span>
                            </sup>
                        </span> Unlocked immediately because a weapon (that may be part of paid DLC) that uses it is unlocked immediately
                   </li>
                   <li id="footnote-5">
                        <span className="text-[#5aaaf7] align-super text-xs">
                            <span onClick={() => scrollToSection('ref-5-0')} className="cursor-pointer hover:underline">↑</span>{' '}
                            <sup>
                                <span onClick={() => scrollToSection('ref-5-0')} className="cursor-pointer hover:underline">5.0</span>,{' '}
                                <span onClick={() => scrollToSection('ref-5-1')} className="cursor-pointer hover:underline">5.1</span>
                            </sup>
                        </span> Unlocked immediately but is unusable until its weapon is unlocked
                   </li>
                   <li id="footnote-6">
                        <span className="text-[#5aaaf7] align-super text-xs">
                            <span onClick={() => scrollToSection('ref-6-0')} className="cursor-pointer hover:underline">↑</span>{' '}
                            <sup>
                                <span onClick={() => scrollToSection('ref-6-0')} className="cursor-pointer hover:underline">6.0</span>,{' '}
                                <span onClick={() => scrollToSection('ref-6-1')} className="cursor-pointer hover:underline">6.1</span>
                            </sup>
                        </span> This is a reflex sight, not a "tritium" sight like the others in the category
                   </li>
                   <li id="footnote-7">
                        <span onClick={() => scrollToSection('ref-7-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Free alternate version of a base weapon
                   </li>
                   <li id="footnote-8">
                        <span onClick={() => scrollToSection('ref-8-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Although this is in the handgun section, it can be applied to most weapons
                   </li>
                   <li id="footnote-9">
                        <span onClick={() => scrollToSection('ref-9-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-10">
                        <span onClick={() => scrollToSection('ref-10-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-11">
                        <span onClick={() => scrollToSection('ref-11-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-12">
                        <span onClick={() => scrollToSection('ref-12-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-13">
                        <span onClick={() => scrollToSection('ref-13-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-14">
                        <span onClick={() => scrollToSection('ref-14-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                   <li id="footnote-15">
                        <span onClick={() => scrollToSection('ref-15-0')} className="text-[#5aaaf7] align-super text-xs cursor-pointer hover:underline">↑</span> Paid DLC
                   </li>
                </ol>
            </div>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}