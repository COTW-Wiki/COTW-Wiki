import React from 'react';
import OliveOutfitImg from '../../../assets/Olive_outfit-0.webp';
import BlazingOrangeOutfitImg from '../../../assets/Blazing_orange_outfit.webp';
import ForestCamoOutfitImg from '../../../assets/Forest_camo_outfit.webp';
import SavannaWardenOutfitImg from '../../../assets/Savanna_warden_outfit.webp';
import ArcticHuntingOutfitImg from '../../../assets/Arctic_hunting_outfit.webp';

const Clothing = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Clothing</h1>
      <p className="mb-6 text-gray-700">
        Clothing is a purely cosmetic option, changing the appearance of the hunter. Currently, there are 4 different outfits available.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Summer Clothes</h2>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Olive</h3>
          <img src={OliveOutfitImg} alt="Olive Outfit" className="rounded-lg shadow-md max-h-96 object-contain" />
          <p className="mt-4 text-center text-gray-700 max-w-[250px]">
            An outfit made of patented nanofibers that keep you dry and warm during available weather conditions. This revolutionary textile is waterproof, windproof and breathable so that you can stay comfortable both under gazing sun or heavy torrents.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Blazing Orange</h3>
          <img src={BlazingOrangeOutfitImg} alt="Blazing Orange Outfit" className="rounded-lg shadow-md max-h-96 object-contain" />
          <p className="mt-4 text-center text-gray-700 max-w-[250px]">
            This flashy outfit is for hunters that want to stand out. It will not only make you look stunning, but it will also make sure that no fellow hunter mistakes you for a deer.
          </p>
        </div>
                <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Forest Camo</h3>
          <img src={ForestCamoOutfitImg} alt="Forest Camo Outfit" className="rounded-lg shadow-md max-h-96 object-contain" />
          <p className="mt-4 text-center text-gray-700 max-w-[250px]">
            Forest camouflage outfit in nylon. This state-of-the-art set doesn't only make you look like you know what you're doing, but it will also keep you warm and dry under the most severe weather condition.
          </p>
        </div>

        <div className="col-span-3 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Savanna Warden</h3>
          <img src={SavannaWardenOutfitImg} alt="Savanna Warden Outfit" className="rounded-lg shadow-md max-h-96 object-contain" />
          <p className="mt-4 text-center text-gray-700 max-w-[250px]">
            A quick-drying and lightweight outfit issued to African park wardens. With built.in SPF, insect-repellent and moisture-wicking, you can stay comfortable and dry in the hottest conditions.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 border-b pb-2 mt-8">Winter Clothing</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Arctic</h3>
          <img src={ArcticHuntingOutfitImg} alt="Arctic Outfit" className="rounded-lg shadow-md max-h-96 object-contain" />
          <p className="mt-4 text-center text-gray-700 max-w-[250px]">
            This outfit, made entirely from natural materials, will keep you warm through any blizzard. A favorite among arctic hunters that operate under conditions where the wrong choice of outfit can be the difference between a successful hunt and a severe case of frostbite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
