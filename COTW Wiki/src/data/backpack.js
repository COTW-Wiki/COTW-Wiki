import TrailscoutEvergreen from '../assets/TrailscoutMiniDaypackEvergreen.webp';
import TrailscoutGlacier from '../assets/TrailscoutMiniDaypackGlacier.webp';
import TrailscoutBlaze from '../assets/TrailscoutMiniDaypackBlaze.webp';

import ExoEvergreen from '../assets/Exoadventurer32LightDaypackEvergreen.webp';
import ExoGlacier from '../assets/Exoadventurer32LightDaypackGlacier.webp';
import ExoBlaze from '../assets/Exoadventurer32LightDaypackBlaze.webp';

import SummitEvergreen from '../assets/SummitExplorer6000PackEvergreen.webp';
import SummitGlacier from '../assets/SummitExplorer6000PackGlacier.webp';
import SummitBlaze from '../assets/SummitExplorer6000PackBlaze.webp';

const backpackData = [
  {
    id: 'trailscout',
    name: 'Trailscout Mini Daypack',
    subtitle: 'Small Backpacks',
    description: "Need some space for your expeditions? Look no further than this lightweight hunting trackpack with plenty of room for additional hunting equipment.",
    variants: [
      { color: 'Evergreen', requirement: 'Unlocked at the beginning', img: TrailscoutEvergreen },
      { color: 'Glacier', requirement: 'Requirement: Level 2', img: TrailscoutGlacier },
      { color: 'Blaze', requirement: 'Requirement: Level 3', img: TrailscoutBlaze }
    ],
    stats: {
      value: "5000",
      weight: "0",
      capacity: "3",
      noise: "3",
      visibility: "1"
    }
  },
  {
    id: 'exoadventurer',
    name: 'Exoadventurer 32 Light Daypack',
    subtitle: 'Medium Backpacks',
    description: "Need even more space for your expeditions? This medium-sized hunting backpack gives you a large capacity boost for more equipment and ammunition.",
    variants: [
      { color: 'Evergreen', requirement: 'Unlocked at the beginning', img: ExoEvergreen },
      { color: 'Glacier', requirement: 'Requirement: Level 14', img: ExoGlacier },
      { color: 'Blaze', requirement: 'Requirement: Level 20', img: ExoBlaze }
    ],
    stats: {
      value: "10000",
      weight: "0",
      capacity: "6",
      noise: "5",
      visibility: "3"
    }
  },
  {
    id: 'summit',
    name: 'Summit Explorer 6000 Pack',
    subtitle: 'Large Backpacks',
    description: "Need maximum space for your expeditions? You can't beat this large hunting backpack with plenty of room for all your equipment and ammunition. Why leave hunting gear behind when you can get it all in here?",
    variants: [
      { color: 'Evergreen', requirement: 'Unlocked at the beginning', img: SummitEvergreen },
      { color: 'Glacier', requirement: 'Requirement: Level 28', img: SummitGlacier },
      { color: 'Blaze', requirement: 'Requirement: Level 36', img: SummitBlaze }
    ],
    stats: {
      value: "20000",
      weight: "0",
      capacity: "9",
      noise: "7",
      visibility: "5"
    }
  }
];

export default backpackData;