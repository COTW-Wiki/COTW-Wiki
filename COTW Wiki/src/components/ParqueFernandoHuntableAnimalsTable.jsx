import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import cinnamonTealIcon from '../../assets/CinnamonTealIcon.webp';
import collaredPeccaryIcon from '../../assets/CollaredPeccaryIcon.webp';
import axisDeerIcon from '../../assets/AxisDeerIcon.webp';
import blackbuckIcon from '../../assets/BlackbuckIcon.webp';
import pumaIcon from '../../assets/PumaIcon.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import waterBuffaloIcon from '../../assets/WaterBuffaloIcon.webp';

const ParqueFernandoHuntableAnimalsTable = () => {
  const data = {
    id: 'parque',
    name: "Parque Fernando Animals (8 total, 2 unique, 2 great ones)",
    animals: {
      1: [{ name: "Cinnamon Teal", icon: cinnamonTealIcon }],
      2: [],
      3: [{ name: "Collared Peccary", icon: collaredPeccaryIcon }, { name: "Axis Deer", icon: axisDeerIcon }, { name: "Blackbuck", icon: blackbuckIcon }],
      4: [],
      5: [{ name: "Puma", icon: pumaIcon }, { name: "Mule Deer", icon: muleDeerIcon }],
      6: [{ name: "Red Deer", icon: redDeerIcon }],
      7: [], 8: [],
      9: [{ name: "Water Buffalo", icon: waterBuffaloIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default ParqueFernandoHuntableAnimalsTable;