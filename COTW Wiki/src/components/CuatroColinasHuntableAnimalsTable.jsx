import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import europeanHareIcon from '../../assets/EuropeanHareIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import roeDeerIcon from '../../assets/RoeDeerIcon.webp';
import rondaIbexIcon from '../../assets/RondaIbexIcon.webp';
import beceiteIbexIcon from '../../assets/BeceiteIbexIcon.webp';
import gredosIbexIcon from '../../assets/GredosIbexIcon.webp';
import southeasternSpanishIbexIcon from '../../assets/SoutheasternSpanishIbexIcon.webp';
import iberianMouflonIcon from '../../assets/IberianMouflonIcon.webp';
import wildBoarIcon from '../../assets/WildBoarIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import iberianWolfIcon from '../../assets/IberianWolfIcon.webp';

const CuatroColinasHuntableAnimalsTable = () => {
  const data = {
    id: 'cuatro',
    name: "Cuatro Colinas Animals (11 total, 7 unique, 2 great ones)",
    animals: {
      1: [{ name: "European Hare", icon: europeanHareIcon }, { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon }],
      2: [],
      3: [{ name: "Roe Deer", icon: roeDeerIcon }],
      4: [
        { name: "Ronda Ibex", icon: rondaIbexIcon },
        { name: "Beceite Ibex", icon: beceiteIbexIcon },
        { name: "Gredos Ibex", icon: gredosIbexIcon },
        { name: "Southeastern Spanish Ibex", icon: southeasternSpanishIbexIcon },
        { name: "Iberian Mouflon", icon: iberianMouflonIcon }
      ],
      5: [{ name: "Wild Boar", icon: wildBoarIcon }],
      6: [{ name: "Red Deer", icon: redDeerIcon }, { name: "Iberian Wolf", icon: iberianWolfIcon }],
      7: [], 8: [], 9: []
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default CuatroColinasHuntableAnimalsTable;