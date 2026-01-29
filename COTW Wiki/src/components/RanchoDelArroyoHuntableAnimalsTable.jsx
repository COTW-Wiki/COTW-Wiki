import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import rioGrandeTurkeyIcon from '../../assets/RioGrandeTurkeyIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import antelopeJackrabbitIcon from '../../assets/AntelopeJackrabbitIcon.webp';
import coyoteIcon from '../../assets/CoyoteIcon.webp';
import mexicanBobcatIcon from '../../assets/MexicanBobcatIcon.webp';
import collaredPeccaryIcon from '../../assets/CollaredPeccaryIcon.webp';
import pronghornIcon from '../../assets/PronghornIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import desertBighornSheepIcon from '../../assets/DesertBighornSheepIcon.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';

const RanchoDelArroyoHuntableAnimalsTable = () => {
  const data = {
    id: 'rancho',
    name: "Rancho del Arroyo Animals (10 total, 4 unique, 3 great one)",
    animals: {
      1: [
        { name: "Rio Grande Turkey", icon: rioGrandeTurkeyIcon },
        { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
        { name: "Antelope Jackrabbit", icon: antelopeJackrabbitIcon }
      ],
      2: [{ name: "Coyote", icon: coyoteIcon }, { name: "Mexican Bobcat", icon: mexicanBobcatIcon }],
      3: [{ name: "Collared Peccary", icon: collaredPeccaryIcon }, { name: "Pronghorn", icon: pronghornIcon }],
      4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
      5: [{ name: "Desert Bighorn Sheep", icon: desertBighornSheepIcon }, { name: "Mule Deer", icon: muleDeerIcon }],
      6: [], 7: [], 8: [], 9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default RanchoDelArroyoHuntableAnimalsTable;