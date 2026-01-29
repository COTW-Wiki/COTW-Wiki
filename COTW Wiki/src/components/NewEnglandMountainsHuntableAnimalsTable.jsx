import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import bobwhiteQuailIcon from '../../assets/BobwhiteQuailIcon.webp';
import easternWildTurkeyIcon from '../../assets/EasternWildTurkeyIcon.webp';
import goldeneyeIcon from '../../assets/GoldeneyeIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import greenWingTealIcon from '../../assets/GreenWingTealIcon.webp';
import easternCottontailIcon from '../../assets/EasternCottontailRabbitIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import grayFoxIcon from '../../assets/GrayFoxIcon.webp';
import coyoteIcon from '../../assets/CoyoteIcon.webp';
import commonRaccoonIcon from '../../assets/CommonRaccoonIcon.webp';
import bobcatIcon from '../../assets/BobcatIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';

const NewEnglandMountainsHuntableAnimalsTable = () => {
  const data = {
    id: 'new-england',
    name: "New England Mountains (15 total, 1 unique, 5 great ones)",
    animals: {
      1: [
        { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
        { name: "Bobwhite Quail", icon: bobwhiteQuailIcon },
        { name: "Eastern Wild Turkey", icon: easternWildTurkeyIcon },
        { name: "Goldeneye", icon: goldeneyeIcon },
        { name: "Mallard", icon: mallardIcon },
        { name: "Green Winged Teal", icon: greenWingTealIcon },
        { name: "Eastern Cottontail Rabbit", icon: easternCottontailIcon }
      ],
      2: [
        { name: "Red Fox", icon: redFoxIcon },
        { name: "Gray Fox", icon: grayFoxIcon },
        { name: "Coyote", icon: coyoteIcon },
        { name: "Common Raccoon", icon: commonRaccoonIcon },
        { name: "Bobcat", icon: bobcatIcon }
      ],
      3: [],
      4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
      5: [], 6: [],
      7: [{ name: "Black Bear", icon: blackBearIcon }],
      8: [{ name: "Moose", icon: mooseIcon }],
      9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default NewEnglandMountainsHuntableAnimalsTable;