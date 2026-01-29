import React from 'react';
import ReserveAnimalsTable from '../components/ReserveAnimalsTable';

import eurasianWigeonIcon from '../assets/EurasianWigeonIcon.webp';
import scrubHareIcon from '../assets/ScrubHareIcon.webp';
import sideStripedJackalIcon from '../assets/Side-stripedJackalIcon.webp';
import springbokIcon from '../assets/SpringbokIcon.webp';
import warthogIcon from '../assets/WarthogIcon.webp';
import lesserKuduIcon from '../assets/LesserKuduIcon.webp';
import blueWildebeestIcon from '../assets/BlueWildebeestIcon.webp';
import gemsbokIcon from '../assets/GemsbokIcon.webp';
import capeBuffaloIcon from '../assets/CapeBuffaloIcon.webp';
import lionIcon from '../assets/LionIcon.webp';

const VurhongaSavannaHuntableAnimalsTable = () => {
  const data = {
    id: 'vurhonga',
    name: "Vurhonga Savanna Animals (10 total, 9 unique)",
    animals: {
      1: [{ name: "Eurasian Wigeon", icon: eurasianWigeonIcon }, { name: "Scrub Hare", icon: scrubHareIcon }],
      2: [{ name: "Side-Striped Jackal", icon: sideStripedJackalIcon }],
      3: [{ name: "Springbok", icon: springbokIcon }],
      4: [{ name: "Warthog", icon: warthogIcon }, { name: "Lesser Kudu", icon: lesserKuduIcon }],
      5: [],
      6: [{ name: "Blue Wildebeest", icon: blueWildebeestIcon }, { name: "Gemsbok", icon: gemsbokIcon }],
      7: [], 8: [],
      9: [{ name: "Cape Buffalo", icon: capeBuffaloIcon }, { name: "Lion", icon: lionIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default VurhongaSavannaHuntableAnimalsTable;