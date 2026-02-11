import React from 'react';
import { Link } from 'react-router-dom';

export default function ConceptTable() {
  const generalColumn = ["Rating", "Integrity", "Visibility", "Achievements", "Wind", "Outposts", "Lookout Points", "Hunting Structures", "Fur Types (all animals)", "Map", "Hunt Club", "Points of Interest", "Landmarks", "Whistling", "Hunting Lodge", "Multi-Mounts", "TruRACS"];
  const trackingColumn = ["Need Zones", "Tracks & Tracking", "Calls", "Spotting", "Noise", "Scent", "Heart Rate", "Harvest Screen", "Animal Behaviour", "Hunting Pressure"];
  const progressColumn = ["Experience Points", "Skills", "Perks", "Score", "Cash", "Collectibles"];

  const linkMapping = {
    "Rating": "/rating", "Integrity": "/animals/integrity", "Visibility": "/visibility", "Achievements": "/achievements", "Wind": "/animals/wind", "Outposts": "/outposts", "Lookout Points": "/lookout-points", "Hunting Structures": "/hunting-structures", "Fur Types (all animals)": "/animals/fur-types", "Map": "/map-concept", "Hunt Club": "/hunt-club", "Points of Interest": "/points-of-interest", "Landmarks": "/landmarks", "Whistling": "/whistling", "Hunting Lodge": "/hunting-lodge", "Multi-Mounts": "/multi-mounts", "TruRACS": "/truscore", "Need Zones": "/animals/need-zones", "Tracks & Tracking": "/animals/tracks", "Calls": "/animals/calls", "Spotting": "/animals/spotting", "Noise": "/animals/noise", "Scent": "/animals/scent", "Heart Rate": "/animals/heart-rate", "Harvest Screen": "/harvest", "Animal Behaviour": "/animals/behaviour", "Hunting Pressure": "/animals/hunting-pressure", "Experience Points": "/experience", "Skills": "/skills", "Perks": "/perks", "Score": "/rating/score", "Cash": "/cash", "Collectibles": "/collectibles",
  };

  const maxRows = Math.max(generalColumn.length, trackingColumn.length, progressColumn.length);
  const tableRows = Array.from({ length: maxRows }, (_, i) => ({
    general: generalColumn[i] || null,
    tracking: trackingColumn[i] || null,
    progress: progressColumn[i] || null,
  }));

  const renderCell = (text) => {
    if (!text) return null;
    const link = linkMapping[text];
    return link ? <Link to={link} className="wiki-link block">{text}</Link> : <span className="text-gray-500">{text}</span>;
  };

  return (
    <div className="w-full mt-12">
      <h2 className="wiki-section-title">Concepts</h2>
      <div className="wiki-table-container">
        <table className="wiki-table">
          <thead>
            <tr>
              <th className="wiki-th w-1/3">General</th>
              <th className="wiki-th w-1/3">Tracking</th>
              <th className="wiki-th w-1/3">Progress</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td className="wiki-td">{renderCell(row.general)}</td>
                <td className="wiki-td">{renderCell(row.tracking)}</td>
                <td className="wiki-td">{renderCell(row.progress)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}