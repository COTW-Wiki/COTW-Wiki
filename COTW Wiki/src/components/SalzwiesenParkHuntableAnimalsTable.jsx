import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import eurasianTealIcon from '../../assets/EurasianTealIcon.webp';
import eurasianWigeonIcon from '../../assets/EurasianWigeonIcon.webp';
import ferruginousDuckIcon from '../../assets/FerruginousDuckIcon.webp';
import gadwallIcon from '../../assets/GadwallIcon.webp';
import goldeneyeIcon from '../../assets/GoldeneyeIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import tuftedDuckIcon from '../../assets/TuftedDuckIcon.webp';
import tundraBeanGooseIcon from '../../assets/TundraBeanGooseIcon.webp';
import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import europeanRabbitIcon from '../../assets/EuropeanRabbitIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import blackGrouseIcon from '../../assets/BlackGrouseIcon.webp';
import commonRaccoonIcon from '../../assets/CommonRaccoonIcon.webp';
import raccoonDogIcon from '../../assets/RaccoonDogIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';

const SalzwiesenParkHuntableAnimalsTable = () => {
  const data = {
    id: 'salzwiesen',
    name: "Salzwiesen Park (15 total, 2 unique, 2 great ones)",
    animals: {
      1: [
        { name: "Eurasian Teal", icon: eurasianTealIcon },
        { name: "Eurasian Wigeon", icon: eurasianWigeonIcon },
        { name: "Ferruginous Duck", icon: ferruginousDuckIcon },
        { name: "Gadwall", icon: gadwallIcon },
        { name: "Goldeneye", icon: goldeneyeIcon },
        { name: "Mallard", icon: mallardIcon },
        { name: "Tufted Duck", icon: tuftedDuckIcon },
        { name: "Tundra Bean Goose", icon: tundraBeanGooseIcon },
        { name: "Greylag Goose", icon: greylagGooseIcon },
        { name: "European Rabbit", icon: europeanRabbitIcon },
        { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
        { name: "Black Grouse", icon: blackGrouseIcon }
      ],
      2: [{ name: "Common Raccoon", icon: commonRaccoonIcon }, { name: "Raccoon Dog", icon: raccoonDogIcon }, { name: "Red Fox", icon: redFoxIcon }],
      3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default SalzwiesenParkHuntableAnimalsTable;