import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import magpieGooseIcon from '../../assets/MagpieGoose_frame.webp';
import stubbleQuailIcon from '../../assets/StubbleQuail_frame.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import hogDeerIcon from '../../assets/HogDeer_frame.webp';
import axisDeerIcon from '../../assets/AxisDeerIcon.webp';
import feralGoatIcon from '../../assets/FeralGoatIcon.webp';
import easternGrayKangarooIcon from '../../assets/Kangaroo_frame.webp';
import fallowDeerIcon from '../../assets/FallowDeerIcon.webp';
import feralPigIcon from '../../assets/FeralPigIcon.webp';
import javanRusaIcon from '../../assets/JavanRusa_frame.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import sambarIcon from '../../assets/Sambar_frame.webp';
import saltwaterCrocodileIcon from '../../assets/Crocodile_frame.webp';
import bantengIcon from '../../assets/Banteng_frame.webp';

const EmeraldCoastHuntableAnimalsTable = () => {
  const data = {
    id: 'emerald',
    name: "Emerald Coast (14 total, 8 unique, 3 great ones)",
    animals: {
      1: [{ name: "Magpie Goose", icon: magpieGooseIcon }, { name: "Stubble Quail", icon: stubbleQuailIcon }],
      2: [{ name: "Red Fox", icon: redFoxIcon }],
      3: [{ name: "Hog Deer", icon: hogDeerIcon }, { name: "Axis Deer", icon: axisDeerIcon }, { name: "Feral Goat", icon: feralGoatIcon }],
      4: [{ name: "Eastern Gray Kangaroo", icon: easternGrayKangarooIcon }, { name: "Fallow Deer", icon: fallowDeerIcon }],
      5: [{ name: "Feral Pig", icon: feralPigIcon }, { name: "Javan Rusa", icon: javanRusaIcon }],
      6: [{ name: "Red Deer", icon: redDeerIcon }],
      7: [{ name: "Sambar", icon: sambarIcon }],
      8: [{ name: "Saltwater Crocodile", icon: saltwaterCrocodileIcon }],
      9: [{ name: "Banteng", icon: bantengIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default EmeraldCoastHuntableAnimalsTable;