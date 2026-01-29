export const tents = [
  {
    id: 'elite_2_tent',
    name: 'Elite 2 Tent',
    description: "Two-man tent suitable for all weather conditions. The patented high-tech Mosquito Wall 2.0, tested under severe conditions in northern Scandinavia, is proven to decrease user blood loss by almost 5% compared to its previous generation. This award-winning product also includes a large storage container that'll turn your mobile home into a fully functional outpost. Notable features include the ability to be deployed almost anywhere, serving as a fast travel, revival and resting area (camping fees apply) and store and storage access.",
    features: ['Fast Travel', 'Resting', 'Store Access', 'Storage Access'],
    dlc: true,
    dlcName: 'Tents & Groundblinds DLC',
    price: 16000,
    weight: 6,
    limitPerReserve: 16,
    colors: ['Blue', 'Camo', 'Green', 'Pink', 'White'],
    notes: [
      'Tents can disappear in some cases after fast travel due to map/interior handling; a common workaround is to fast travel first to a nearby permanent outpost, then to the tent.',
      'Using fast travel when animals are very close to the tent can spook them (approx 200m).'
    ],
    images: [],
    metadata: { source: 'Elite2Tent.jsx' }
  }
];
