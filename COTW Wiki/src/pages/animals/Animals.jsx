import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animals } from '../../data/animals';
import AnimalsTable from '../../components/AnimalsTable';
import '../../styles/wiki.css'; // Global CSS

// Placeholder image for the infobox - using WeaponsImage as a placeholder 
// or you can remove the image part if you only want text. 
// I will assume we might want a generic image or just the text box.
// For now, I'll stick to the text-based intro + the table structure.

export default function AnimalsListPage() {
    const [search, setSearch] = useState('');
    const [reserveFilter, setReserveFilter] = useState('');
    const [tocVisible, setTocVisible] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Filter logic is likely inside AnimalsTable or handled here if AnimalsTable accepts props.
    // The original code passed nothing to AnimalsTable, but calculated 'filteredAnimals' locally.
    // I will assume AnimalsTable handles its own data or the original code was incomplete in the snippet provided regarding passing props.
    // *Correction*: The provided snippet calculates `filteredAnimals` but doesn't pass it to `<AnimalsTable />`. 
    // I will keep the filter logic visually but note that `<AnimalsTable />` might need to accept these props to work.
    // For this refactor, I will focus on the UI layout.

    // Filter Logic Calculation
    const filteredAnimals = animals.filter(
        (animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase()) &&
            (!reserveFilter || (animal.spawnZones || []).some((z) => z.toLowerCase().includes(reserveFilter.toLowerCase())))
    );

    return (
        <div className="wiki-page">
            {/* 1. UNBIND DEFAULT WIDTH: 
               We set maxWidth to 100% here so the page container can stretch to the edges of the screen.
            */}
            <div className="wiki-inner" style={{ maxWidth: '100%', paddingRight: '20px' }}>
                
                {/* PAGE HEADER */}
                <div className="mb-10" style={{ maxWidth: '1200px' }}>
                    <h1 className="wiki-header">Animal Encyclopedia</h1>
                </div>

                <div className="wiki-layout">
                    {/* --- SIDEBAR: TABLE OF CONTENTS --- */}
                    <aside className="wiki-sidebar" style={{ background: 'transparent', border: 'none' }}>
                        <div className="wiki-toc-panel">
                            <div className="wiki-toc-panel-header">
                                <span className="wiki-toc-panel-title">🔢 Contents</span>
                                <span className="wiki-toc-panel-toggle" onClick={() => setTocVisible(!tocVisible)}>
                                    [{tocVisible ? 'hide' : 'show'}]
                                </span>
                            </div>
                            {tocVisible && (
                                <ul className="wiki-list-plain">
                                    <li><a href="#intro" onClick={(e) => scrollTo(e, 'intro')} className="wiki-link">1. Introduction</a></li>
                                    <li><a href="#list" onClick={(e) => scrollTo(e, 'list')} className="wiki-link">2. Animals List</a></li>
                                    <li><a href="#multiple-reserves" onClick={(e) => scrollTo(e, 'multiple-reserves')} className="wiki-link">3. Species in Multiple Reserves</a></li>
                                </ul>
                            )}
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT AREA --- */}
                    <main className="wiki-main" style={{ minWidth: 0, width: '100%' }}>
                        
                        {/* 1. INTRO SECTION */}
                        {/* 2. CONSTRAIN TEXT: 
                           We wrap the text content in a div with maxWidth: '1200px' so it doesn't 
                           stretch uncomfortably wide, keeping it readable.
                        */}
                        <div style={{ maxWidth: '1200px' }}>
                            <section id="intro" className="mb-12">
                                {/* Infobox / Intro Block */}
                                <div className="wiki-p-mb text-[var(--wiki-text)] leading-relaxed">
                                    <p className="mb-4">
                                        <strong>Animals</strong> are the primary target for hunters in the game.
                                    </p>
                                    <p className="mb-4">
                                        In the game there are 112 different animals that can be hunted and harvested by the player.
                                        With new reserve releases, the number continues to grow. Each reserve contains a varying number of
                                        new and recurring animals. While most species are unique, sometimes the looks are reused with a
                                        different name, such as caribou and reindeer.
                                    </p>
                                    <p className="mb-4">
                                        You may click on the class chart below for more detail about each animal. You may also click here for
                                        some in-game and real life picture comparisons.
                                    </p>
                                    <p>
                                        Every animal has a class rating associated with it, and so does every{' '}
                                        <Link to="/weapons/ammo" className="wiki-link">ammunition</Link>. Ammunition's recommended class
                                        should encompass an animal's class rating for an effective kill. If it is too low, it will be
                                        difficult to kill the animal; if it is too high, you will lose{' '}
                                        <Link to="/animals/integrity" className="wiki-link">Integrity</Link> bonus on the{' '}
                                        <Link to="/harvest" className="wiki-link">Harvest Screen</Link>.
                                    </p>
                                </div>
                            </section>

                            <h2 className="wiki-h2" id="list">2. Animals List</h2>

                            {/* Filters */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
                                <input
                                    type="text"
                                    placeholder="Search animal..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="border border-[var(--wiki-border)] bg-[var(--wiki-bg-sidebar)] text-[var(--wiki-text)] rounded-lg px-4 py-2 mb-3 sm:mb-0 focus:ring-2 focus:ring-[var(--wiki-accent-gold)] outline-none w-full sm:w-1/2 placeholder-gray-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Filter by reserve..."
                                    value={reserveFilter}
                                    onChange={(e) => setReserveFilter(e.target.value)}
                                    className="border border-[var(--wiki-border)] bg-[var(--wiki-bg-sidebar)] text-[var(--wiki-text)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--wiki-accent-gold)] outline-none w-full sm:w-1/2 placeholder-gray-500"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* 3. ANIMALS TABLE (WIDE) */}
            <section id="animals-by-class" className="wiki-fullbleed mb-24">
                <div className="w-full overflow-x-auto">
                    <AnimalsTable animals={filteredAnimals} containerClassName="w-full px-0" />
                </div>
            </section>

            {/* 4. MULTIPLE RESERVES TABLE SECTION */}
            <div className="wiki-inner" style={{ maxWidth: '100%', paddingRight: '20px' }}>
                <section id="multiple-reserves" className="mb-24 w-full">
                    <div style={{ maxWidth: '1200px' }}>
                        <h2 className="wiki-h2">3. Animals Species in Multiple Reserves</h2>
                    </div>
                    
                    <div className="wiki-table-container mt-6 w-full">
                        <table className="wiki-table w-full">
                            <thead>
                                <tr className="bg-[var(--wiki-bg-sidebar-header)] text-white">
                                    <th className="wiki-th">Animal</th>
                                    <th className="wiki-th">Number of Reserves</th>
                                    <th className="wiki-th">Reserve</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Blackbuck</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Parque Fernando, Sundarpatan</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Black Grouse</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Salzwiesen Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Bobwhite Quail</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Mississippi Acres, New England Mountains</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Collared Peccary</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Rancho del Arroyo, Parque Fernando</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Eastern Cottontail Rabbit</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Mississippi Acres, New England Mountains</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Eastern Wild Turkey</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Mississippi Acres, New England Mountains</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Eurasian Brown Bear</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Medved-Taiga National Park, Revontuli Coast</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Eurasian Lynx</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Medved-Taiga National Park, Revontuli Coast</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Eurasian Teal</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Salzwiesen Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Feral Goat</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Te Arawoa, Emerald Coast</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Feral Pig</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Te Arawoa, Emerald Coast</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Gray Fox</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Mississippi Acres, New England Mountains</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Green Winged Teal</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Mississippi Acres, New England Mountains</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Plains Bison</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Yukon Valley, Silver Ridge Peaks</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Raccoon Dog</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Salzwiesen Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Roe Deer</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Hirschfelden, Cuatro Colinas</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Tufted Duck</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Salzwiesen Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Tundra Bean Goose</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Salzwiesen Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Water Buffalo</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Parque Fernando, Sundarpatan</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Western Capercaillie</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Revontuli Coast, Medved-Taiga National Park</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Himalayan Tahr</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Sundarpatan, Te Awaroa</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Mountain Goat</td>
                                    <td className="wiki-td text-center">2</td>
                                    <td className="wiki-td">Silver Ridge Peaks, Askiy Ridge</td>
                                </tr>
                                <tr className="hover:bg-[rgba(255,255,255,0.05)]">
                                    <td className="wiki-td">Unique Animals</td>
                                    <td className="wiki-td text-center">1</td>
                                    <td className="wiki-td">65 species</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}   