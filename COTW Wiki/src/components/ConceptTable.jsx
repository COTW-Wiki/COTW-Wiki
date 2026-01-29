import React from 'react';
import { Link } from 'react-router-dom';

export default function ConceptsPage() {
  
  // --- DATA ---
  const generalColumn = [
    "Rating", "Integrity", "Visibility", "Achievements", "Wind", 
    "Outposts", "Lookout Points", "Hunting Structures", "Fur Types (all animals)", 
    "Map", "Hunt Club", "Points of Interest", "Landmarks", "Whistling",
    "Hunting Lodge", "Multi-Mounts", "TruRACS"
  ];

  const trackingColumn = [
    "Need Zones", "Tracks & Tracking", "Calls", "Spotting", "Noise", 
    "Scent", "Heart Rate", "Harvest Screen", "Animal Behaviour", "Hunting Pressure"
  ];

  const progressColumn = [
    "Experience Points", "Skills", "Perks", "Score", "Cash", "Collectibles"
  ];

  const linkMapping = {
    "Rating": "/rating",
    "Integrity": "/animals/integrity",
    "Visibility": "/visibility",
    "Achievements": "/achievements",
    "Wind": "/animals/wind",
    "Outposts": "/outposts",
    "Lookout Points": "/lookout-points",
    "Hunting Structures": "/hunting-structures",
    "Fur Types (all animals)": "/animals/fur-types",
    "Map": "/map-concept",
    "Hunt Club": "/hunt-club",
    "Points of Interest": "/points-of-interest",
    "Landmarks": "/landmarks",
    "Whistling": "/whistling",
    "Hunting Lodge": "/hunting-lodge",
    "Multi-Mounts": "/multi-mounts",
    "TruRACS": "/truscore",
    "Need Zones": "/animals/need-zones",
    "Tracks & Tracking": "/animals/tracks",
    "Calls": "/animals/calls",
    "Spotting": "/animals/spotting",
    "Noise": "/animals/noise",
    "Scent": "/animals/scent",
    "Heart Rate": "/animals/heart-rate",
    "Harvest Screen": "/harvest",
    "Animal Behaviour": "/animals/behaviour",
    "Hunting Pressure": "/animals/hunting-pressure",
    "Experience Points": "/experience",
    "Skills": "/skills",
    "Perks": "/perks",
    "Score": "/rating/score",
    "Cash": "/cash",
    "Collectibles": "/collectibles",
  };

  // Helper to determine the maximum rows needed
  const maxRows = Math.max(generalColumn.length, trackingColumn.length, progressColumn.length);

  // Create rows array
  const tableRows = Array.from({ length: maxRows }, (_, i) => ({
    general: generalColumn[i] || null,
    tracking: trackingColumn[i] || null,
    progress: progressColumn[i] || null,
  }));

  const renderCell = (text) => {
    if (!text) return null;
    const link = linkMapping[text];
    if (link) {
      return (
        <Link to={link} className="hover:text-white hover:underline block">
          {text}
        </Link>
      );
    }
    return <span className="text-stone-400 block">{text}</span>;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Concepts</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           {/* Placeholder for header actions if needed, keeping layout clean */}
        </div>
      </div>

      {/* --- CONCEPTS TABLE --- */}
      <div className="border border-stone-700 rounded-sm overflow-hidden bg-stone-800">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-green-900 text-white font-bold border-b border-stone-700 text-base">
              <th className="p-4 w-1/3 border-r border-stone-700">General</th>
              <th className="p-4 w-1/3 border-r border-stone-700">Tracking</th>
              <th className="p-4 w-1/3">Progress</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-stone-700/50 hover:bg-green-900/20 transition-colors"
              >
                {/* General Column */}
                <td className="p-4 border-r border-stone-700/50 text-green-400 font-medium">
                  {renderCell(row.general)}
                </td>

                {/* Tracking Column */}
                <td className="p-4 border-r border-stone-700/50 text-green-400 font-medium">
                  {renderCell(row.tracking)}
                </td>

                {/* Progress Column */}
                <td className="p-4 text-green-400 font-medium">
                  {renderCell(row.progress)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}