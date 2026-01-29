import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({ to, children }) => (
  <Link to={`/weapons/ammo/${to}`} className="hover:text-white hover:underline">
    {children}
  </Link>
);

const ammoData = [
  {
    category: "Rifle",
    items: [
      { 
        name: <LinkItem to=".22LR_Jacketed_Hollow-Point">.22LR Bullet (JHP)</LinkItem>, 
        classes: "1" 
      },
      { 
        name: <span>.223 Bullet (<LinkItem to=".223_Polymer-Tip_Bullet">PT</LinkItem>, <LinkItem to=".223_Soft-Point">SP</LinkItem>)</span>, 
        classes: "2-4" 
      },
      { 
        name: <span>.45 Air Rifle Pellet (<LinkItem to=".45_Round_Nose">RN</LinkItem>, <LinkItem to=".45_Hollow-Point">HP</LinkItem>)</span>, 
        classes: "2-4" 
      },
      { 
        name: <span>.243 Bullet (<LinkItem to=".243_Polymer-Tip">PT</LinkItem>, <LinkItem to=".243_Soft-Point">SP</LinkItem>)</span>, 
        classes: "2-6" 
      },
      { 
        name: <span>.30-30 Bullet (<LinkItem to=".30-30_Soft-Point_Round_Nose">SPRN</LinkItem>, <LinkItem to=".30-30_Hollow-Point">HP</LinkItem>)</span>, 
        classes: "2-6" 
      },
      { 
        name: <LinkItem to="7.62x54R_Soft-Point">7.62x54R Bullet (SP)</LinkItem>, 
        classes: "3-7" 
      },
      { 
        name: <span>6.5mm Bullet (<LinkItem to="6.5mm_Polymer-Tip">PT</LinkItem>, <LinkItem to="6.5mm_Soft-Point">SP</LinkItem>)</span>, 
        classes: "4-8" 
      },
      { 
        name: <span>.270 Bullet (<LinkItem to=".270_Polymer-Tip_Bullet">PT</LinkItem>, <LinkItem to=".270_Soft-Point">SP</LinkItem>)</span>, 
        classes: "4-8" 
      },
      { 
        name: <span>.30-06 Bullet (<LinkItem to=".30-06_Polymer-Tip">PT</LinkItem>, <LinkItem to=".30-06_Soft-Point">SP</LinkItem>)</span>, 
        classes: "4-8" 
      },
      { 
        name: <span>.308 Bullet (<LinkItem to=".308_Polymer-Tip_Bullet">PT</LinkItem>, <LinkItem to=".308_Soft-Point">SP</LinkItem>)</span>, 
        classes: "4-8" 
      },
      { 
        name: <span>.45-70 Bullet (<LinkItem to=".45-70_Soft-Point_Flat_Nose">SPFN</LinkItem>, <LinkItem to=".45-70_Hollow-Point">HP</LinkItem>)</span>, 
        classes: "4-9" 
      },
      { 
        name: <span>7 mm Mag. Bullet (<LinkItem to="7mm_Mag_Polymer-Tip">PT</LinkItem>, <LinkItem to="7mm_Mag_Soft-Point">SP</LinkItem>)</span>, 
        classes: "4-9" 
      },
      { 
        name: <span>9.3x74R Bullet (<LinkItem to="9.3x74R_Soft-Point">SP</LinkItem>, <LinkItem to="9.3x74R_Polymer-Tip">PT</LinkItem>)</span>, 
        classes: "5-9" 
      },
      { 
        name: <span>300 Mag. Bullet (<LinkItem to=".300_Magnum_Polymer-Tip">PT</LinkItem>, <LinkItem to=".300_Magnum_Soft-Point">SP</LinkItem>)</span>, 
        classes: "7-9" 
      },
      { 
        name: <span>.338 WM Bullet (<LinkItem to=".338_Mag_Polymer-Tip">PT</LinkItem>, <LinkItem to=".338_Mag_Soft-Point">SP</LinkItem>)</span>, 
        classes: "7-9" 
      },
      { 
        name: <span>.470 Nitro Express (<LinkItem to=".470_Nitro_Express_FMJ">FMJ</LinkItem>, <LinkItem to=".470_Nitro_Express_Soft-Point">SP</LinkItem>)</span>, 
        classes: "9" 
      },
    ]
  },
  {
    category: "Handgun",
    items: [
      { 
        name: <LinkItem to=".45_Colt_Flat_Nose_Hard-Cast">.45 Colt Bullet</LinkItem>, 
        classes: "2-5" 
      },
      { 
        name: <span>.357 Mag. Bullet (<LinkItem to=".357_Flat_Nose_Hard-Cast">FNHC</LinkItem>, <LinkItem to=".357_Jacketed_Hollow-Point">JHP</LinkItem>)</span>, 
        classes: "2-6" 
      },
      { 
        name: <span>.44 Mag. Bullet (<LinkItem to=".44_Magnum_Flat_Nose_Hard-Cast">FNHC</LinkItem>, <LinkItem to=".44_Magnum_Jacketed_Hollow-Point">JHP</LinkItem>)</span>, 
        classes: "3-8" 
      },
      { 
        name: <span>.454 Casull Bullet (<LinkItem to=".454_Jacketed_Hollow-Point">HP</LinkItem>, <LinkItem to=".454_Flat_Nose_Hard-Cast">HC</LinkItem>)</span>, 
        classes: "4-9" 
      },
    ]
  },
  {
    category: "Shotgun",
    items: [
      { name: <LinkItem to=".410_Birdshot">410 Bore Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="20_GA_Birdshot">20 GA Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="20_GA_Steel_Birdshot">20 GA Steel Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="16_GA_Birdshot">16 GA Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="12_GA_Birdshot">12 GA Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="10_GA_Plastic_Birdshot">10 GA Birdshot</LinkItem>, classes: "1" },
      { name: <LinkItem to="20_GA_Buckshot">20 GA Buckshot</LinkItem>, classes: "2-3" },
      { name: <LinkItem to="16_GA_Buckshot">16 GA Buckshot</LinkItem>, classes: "2-4" },
      { name: <LinkItem to="12_GA_Buckshot">12 GA Buckshot</LinkItem>, classes: "2-5" },
      { name: <LinkItem to="10_GA_Plastic_Buckshot">10 GA Buckshot</LinkItem>, classes: "4-7" },
      { name: <LinkItem to="20_GA_Slug">20 GA Slug</LinkItem>, classes: "4-7" },
      { name: <LinkItem to="16_GA_Slug">16 GA Slug</LinkItem>, classes: "4-7" },
      { name: <LinkItem to="12_GA_Slug">12 GA Slug</LinkItem>, classes: "4-8" },
      { name: <LinkItem to="10_GA_Plastic_Slug">10 GA Slug</LinkItem>, classes: "6-9" },
    ]
  },
  {
    category: "Archery",
    items: [
      { name: <span><LinkItem to="300_gr._Small_Game_Point_Arrow">300 gr. Judo Point Arrow</LinkItem> (+ Tracer)</span>, classes: "1-2" },
      { name: <span><LinkItem to="300_gr._Small_Game_Point_Bolt">300 gr. Judo Point Bolt</LinkItem> (+ Tracer)</span>, classes: "1-2" },
      { name: <span><LinkItem to="420_gr._Broadhead_Arrow">420 gr. Broadhead Arrow</LinkItem> (+ Tracer)</span>, classes: "2-7" },
      { name: <span><LinkItem to="420_gr._Broadhead_Bolt">420 gr. Broadhead Bolt</LinkItem> (+ Tracer)</span>, classes: "2-7" },
      { name: <span><LinkItem to="540_Grain_Broadhead">540 gr. Recurve Broadhead Arrow</LinkItem> (+ Tracer)</span>, classes: "4-8" },
      { name: <span><LinkItem to="600_gr._Broadhead_Arrow">600 gr. Broadhead Arrow</LinkItem> (+ Tracer)</span>, classes: "7-9" },
      { name: <span><LinkItem to="600_gr._Broadhead_Bolt">600 gr. Broadhead Bolt</LinkItem> (+ Tracer)</span>, classes: "7-9" },
    ]
  }
];

export default function AmmunitionTable() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-slate-900 min-h-screen font-sans text-blue-100">
      
      <div className="mb-6">
        <h1 className="text-3xl font-light text-white mb-2">Ammunition Classes</h1>
        <hr className="border-slate-700"/>
      </div>

      <div className="overflow-x-auto border border-slate-700 rounded-sm">
        <table className="w-full text-left border-collapse bg-slate-900/50 text-sm">
          <thead>
            <tr className="bg-slate-800 text-slate-200 border-b border-slate-600 font-bold">
              <th className="p-4 border-r border-slate-600 w-32">Category</th>
              <th className="p-4 border-r border-slate-600">Ammunition</th>
              <th className="p-4 w-40">Permitted Classes</th>
            </tr>
          </thead>
          <tbody>
            {ammoData.map((section, sIndex) => (
              <React.Fragment key={section.category}>
                {section.items.map((item, i) => {
                  const isFirst = i === 0;
                  return (
                    <tr 
                      key={i} 
                      className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                    >
                      {/* Render Category only on the first row of the section */}
                      {isFirst && (
                        <td 
                          rowSpan={section.items.length} 
                          className="p-4 font-bold text-blue-300 border-r border-slate-600 align-middle bg-slate-800/20"
                        >
                          <Link to="/weapons/list" className="hover:text-white hover:underline">
                            {section.category}
                          </Link>
                        </td>
                      )}
                      
                      {/* Ammunition Name */}
                      <td className="p-3 border-r border-slate-700/50 font-semibold text-blue-100">
                        {item.name}
                      </td>

                      {/* Permitted Classes */}
                      <td className="p-3 font-mono text-white">
                        {item.classes}
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
