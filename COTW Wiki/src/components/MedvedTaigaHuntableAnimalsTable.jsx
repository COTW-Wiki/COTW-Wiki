import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import westernCapercaillieIcon from '../../assets/WesternCapercaillieIcon.webp';
import siberianMuskDeerIcon from '../../assets/SiberianMuskDeerIcon.webp';
import eurasianLynxIcon from '../../assets/EurasianLynxIcon.webp';
import wildBoarIcon from '../../assets/WildBoarIcon.webp';
import grayWolfIcon from '../../assets/GrayWolfIcon.webp';
import mountainReindeerIcon from '../../assets/MountainReindeerIcon.webp';
import eurasianBrownBearIcon from '../../assets/EurasianBrownBearIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';

const MedvedTaigaHuntableAnimalsTable = () => {
  const data = {
    id: 'medved',
    name: "Medved-Taiga Animals (8 total, 2 unique, 3 great one)",
    animals: {
      1: [{ name: "Western Capercaillie", icon: westernCapercaillieIcon }],
      2: [{ name: "Siberian Musk Deer", icon: siberianMuskDeerIcon }],
      3: [{ name: "Eurasian Lynx", icon: eurasianLynxIcon }],
      4: [],
      5: [{ name: "Wild Boar", icon: wildBoarIcon }],
      6: [{ name: "Gray Wolf", icon: grayWolfIcon }, { name: "Mountain Reindeer", icon: mountainReindeerIcon }],
      7: [{ name: "Eurasian Brown Bear", icon: eurasianBrownBearIcon }],
      8: [{ name: "Moose", icon: mooseIcon }],
      9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default MedvedTaigaHuntableAnimalsTable;