import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import harlequinDuckIcon from '../../assets/HarlequinDuckIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import grayWolfIcon from '../../assets/GrayWolfIcon.webp';
import grantCaribouIcon from '../../assets/GrantCaribouIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';
import grizzlyBearIcon from '../../assets/GrizzlyBearIcon.webp';
import plainsBisonIcon from '../../assets/PlainsBisonIcon.webp';

const YukonValleyHuntableAnimalsTable = () => {
  const data = {
    id: 'yukon',
    name: "Yukon Valley Animals (8 total, 3 unique, 3 great ones)",
    animals: {
      1: [{ name: "Canada Goose", icon: canadaGooseIcon }, { name: "Harlequin Duck", icon: harlequinDuckIcon }],
      2: [{ name: "Red Fox", icon: redFoxIcon }],
      3: [], 4: [], 5: [],
      6: [{ name: "Gray Wolf", icon: grayWolfIcon }, { name: "Grant Caribou", icon: grantCaribouIcon }],
      7: [],
      8: [{ name: "Moose", icon: mooseIcon }, { name: "Grizzly Bear", icon: grizzlyBearIcon }],
      9: [{ name: "Plains Bison", icon: plainsBisonIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default YukonValleyHuntableAnimalsTable;