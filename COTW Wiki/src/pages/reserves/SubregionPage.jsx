import { useParams, Link } from 'react-router-dom';
import { subregions } from '../../data/subregions';
import { useState } from 'react';
import LoadoutsPage from './LoadoutsPage';
import HotzonesPage from './HotzonesPage';
import InteractiveMap from '../../components/InteractiveMap';

export default function SubregionPage() {
  const { regionId, subregionId } = useParams();
  const subregion = subregions.find(
    (s) => s.id === subregionId && s.regionId === regionId
  );
  const [activeTab, setActiveTab] = useState('overview');

  if (!subregion) return <div className="p-6">Subregion not found.</div>;

  return (
    <div className="p-6">
      {/* Back link */}
      <Link
        to={`/maps/${regionId}`}
        className="text-green-800 hover:underline mb-4 inline-block"
      >
        ← Back to {regionId.replace('-', ' ')}
      </Link>

      {/* Subregion title and image */}
      <h1 className="text-4xl font-bold mb-4 text-green-800">{subregion.name}</h1>
      <img
        src={subregion.image}
        alt={subregion.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {['overview', 'loadouts', 'hotzones'].map((tab) => (
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
            <p className="text-gray-700">{subregion.description}</p>
            <InteractiveMap regionId={regionId} subregionId={subregionId} />
          </div>
        )}

        {activeTab === 'loadouts' && (
          <LoadoutsPage regionId={regionId} subregionId={subregionId} />
        )}

        {activeTab === 'hotzones' && (
          <HotzonesPage regionId={regionId} subregionId={subregionId} />
        )}
      </div>
    </div>
  );
}