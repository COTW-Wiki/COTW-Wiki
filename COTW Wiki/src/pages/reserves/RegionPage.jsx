import { useParams, Link } from 'react-router-dom';
import { maps } from '../../data/maps';
import { useState } from 'react';
import LoadoutsPage from './LoadoutsPage';
import HotzonesPage from './HotzonesPage';
import InteractiveMap from '../../components/InteractiveMap';

export default function RegionPage() {
  const { regionId } = useParams();
  const region = maps.find((m) => m.id === regionId);
  const [activeTab, setActiveTab] = useState('overview');

  if (!region) return <div className="p-6">Region not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-green-800">{region.name}</h1>
      <img
        src={region.image}
        alt={region.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {['overview', 'loadouts', 'hotzones', 'weapons'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 -mb-px font-medium border-b-2 ${
              activeTab === tab
                ? 'border-green-800 text-green-800'
                : 'border-transparent text-gray-600 hover:text-green-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <p className="text-gray-700">Overview content for {region.name}.</p>
            <InteractiveMap regionId={regionId} />
          </div>
        )}

        {activeTab === 'loadouts' && (
          <LoadoutsPage regionId={regionId} />
        )}

        {activeTab === 'hotzones' && (
          <HotzonesPage regionId={regionId} />
        )}

        {activeTab === 'weapons' && (
          <div>
            <p className="text-gray-700 mb-4">Weapons comparison content will go here.</p>
            <Link
              to="/weapons"
              className="inline-block bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Open Weapons Comparison
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
