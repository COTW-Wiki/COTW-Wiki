import React from 'react';
import ReserveAnimalsTable from '../../components/ReserveAnimalsTable';

import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import snowGooseIcon from '../../assets/SnowGooseIcon.webp';
import duskyGrouseIcon from '../../assets/DuskyGrouseIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import woodDuckIcon from '../../assets/WoodDuckIcon.webp';
import northernPintailIcon from '../../assets/NorthernPintailIcon.webp';
import northAmericanBeaverIcon from '../../assets/NorthAmericanBeaverIcon.webp';
import pronghornIcon from '../../assets/PronghornIcon.webp';
import mountainGoatIcon from '../../assets/MountainGoatIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import rockyMountainBighornSheepIcon from '../../assets/RockyMountainBighornSheepIcon.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';
import grayWolfIcon from '../../assets/GrayWolfIcon.webp';
import woodlandCaribouIcon from '../../assets/WoodlandCaribouIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import manitobanElkIcon from '../../assets/ManitobanElkIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';
import woodBisonIcon from '../../assets/WoodBisonIcon.webp';

const AskiyRidgeHuntableAnimalsTable = () => {
  const data = {
    id: 'askiy',
    name: "Askiy Ridge Hunting Preserve (19 total, 8 unique, 5 great ones)",
    animals: {
      1: [
        { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
        { name: "Canada Goose", icon: canadaGooseIcon },
        { name: "Snow Goose", icon: snowGooseIcon },
        { name: "Dusky Grouse", icon: duskyGrouseIcon },
        { name: "Mallard", icon: mallardIcon },
        { name: "Wood Duck", icon: woodDuckIcon },
        { name: "Northern Pintail", icon: northernPintailIcon }
      ],
      2: [{ name: "North American Beaver", icon: northAmericanBeaverIcon }],
      3: [{ name: "Pronghorn", icon: pronghornIcon }],
      4: [{ name: "Mountain Goat", icon: mountainGoatIcon }, { name: "Whitetail Deer", icon: whitetailDeerIcon }],
      5: [{ name: "Rocky Mountain Bighorn Sheep", icon: rockyMountainBighornSheepIcon }, { name: "Mule Deer", icon: muleDeerIcon }],
      6: [{ name: "Gray Wolf", icon: grayWolfIcon }, { name: "Woodland Caribou", icon: woodlandCaribouIcon }],
      7: [{ name: "Black Bear", icon: blackBearIcon }, { name: "Manitoban Elk", icon: manitobanElkIcon }],
      8: [{ name: "Moose", icon: mooseIcon }],
      9: [{ name: "Wood Bison", icon: woodBisonIcon }]
    }
  };

  return <ReserveAnimalsTable reserveData={data} />;
};

export default AskiyRidgeHuntableAnimalsTable;