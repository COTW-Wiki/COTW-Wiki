import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import merriamTurkeyIcon from '../../assets/MerriamTurkeyIcon.webp';
import pronghornIcon from '../../assets/PronghornIcon.webp';
import mountainGoatIcon from '../../assets/MountainGoatIcon.webp';
import rockyMountainBighornSheepIcon from '../../assets/RockyMountainBighornSheepIcon.webp';
import mountainLionIcon from '../../assets/MountainLionIcon.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import rockyMountainElkIcon from '../../assets/RockyMountainElkIcon.webp';
import plainsBisonIcon from '../../assets/PlainsBisonIcon.webp';

const SilverRidgePeaksHuntableAnimalsTable = () => {
  const data = {
    id: 'silver',
    name: "Silver Ridge Peaks Animals (9 total, 2 unique, 2 great ones)",
    animals: {
      1: [{ name: "Merriam Turkey", icon: merriamTurkeyIcon }],
      2: [],
      3: [{ name: "Pronghorn", icon: pronghornIcon }],
      4: [{ name: "Mountain Goat", icon: mountainGoatIcon }],
      5: [
        { name: "Rocky Mountain Bighorn Sheep", icon: rockyMountainBighornSheepIcon },
        { name: "Mountain Lion", icon: mountainLionIcon },
        { name: "Mule Deer", icon: muleDeerIcon }
      ],
      6: [],
      7: [{ name: "Black Bear", icon: blackBearIcon }, { name: "Rocky Mountain Elk", icon: rockyMountainElkIcon }],
      8: [],
      9: [{ name: "Plains Bison", icon: plainsBisonIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default SilverRidgePeaksHuntableAnimalsTable;