import React from 'react';
import ReserveAnimalsTable from '../components/ReserveAnimalsTable';

import mallardIcon from '../assets/MallardIcon.webp';
import merriamTurkeyIcon from '../assets/MerriamTurkeyIcon.webp';
import whiteTailedJackrabbitIcon from '../assets/White-tailedJackrabbitIcon.webp';
import coyoteIcon from '../assets/CoyoteIcon.webp';
import blacktailDeerIcon from '../assets/BlacktailDeerIcon.webp';
import whitetailDeerIcon from '../assets/WhitetailDeerIcon.webp';
import blackBearIcon from '../assets/BlackBearIcon.webp';
import rooseveltElkIcon from '../assets/RooseveltElkIcon.webp';
import mooseIcon from '../assets/MooseIcon.webp';

const LaytonLakeHuntableAnimalsTable = () => {
  const data = {
    id: 'layton',
    name: "Layton Lake Animals (9 total, 3 unique, 3 great ones)",
    animals: {
      1: [
        { name: "Mallard", icon: mallardIcon },
        { name: "Merriam Turkey", icon: merriamTurkeyIcon },
        { name: "White-tailed Jackrabbit", icon: whiteTailedJackrabbitIcon }
      ],
      2: [{ name: "Coyote", icon: coyoteIcon }],
      3: [],
      4: [
        { name: "Blacktail Deer", icon: blacktailDeerIcon },
        { name: "Whitetail Deer", icon: whitetailDeerIcon }
      ],
      5: [], 6: [],
      7: [{ name: "Black Bear", icon: blackBearIcon }, { name: "Roosevelt Elk", icon: rooseveltElkIcon }],
      8: [{ name: "Moose", icon: mooseIcon }],
      9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default LaytonLakeHuntableAnimalsTable;