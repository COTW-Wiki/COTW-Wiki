import React from 'react';
import { clothing } from '../../../data/clothing';

export default function PatagonianGauchoOutfit() {
  const item = clothing.find(c => c.id === 'patagonian_gaucho_outfit');

  if (!item) return <div>Item not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{item.name}</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4 text-gray-700">
        {item.generalInfo && <p className="mb-4 italic">{item.generalInfo}</p>}
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p>{item.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4 border-t pt-4">
          <div>
            <strong>Price:</strong> {item.price}
          </div>
          {item.dlc && (
            <div>
              <strong>DLC:</strong> {item.dlcName}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-600">Source: {item.metadata.source}</div>
    </div>
  );
}
