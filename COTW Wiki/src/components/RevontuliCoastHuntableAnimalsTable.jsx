import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import eurasianTealIcon from '../../assets/EurasianTealIcon.webp';
import eurasianWigeonIcon from '../../assets/EurasianWigeonIcon.webp';
import goldeneyeIcon from '../../assets/GoldeneyeIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import tuftedDuckIcon from '../../assets/TuftedDuckIcon.webp';
import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import tundraBeanGooseIcon from '../../assets/TundraBeanGooseIcon.webp';
import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import blackGrouseIcon from '../../assets/BlackGrouseIcon.webp';
import hazelGrouseIcon from '../../assets/HazelGrouseIcon.webp';
import westernCapercaillieIcon from '../../assets/WesternCapercaillieIcon.webp';
import rockPtarmiganIcon from '../../assets/RockPtarmiganIcon.webp';
import willowPtarmiganIcon from '../../assets/WillowPtarmiganIcon.webp';
import mountainHareIcon from '../../assets/MountainHareIcon.webp';
import raccoonDogIcon from '../../assets/RaccoonDogIcon.webp';
import eurasianLynxIcon from '../../assets/EurasianLynxIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import eurasianBrownBearIcon from '../../assets/EurasianBrownBearIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';

const RevontuliCoastHuntableAnimalsTable = () => {
  const data = {
    id: 'revontuli',
    name: "Revontuli Coast (19 total, 4 unique, 2 great ones)",
    animals: {
      1: [
        { name: "Eurasian Teal", icon: eurasianTealIcon },
        { name: "Eurasian Wigeon", icon: eurasianWigeonIcon },
        { name: "Goldeneye", icon: goldeneyeIcon },
        { name: "Mallard", icon: mallardIcon },
        { name: "Tufted Duck", icon: tuftedDuckIcon },
        { name: "Canada Goose", icon: canadaGooseIcon },
        { name: "Tundra Bean Goose", icon: tundraBeanGooseIcon },
        { name: "Greylag Goose", icon: greylagGooseIcon },
        { name: "Black Grouse", icon: blackGrouseIcon },
        { name: "Hazel Grouse", icon: hazelGrouseIcon },
        { name: "Western Capercaillie", icon: westernCapercaillieIcon },
        { name: "Rock Ptarmigan", icon: rockPtarmiganIcon },
        { name: "Willow Ptarmigan", icon: willowPtarmiganIcon },
        { name: "Mountain Hare", icon: mountainHareIcon }
      ],
      2: [{ name: "Raccoon Dog", icon: raccoonDogIcon }],
      3: [{ name: "Eurasian Lynx", icon: eurasianLynxIcon }],
      4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
      5: [], 6: [],
      7: [{ name: "Eurasian Brown Bear", icon: eurasianBrownBearIcon }],
      8: [{ name: "Moose", icon: mooseIcon }],
      9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default RevontuliCoastHuntableAnimalsTable;