export const consumables = [
  {
    id: 'doggy_biscuits',
    name: 'Doggy Biscuits',
    price: 4000,
    weight: 0.5,
    units: 25,
    description: "Give a dog a bone and treat your best friend to one of these tasty morsels. Once purchased, Doggy Biscuits are available from the interaction wheel. Using one increases your Bond with your dog, and treating it directly after it's successfully completed a task will boost your Bond even further. A small bone-shaped biscuit that increases the bond with your dog.",
    dlc: true, // Assuming it requires the Bloodhound DLC, usually dog stuff does.
    dlcName: 'All dog DLCs',
    images: [],
    metadata: { source: 'wiki' }
  },
  {
    id: 'first_aid_kit',
    name: 'First Aid Kit',
    price: 1500,
    weight: 0.5,
    units: 10,
    description: "Tired of dragging yourself to the nearest outpost after every vicious animal attack? Don't let massive bleeding ruin your day; use a First Aid Kit to stop the bleeding before it's to late! Guaranteed to work against even the most rabid wounds, including those inflicted by moose, bears, wild boars and coyotes. The First Aid Kit can be used to regain health without sleeping at an Outpost.",
    dlc: false,
    images: [],
    metadata: { source: 'wiki' }
  },
  {
    id: 'scent_eliminator',
    name: 'Scent Eliminator',
    price: 3000,
    weight: 0.5,
    units: 10,
    duration: '120 minutes',
    level: 23,
    description: "Mask your odor to get even closer to trophy animals before detection. Each use lasts 120 in-game minutes. Scent Eliminator is a handheld spray, used to mask the natural human smell from wildlife. It is used to prevent animals from smelling hunters and fleeing. It has a limited time of effect. While it doesn't provide perfect smell cover, it lowers animal's smell detection radius by a significant number.",
    dlc: false,
    images: [],
    metadata: { source: 'wiki' }
  }
];
