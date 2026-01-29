import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { animals } from '../data/animals';
import { weapons } from '../data/weapons';
import { maps } from '../data/maps';
import equipmentData from '../data/equipmentData';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Helper to slugify animal names
  const slug = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  // Build the search index
  const [searchIndex, setSearchIndex] = useState([]);

  useEffect(() => {
    const index = [];

    // Animals
    if (animals) {
        animals.forEach(a => {
        index.push({
            title: a.name,
            category: 'Animal',
            path: `/animals/${slug(a.name)}`
        });
        });
    }

    // Weapons
    if (weapons) {
        weapons.forEach(w => {
        index.push({
            title: w.name,
            category: 'Weapon',
            path: `/weapons/${w.id}`
        });
        });
    }

    // Maps
    if (maps) {
        maps.forEach(m => {
        index.push({
            title: m.name,
            category: 'Reserve',
            path: `/maps/${m.id}`
        });
        });
    }

    // Equipment (Recursive)
    const traverseEquipment = (items) => {
      items.forEach(item => {
        if (item.link) {
          index.push({
            title: item.name || item.category, // Fallback if name is missing
            category: 'Equipment',
            path: item.link
          });
        }
        if (item.subsections) {
          item.subsections.forEach(sub => {
             if (sub.link) {
                index.push({
                    title: sub.name || item.category,
                    category: 'Equipment',
                    path: sub.link
                });
             }
             if (sub.items) {
                traverseEquipment(sub.items);
             }
          });
        }
      });
    };
    if (equipmentData) {
        traverseEquipment(equipmentData);
    }

    // Add static pages
    const staticPages = [
        { title: 'Backpack', path: '/backpack' },
        { title: 'Binoculars', path: '/binoculars' },
        { title: 'Harvest Screen', path: '/harvest' },
        { title: 'Multiplayer', path: '/multiplayer' },
        { title: 'ATV', path: '/atv' },
        { title: 'Outposts', path: '/outposts' },
        { title: 'Tents', path: '/tents' },
        { title: 'Groundblinds', path: '/groundblinds' },
        { title: 'Layout Blinds', path: '/layout-blinds' },
        { title: 'Waterfowl Blinds', path: '/waterfowl-blinds' },
        { title: 'Treestands', path: '/hunting-structures' },
        { title: 'Tripod Stands', path: '/tripod-stands' },
        { title: 'Visibility', path: '/visibility' },
        { title: 'Missions', path: '/missions' },
        { title: 'Achievements', path: '/achievements' },
        { title: 'Rating', path: '/rating' },
        { title: 'Great Ones', path: '/rating/great-ones' },
        { title: 'Score', path: '/rating/score' },
        { title: 'TruScore', path: '/truscore' },
        { title: 'Experience', path: '/experience' },
        { title: 'Cash', path: '/cash' },
        { title: 'DLC', path: '/dlc' },
        { title: 'Need Zones', path: '/animals/need-zones' },
        { title: 'Integrity', path: '/animals/integrity' },
        { title: 'Wind', path: '/animals/wind' },
        // Outposts
        { title: 'Hirschfelden Outposts', path: '/outposts#hirschfelden' },
        { title: 'Layton Lake Outposts', path: '/outposts#layton' },
        { title: 'Medved-Taiga Outposts', path: '/outposts#medved' },
        { title: 'Vurhonga Savanna Outposts', path: '/outposts#vurhonga' },
        { title: 'Parque Fernando Outposts', path: '/outposts#parque' },
        { title: 'Yukon Valley Outposts', path: '/outposts#yukon' },
        { title: 'Cuatro Colinas Outposts', path: '/outposts#cuatro' },
        { title: 'Silver Ridge Peaks Outposts', path: '/outposts#silver' },
        { title: 'Te Awaroa Outposts', path: '/outposts#te-awaroa' },
        { title: 'New England Mountains Outposts', path: '/outposts#new-england' },
    ];
    
    staticPages.forEach(p => {
        index.push({
            title: p.title,
            category: 'Page',
            path: p.path
        });
    });

    setSearchIndex(index);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title && item.title.toLowerCase().includes(lowerQuery)
    ).slice(0, 10); // Limit to 10 results

    setResults(filtered);
  }, [query, searchIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto mb-6 z-50">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-slate-800 text-white border border-slate-600 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Search wiki..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <div className="absolute left-3 top-2.5 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute w-full bg-slate-800 border border-slate-600 rounded-lg mt-1 shadow-xl max-h-96 overflow-y-auto">
          {results.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-slate-700 cursor-pointer flex justify-between items-center border-b border-slate-700/50 last:border-0"
              onClick={() => handleSelect(item.path)}
            >
              <span className="text-white font-medium text-left">{item.title}</span>
              <span className="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded ml-2 whitespace-nowrap">{item.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
