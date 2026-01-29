export const mapZones = [
  {
    regionId: 'layton-lake',
    subregionId: 'north-forest',
    zones: [
      { id: 'zone-a', name: 'Zone A', animals: ['White-tailed Deer', 'Elk'] },
      { id: 'zone-b', name: 'Zone B', animals: ['White-tailed Deer'] },
      { id: 'zone-c', name: 'Zone C', animals: ['Moose'] },
    ],
    description: 'Named hunting zones inside North Forest with typical animal lists and behaviors.',
    references: [],
    metadata: { createdAt: null, updatedAt: null, source: null },
  },
  {
    regionId: 'layton-lake',
    subregionId: 'south-river',
    zones: [
      { id: 'river-bank', name: 'River Bank', animals: ['Duck', 'Goose'] },
      { id: 'marsh', name: 'Marsh', animals: ['Duck'] },
    ],
    description: 'Zones along rivers and marshes, good for waterfowl and small mammals.',
    references: [],
    metadata: { createdAt: null, updatedAt: null, source: null },
  },
];
