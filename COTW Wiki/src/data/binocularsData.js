import React from 'react';

export const binocularsData = [
  {
    id: 'vantage',
    name: 'Vantage 8x42 Binoculars',
    shortName: 'Vantage 8x42',
    description: (
      <>
        <p className="mb-4 italic">
          Want a premium binoculars at an affordable price? These lightweight 8x42 pair provide all the features you'll need, with broadband multi-coated lenses and high quality roof prisms. They're 100% waterproof and fogproof too.
        </p>
        <p>
          The <strong>Vantage 8x42 Binoculars</strong> are the first binoculars the player can use. They are available right from the beginning of the game. They provide a maximal magnification of 8x42x, which can be approached gradually. Binoculars and rangefinders are the only items that can be used to <span className="text-blue-400 cursor-pointer hover:underline">spot animals</span> (until the player has skilled <span className="text-blue-400 cursor-pointer hover:underline">Sight Spotting</span>).
        </p>
      </>
    ),
    image: '/assets/Vantage8x42Binoculars.webp', 
    stats: {
      value: "0",
      weight: "1",
      level: "0",
      magnification: "8 x 42"
    }
  },
  {
    id: 'venture',
    name: 'Venture 5x30 Rangefinder',
    shortName: 'Venture 5x30',
    description: (
      <>
        <p className="mb-4 italic">
          A compact, robust and waterproof rangefinder that provides accurate readings up to 1500 yards
        </p>
        <p>
          The <strong>Venture 5x30 Rangefinder</strong> is the first available rangefinder in the game. It provides a magnification of 5x (The 30 in the name refers to the objective lens diameter.) and shows the distance to the targeted spot.
        </p>
        <p className="mt-4">
          Binoculars and rangefinders are the only items that can be used to <span className="text-blue-400 cursor-pointer hover:underline">spot animals</span> (until the player has skilled <span className="text-blue-400 cursor-pointer hover:underline">Sight Spotting</span>).
        </p>
      </>
    ),
    image: '/assets/Venture5x30Rangefinder.webp',
    stats: {
      value: "12000",
      weight: "1",
      level: "11",
      magnification: "5 x 30"
    }
  },
  {
    id: 'apexview',
    name: 'Apexview 7x42 Binoculars',
    shortName: 'Apexview 7x42',
    description: (
      <>
        <p className="mb-4 italic">
          With these lightweight binoculars, you'll get the best of both worlds: the superior field of view of binoculars coupled with accurate range information from a rangefinder. Long gone are the days where you have to constantly switch between the two!
        </p>
        <p>
          The <strong>Apexview 7x42 Binoculars</strong> are the crown jewel of binoculars. By combining the field of view of binoculars with the precise distance tracking of rangefinders they not only save time by avoiding constant switching between binoculars and rangefinder, they also save precious weight capacity.
        </p>
      </>
    ),
    image: '/assets/Apexview7x42Binoculars.webp',
    stats: {
      value: "24000",
      weight: "1",
      level: "29",
      magnification: "7 x 42"
    }
  },
  {
    id: 'genzero',
    name: 'GenZero 8x50 Night Vision Rangefinder Binoculars',
    shortName: 'GenZero 8x50',
    description: (
      <>
        <blockquote className="border-l-4 border-slate-600 pl-4 italic mb-4 text-slate-400">
          "The state-of-the-art technology used in these rangefinder binoculars allows you to greatly increase the contrast of the environment while leaving depth perception and shapes unaltered. The green tint of the lenses further improves visibility in the dark, making these binoculars a fundamental ally when night hunting." <br/>
          <span className="text-xs not-italic">— In-Game Description</span>
        </blockquote>
        <p>
          The <strong>GenZero 8x50 Night Vision Rangefinder Binoculars</strong> is a set of <span className="text-blue-400">Binoculars</span>. These binoculars share the same night vision ability as the <span className="text-blue-400">GenZero 1-4x20 Night Vision Rifle Scope</span>, but with a much higher possible zoom. Much like the night vision scope, these are not practical during the day as there is no way to toggle the night vision mode. These also function as rangefinders.
        </p>
        <p className="mt-2">
          These binoculars are available as part of the <span className="text-blue-400">High-Tech Hunting Pack DLC</span>.
        </p>
      </>
    ),
    image: '/assets/GenZero8x50NightVisionRangefinderBinoculars.webp',
    stats: {
      value: "0 (DLC)", 
      weight: "1",
      level: null, 
      magnification: null 
    }
  }
];