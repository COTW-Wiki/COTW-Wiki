import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import bobwhiteQuailIcon from '../../assets/BobwhiteQuailIcon.webp';
import easternWildTurkeyIcon from '../../assets/EasternWildTurkeyIcon.webp';
import greenWingTealIcon from '../../assets/GreenWingTealIcon.webp';
import easternCottontailIcon from '../../assets/EasternCottontailRabbitIcon.webp';
import grayFoxIcon from '../../assets/GrayFoxIcon.webp';
import commonRaccoonIcon from '../../assets/CommonRaccoonIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import wildHogIcon from '../../assets/WildHogIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import americanAlligatorIcon from '../../assets/AmericanAlligatorIcon.webp';

const MississippiAcresHuntableAnimalsTable = () => {
  const data = {
    id: 'mississippi',
    name: "Mississippi Acres Animals (10 total, 2 unique, 2 great ones)",
    animals: {
      1: [
        { name: "Bobwhite Quail", icon: bobwhiteQuailIcon },
        { name: "Eastern Wild Turkey", icon: easternWildTurkeyIcon },
        { name: "Green Winged Teal", icon: greenWingTealIcon },
        { name: "Eastern Cottontail Rabbit", icon: easternCottontailIcon }
      ],
      2: [{ name: "Gray Fox", icon: grayFoxIcon }, { name: "Common Raccoon", icon: commonRaccoonIcon }],
      3: [],
      4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
      5: [{ name: "Wild Hog", icon: wildHogIcon }],
      6: [],
      7: [{ name: "Black Bear", icon: blackBearIcon }, { name: "American Alligator", icon: americanAlligatorIcon }],
      8: [], 9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default MississippiAcresHuntableAnimalsTable;