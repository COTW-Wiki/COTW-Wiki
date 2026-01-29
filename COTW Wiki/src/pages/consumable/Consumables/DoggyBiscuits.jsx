import React from 'react';
import { Link } from 'react-router-dom';
import { consumables } from '../../../data/consumables';

export default function DoggyBiscuits() {
  const item = consumables.find(c => c.id === 'doggy_biscuits');

  if (!item) return <div>Item not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{item.name}</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4 text-gray-700">
        <p>{item.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <strong>Price:</strong> {item.price}
          </div>
          <div>
            <strong>Weight:</strong> {item.weight}
          </div>
          <div>
            <strong>Units:</strong> {item.units}
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
