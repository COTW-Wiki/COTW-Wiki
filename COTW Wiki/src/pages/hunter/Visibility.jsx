import React from 'react';
import { Link } from 'react-router-dom';
import visibilityImg from '../../assets/Visibility.webp';

export default function Visibility() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Visibility</h1>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 bg-white rounded-lg shadow p-6 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Visibility represents how noticeable the player is in his surroundings. This is indicated by the visibility
            meter in the lower righthand corner of the HUD. Moving around and being out in the open makes the player more
            visible to animals, while standing still, taking a lower stance or hiding in foliage makes the player less
            visible.
          </p>

          <p className="mb-4">
            Different animals have varying levels eyesight. This means that some animals may see you more easily compared
            to others. For example, <Link to="/animals/Moose" state={{ from: '/visibility' }} className="text-green-800 hover:underline font-medium">Moose</Link> have relatively poor eyesight compared to <Link to="/animals/Elk" state={{ from: '/visibility' }} className="text-green-800 hover:underline font-medium">Elk</Link> or <Link to="/animals/Red-Deer" state={{ from: '/visibility' }} className="text-green-800 hover:underline font-medium">Red Deer</Link>.
          </p>

          <p className="mb-4">
            The icon between your heart rate monitor and noise level indicators is how visible you are to animals. Things
            like running, moving around in an upright position, being under cover and being in their line of sight all
            affect it; the following symbols are used, from least visible to most:
          </p>

          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong className="text-gray-900">Short, dim dash:</strong> You are almost entirely hidden from view; animals can still see you if they get close enough.</li>
            <li><strong className="text-gray-900">Long, bright dash:</strong> You are very well hidden from view; animals can see you from a further distance than the short, dim dash, but they will be hard-pressed to see you.</li>
            <li><strong className="text-gray-900">Long, bright dash with half-circle underneath:</strong> You are slightly hidden from view; animals will have an easier time spotting you than the previous two levels, but for medium-range hunting this level of visibility is not a liability.</li>
            <li><strong className="text-gray-900">Oval:</strong> You are quite visible to animals; hunting at this level of visibility is not advised unless your target is quite a distance away, and expect to be seen even then.</li>
            <li><strong className="text-gray-900">Full circle:</strong> You are completely visible even from long distances; standing up and running will put you at this level of visibility, and it is not advised to be at this level when actively hunting animals.</li>
          </ul>

          <p className="mb-4">
            Brush can affect your visibility level as well, with bushes and small trees making you less visible to your prey.
            When calling animals to me, I tend to hunker up underneath the nearest small tree or large bush to keep my
            visibility as low as possible to avoid being seen.
          </p>

          <p>
            You are never 100% invisible; animals can see you if they get close enough, regardless of whether you're moving or not.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="flex-shrink-0 flex flex-col gap-2">
           <h2 className="text-xl font-bold text-green-800">Visibility</h2>
           <img 
             src={visibilityImg} 
             alt="Visibility Meter HUD" 
             style={{ width: '268.4px', height: '277.41px' }}
             className="rounded-lg shadow-md border border-gray-200 object-cover" 
           />
        </div>

      </div>
    </div>
  );
}
