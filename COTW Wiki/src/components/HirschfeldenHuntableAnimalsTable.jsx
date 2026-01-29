import React from 'react';
import ReserveAnimalsTable from './ReserveAnimalsTable';

import canadaGooseIcon from '../assets/CanadaGooseIcon.webp';
import ringNeckedPheasantIcon from '../assets/Ring-NeckedPheasantIcon.webp';
import europeanRabbitIcon from '../assets/EuropeanRabbitIcon.webp';
import redFoxIcon from '../assets/RedFoxIcon.webp';
import roeDeerIcon from '../assets/RoeDeerIcon.webp';
import fallowDeerIcon from '../assets/FallowDeerIcon.webp';
import wildBoarIcon from '../assets/WildBoarIcon.webp';
import redDeerIcon from '../assets/RedDeerIcon.webp';
import europeanBisonIcon from '../assets/EuropeanBisonIcon.webp';

const HirschfeldenHuntableAnimalsTable = () => {
  const data = {
    id: 'hirschfelden',
    name: "Hirschfelden Animals (9 total, 1 unique, 4 great ones)",
    animals: {
      1: [
        { name: "Canada Goose", icon: canadaGooseIcon },
        { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
        { name: "European Rabbit", icon: europeanRabbitIcon }
      ],
      2: [{ name: "Red Fox", icon: redFoxIcon }],
      3: [{ name: "Roe Deer", icon: roeDeerIcon }],
      4: [{ name: "Fallow Deer", icon: fallowDeerIcon }],
      5: [{ name: "Wild Boar", icon: wildBoarIcon }],
      6: [{ name: "Red Deer", icon: redDeerIcon }],
      7: [], 8: [],
      9: [{ name: "European Bison", icon: europeanBisonIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default HirschfeldenHuntableAnimalsTable;