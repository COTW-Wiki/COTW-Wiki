import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import merriamTurkeyIcon from '../../assets/MerriamTurkeyIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import europeanRabbitIcon from '../../assets/EuropeanRabbitIcon.webp';
import chamoisIcon from '../../assets/ChamoisIcon.webp';
import feralGoatIcon from '../../assets/FeralGoatIcon.webp';
import sikaDeerIcon from '../../assets/SikaDeerIcon.webp';
import fallowDeerIcon from '../../assets/FallowDeerIcon.webp';
import tahrIcon from '../../assets/TahrIcon.webp';
import feralPigIcon from '../../assets/FeralPigIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';

const TeAwaroaHuntableAnimalsTable = () => {
  const data = {
    id: 'te-awaroa',
    name: "Te Awaroa Animals (10 total, 2 unique, 3 great ones)",
    animals: {
      1: [
        { name: "Merriam Turkey", icon: merriamTurkeyIcon },
        { name: "Mallard", icon: mallardIcon },
        { name: "European Rabbit", icon: europeanRabbitIcon }
      ],
      2: [],
      3: [{ name: "Chamois", icon: chamoisIcon }, { name: "Feral Goat", icon: feralGoatIcon }],
      4: [{ name: "Sika Deer", icon: sikaDeerIcon }, { name: "Fallow Deer", icon: fallowDeerIcon }, { name: "Tahr", icon: tahrIcon }],
      5: [{ name: "Feral Pig", icon: feralPigIcon }],
      6: [{ name: "Red Deer", icon: redDeerIcon }],
      7: [], 8: [], 9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default TeAwaroaHuntableAnimalsTable;