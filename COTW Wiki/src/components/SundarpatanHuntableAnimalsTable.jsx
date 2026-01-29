import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import woollyHareIcon from '../../assets/WoollyHareIcon.webp';
import northernRedMuntjacIcon from '../../assets/NorthernRedMuntjacIcon.webp';
import tibetanFoxIcon from '../../assets/TibetanFoxIcon.webp';
import blackbuckIcon from '../../assets/BlackbuckIcon.webp';
import blueSheepIcon from '../../assets/BlueSheepIcon.webp';
import snowLeopardIcon from '../../assets/SnowLeopardIcon.webp';
import tahrIcon from '../../assets/TahrIcon.webp';
import barasinghaIcon from '../../assets/BarasinghaIcon.webp';
import nilgaiIcon from '../../assets/NilgaiIcon.webp';
import bengalTigerIcon from '../../assets/BengalTigerIcon.webp';
import waterBuffaloIcon from '../../assets/WaterBuffaloIcon.webp';
import wildYakIcon from '../../assets/WildYakIcon.webp';

const SundarpatanHuntableAnimalsTable = () => {
  const data = {
    id: 'sundarpatan',
    name: "Sundarpatan (13 total, 9 unique, 1 great one)",
    animals: {
      1: [{ name: "Greylag Goose", icon: greylagGooseIcon }, { name: "Woolly Hare", icon: woollyHareIcon }],
      2: [{ name: "Northern Red Muntjac", icon: northernRedMuntjacIcon }, { name: "Tibetan Fox", icon: tibetanFoxIcon }],
      3: [{ name: "Blackbuck", icon: blackbuckIcon }],
      4: [{ name: "Blue Sheep", icon: blueSheepIcon }, { name: "Snow Leopard", icon: snowLeopardIcon }, { name: "Tahr", icon: tahrIcon }],
      5: [],
      6: [{ name: "Barasingha", icon: barasinghaIcon }, { name: "Nilgai", icon: nilgaiIcon }],
      7: [], 8: [],
      9: [{ name: "Bengal Tiger", icon: bengalTigerIcon }, { name: "Water Buffalo", icon: waterBuffaloIcon }, { name: "Wild Yak", icon: wildYakIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default SundarpatanHuntableAnimalsTable;