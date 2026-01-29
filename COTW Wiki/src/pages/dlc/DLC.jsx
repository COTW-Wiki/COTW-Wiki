import React from 'react';
// Links removed — plain text DLC list

export default function DLC() {
  const dlcs = [
    {
      id: 'bearclaw-lite-bow',
      name: 'Bearclaw Lite Compound Bow',
      release: '16 March 2017',
      price: 'Free',
      description: 'The Bearclaw Lite Compound Bow is the first free DLC, containing a premium bow available for purchase using in-game currency.',
      content: ['Bearclaw Lite CB-60']
    },
    {
      id: 'facing-the-wild-1',
      name: 'Facing the Wild 1',
      release: '18 April 2017',
      price: 'Free',
      description: 'Character customization DLC with new face options and fur variations for some reserves.',
      content: [
        '6 new faces for character customization',
        'New fur variations for animals in Hirschfelden Hunting Reserve and Layton Lake District'
      ]
    },
    {
      id: 'tents-ground-blinds',
      name: 'Tents & Ground Blinds',
      release: '27 April 2017',
      price: '4.29',
      description: 'Adds a tent and a ground blind to expand hunting equipment available in stores.',
      content: ['Tents', 'Groundblinds']
    },
    {
      id: 'shooting-range',
      name: 'Shooting Range',
      release: '29 May 2017',
      price: 'Free',
      description: 'Adds a shooting range to Hirschfelden so players can test weapons.',
      content: ['Shooting Range in Hirschfelden']
    },
    {
      id: 'saber-4x4',
      name: 'ATV Saber 4X4',
      release: '15 June 2017',
      price: '3.99 on PC, Free on Console',
      description: 'Adds the Saber 4x4 ATV; intended as transportation only. Can be shared in multiplayer when a player owns it.',
      content: ['Saber 4x4 ATV'],
      link: '/atv',
      thumbnail: 'https://img.youtube.com/vi/ry93SPMvesE/hqdefault.jpg'
    },
    {
      id: 'backpacks',
      name: 'Backpacks',
      release: '31 Aug 2017',
      price: 'Free',
      description: 'Adds three backpacks to the store for carrying more gear.',
      content: [
        'Trailscout Mini Daypack',
        'Exoadventurer Light Daypack',
        'Summit Explorer Pack'
      ]
    },
    {
      id: 'medved-taiga',
      name: 'Medved-Taiga',
      release: '17 Oct 2017',
      price: '7.99',
      description: 'Medved-Taiga National Park DLC: a snowy Siberian reserve with new animals and challenges.',
      content: ['Medved-Taiga National Park', '4 new animals: Lynx, Siberian Musk Deer, Mountain Reindeer, Brown Bear']
    },
    {
      id: 'weapon-pack-1',
      name: 'Weapon Pack 1',
      release: '12 April 2018',
      price: '3.99',
      description: 'Adds new weapons to the store.',
      content: ['Virant .22LR', 'Crosspoint CB-165', 'Houyi Recurve Bow']
    },
    {
      id: 'new-species-2018',
      name: 'New Species 2018',
      release: '12 April 2018',
      price: 'Free',
      description: 'Adds new small game and waterfowl species.',
      content: ['White-tailed Jackrabbit', 'Canada Goose', 'Mallard', 'Wild Goose']
    },
    {
      id: 'wild-goose-chase',
      name: 'Wild Goose Chase Gear',
      release: '12 June 2018',
      price: '3.99',
      description: 'Adds gear for hunting waterfowl.',
      content: ['Strecker SxS 20G', 'Layout Blinds', 'Decoys']
    },
    {
      id: 'vurhonga-savanna',
      name: 'Vurhonga Savanna',
      release: '30 Aug 2018',
      price: '7.99',
      description: 'Expands the game with the African Vurhonga Savanna reserve and seven new animals.',
      content: ['Vurhonga Savanna', '7 new animals: Scrub Hare, Side-Striped Jackal, Springbok, Warthog, Lesser Kudu, Blue Wildebeest, Cape Buffalo', 'New Rifle: King 470DB Zenith']
    },
    {
      id: 'duck-and-cover',
      name: 'Duck and Cover Pack',
      release: '27 Sep 2018',
      price: '3.99',
      description: 'Adds waterfowl-specific gear for hunting Mallards.',
      content: ['Waterfowl Blinds', 'Nordin 20SA', 'Decoys']
    },
    {
      id: 'parque-fernando',
      name: 'Parque Fernando',
      release: '13 Dec 2018',
      price: '7.99',
      description: 'Adds Parque Fernando reserve in South America and several new animals.',
      content: ['Parque Fernando', 'New animals: Cinnamon Teal, Blackbuck, Mule Deer, Axis Deer, Puma', 'Parque Fernando Archery Range']
    },
    {
      id: 'new-species-2019',
      name: 'New Species 2019',
      release: '05 February 2019',
      price: 'Free',
      description: 'Reintroduces the Lion to Vurhonga Savanna and other species updates.',
      content: ['New Animal: Lion']
    },
    {
      id: 'weapon-pack-2',
      name: 'Weapon Pack 2',
      release: '28 February 2019',
      price: '3.99',
      description: 'Adds a shipment of new weapons.',
      content: ['Grelck Drilling Rifle', 'Solokhin MN1890', 'Mangiafico 410/45 Colt']
    },
    {
      id: 'trophy-lodge',
      name: 'Trophy Lodge Spring Creek Manor',
      release: '11 April 2019',
      price: '3.99',
      description: 'Adds Spring Creek Manor as a Trophy Lodge to display harvests.',
      content: ['Spring Creek Manor']
    },
    {
      id: 'truracs',
      name: 'TruRACS',
      release: '07 May 2019',
      price: 'Free',
      description: 'Introduces TruRACS (random antler configurations) and TruScore.',
      content: ['2 Animals added to TruRACS: Blacktail Deer, Whitetail Deer']
    },
    {
      id: 'treestand-tripod',
      name: 'Treestand and Tripod Pack',
      release: '03 June 2019',
      price: '3.99',
      description: 'Adds deployable treestands and tripod stands for stealthier ambushes.',
      content: ['Treestands', 'Tripod Stands', 'New TruRACS added to Animal: Roosevelt Elk']
    },
    {
      id: 'yukon-valley',
      name: 'Yukon Valley',
      release: '25 June 2019',
      price: '7.99',
      description: 'Adds Yukon Valley reserve with new animals and weapons.',
      content: ['Yukon Valley', 'New animals: Gray Wolf, Grizzly Bear, Grant Caribou', 'New TruRACS added to Animals: Grant Caribou, Mountain Reindeer']
    },
    {
      id: 'weapon-pack-3',
      name: 'Weapon Pack 3',
      release: '01 Aug 2019',
      price: '3.99',
      description: 'Adds more quality hunting weapons.',
      content: ['Eckers .30-06 Bolt-Action Rifle', 'Vasquez Cyclone .45 Big Bore Air Rifle', 'Andersson .22LR']
    },
    {
      id: 'high-tech-hunting',
      name: 'High-Tech Hunting Pack',
      release: '18 Sep 2019',
      price: '3.99',
      description: 'Night Hunting Pack gear and sights for low-light hunting.',
      content: ['Koter CB-65 Bow', 'GenZero 8x50 Night Vision Rangefinder Binoculars', 'Brightsight Rangefinder Bow Sight']
    },
    {
      id: 'saseka-safari',
      name: 'Saseka Safari Lodge',
      release: '14 Nov 2019',
      price: '3.99',
      description: 'Adds the Saseka Safari Lodge to display trophies and weapons.',
      content: ['Saseka Safari Lodge', 'Matmat\'s Multi Trophy Mounts', 'Gun Racks']
    },
    {
      id: 'cuatro-colinas',
      name: 'Cuatro Colinas Game Reserve',
      release: '10 Dec 2019',
      price: '7.99',
      description: 'Adds Cuatro Colinas reserve and several Iberian species.',
      content: ['Cuatro Colinas Game Reserve', 'New Animals: Iberian Wolf, Iberian Mouflon, Ronda Ibex, Southeastern Spanish Ibex, Beceite Ibex, Gredos Ibex']
    },
    {
      id: 'smoking-barrels',
      name: 'Smoking Barrels',
      release: '26 March 2020',
      price: '3.99',
      description: 'Adds a selection of new high-end weapons.',
      content: ['Hudzik .50 Caplock', 'M1 Iwaniec', 'Miller Model 1891']
    },
    {
      id: 'silver-ridge-peaks',
      name: 'Silver Ridge Peaks',
      release: '23 June 2020 (PC), 11 Aug 2020 (Console)',
      price: '7.99',
      description: 'Adds the Rocky Mountain Silver Ridge Peaks reserve and many new species.',
      content: ['Silver Ridge Peaks', 'New Animals: Rocky Mountain Elk, Mountain Lion, Mountain Goat, Rocky Mountain Bighorn Sheep, Merriam Turkey']
    },
    {
      id: 'remi-warren',
      name: 'Remi Warren',
      release: '11 Nov 2020',
      price: 'Free',
      description: 'Free DLC introducing Remi Warren character, clothing, and a free European Rabbit species.',
      content: ['Remi Warren Character and Clothing', 'Free Species: European Rabbit']
    },
    {
      id: 'te-awaroa',
      name: 'Te Awaroa National Park',
      release: '10 Dec 2020',
      price: '7.99',
      description: 'Adds Te Awaroa National Park (New Zealand) with new animals and reserve features.',
      content: ['Te Awaroa National Park', 'New Animals: Sika Deer, Chamois, Feral Goat, Feral Pig']
    },
    {
      id: 'bloodhound',
      name: 'Bloodhound',
      release: '30 March 2021',
      price: '3.99',
      description: 'Adds the Bloodhound companion for tracking injured prey.',
      content: ['Bloodhound companion', 'Rancho del Arroyo']
    },
    {
      id: 'rancho-del-arroyo',
      name: 'Rancho del Arroyo',
      release: '29 June 2021',
      price: '7.99',
      description: 'Adds the Rancho del Arroyo Western-themed reserve and several new animals.',
      content: ['Rancho del Arroyo', 'New animals: Antelope Jackrabbit, Collared Peccary, Mexican Bobcat, Ring-Necked Pheasant, Rio Grande Turkey']
    },
    {
      id: 'mississippi-acres',
      name: 'Mississippi Acres Preserve (07 Dec 2021)',
      release: '07 Dec 2021',
      price: '7.99',
      description: 'Adds the Mississippi Acres Preserve with wetland and pine forest habitats and new species.',
      content: ['Mississippi Acres Preserve', 'New animals: American Alligator, Bobwhite Quail, Common Raccoon, Eastern Cottontail Rabbit']
    },
    {
      id: 'modern-rifle-pack',
      name: 'Modern Rifle Pack',
      release: '22 February 2022',
      price: '3.99',
      description: 'Adds three modern rifles to the arsenal.',
      content: ['ZARZA-15 .22LR', 'ZARZA-15 .223', 'ZARZA-10 .308']
    },
    {
      id: 'revontuli-coast',
      name: 'Revontuli Coast',
      release: '28 June 2022',
      price: '7.99',
      description: 'Adds Revontuli Coast reserve with northern archipelago and new animals.',
      content: ['Revontuli Coast', 'New animals and features including Brown Bear and Moose']
    },
    {
      id: 'assorted-sidearms',
      name: 'Assorted Sidearms Pack',
      release: '27 Sep 2022',
      price: '3.99',
      description: 'Adds three versatile handguns.',
      content: ['.243 R Cuomo', '.45 Rolleston', '10mm Davani']
    },
    {
      id: 'new-england-mountains',
      name: 'New England Mountains',
      release: '06 Dec 2022',
      price: '7.79',
      description: 'Adds New England Mountains reserve with varied alpine and woodland habitats.',
      content: ['New England Mountains', 'New animal: Bobcat']
    },
    {
      id: 'new-england-veteran-cosmetic',
      name: 'New England Veteran Cosmetic Pack',
      release: '06 Dec 2022',
      price: '2.99',
      description: 'Weapon and equipment cosmetics inspired by New England Mountains.',
      content: ['Multiple paints and wraps']
    },
    {
      id: 'new-england-scout-pack',
      name: 'New England Scout Cosmetic Pack',
      release: '06 Dec 2022',
      price: 'Free',
      description: 'Free cosmetic items inspired by the New England Mountains.',
      content: ['Multiple paints and sprays']
    },
    {
      id: 'hirschfelden-veteran',
      name: 'Hirschfelden Veteran Cosmetic Pack',
      release: '14 Mar 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Hirschfelden reserve.',
      content: ['Multiple paints and sprays']
    },
    {
      id: 'hunter-power-pack',
      name: 'Hunter Power Pack',
      release: '14 Mar 2023',
      price: '3.99',
      description: 'Provides three unique bolt-action rifles for big-game hunting.',
      content: ['Tsurugi LRR .338', 'Malmer 7mm Magnum', 'Olsson Model 23 .308']
    },
    {
      id: 'layton-lake-cosmetic',
      name: 'Layton Lake Cosmetic Pack',
      release: '14 Mar 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Layton Lake Reserve.',
      content: ['Multiple paints, sprays, and wraps']
    },
    {
      id: 'emerald-coast-australia',
      name: 'Emerald Coast Australia',
      release: '20 Jun 2023',
      price: '7.99',
      description: 'Adds Australia reserve with iconic species like Saltwater Crocodile and Eastern Gray Kangaroo.',
      content: ['Emerald Coast Australia', 'New animals: Magpie Goose, Banteng, Saltwater Crocodile, Eastern Gray Kangaroo']
    },
    {
      id: 'vurhonga-cosmetic',
      name: 'Vurhonga Savanna Cosmetic Pack',
      release: '10 Oct 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Vurhonga Savanna.',
      content: ['Multiple paints and sprays']
    },
    {
      id: 'ambusher-pack',
      name: 'Ambusher Pack',
      release: '10 Oct 2023',
      price: '3.99',
      description: 'Includes electronic caller, lever-action rifle, and takedown recurve bow for ambush-style hunting.',
      content: ['Quist Red Pro Electronic Caller', 'Moradi Model 1894', 'Stenberg Takedown Recurve Bow']
    },
    {
      id: 'labrador-retriever',
      name: 'Labrador Retriever',
      release: '28 Nov 2023',
      price: '5.89',
      description: 'Adds the Labrador Retriever companion to help track game.',
      content: ['Labrador Retriever companion']
    },
    {
      id: 'yukon-valley-cosmetic',
      name: 'Yukon Valley Cosmetic Pack',
      release: '12 Dec 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Yukon Valley.',
      content: ['Multiple paints and wraps']
    },
    {
      id: 'cuatro-colinas-cosmetic',
      name: 'Cuatro Colinas Cosmetic Pack',
      release: '12 Dec 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Cuatro Colinas Game Reserve.',
      content: ['Multiple paints and wraps']
    },
    {
      id: 'silver-ridge-cosmetic',
      name: 'Silver Ridge Peaks Cosmetic Pack',
      release: '12 Dec 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Silver Ridge Peaks.',
      content: ['Multiple paints and wraps']
    },
    {
      id: 'te-awaroa-cosmetic',
      name: 'Te Awaroa Cosmetic Pack',
      release: '12 Dec 2023',
      price: '2.99',
      description: 'Cosmetics inspired by Te Awaroa National Park.',
      content: ['Multiple paints and wraps']
    },
    {
      id: 'high-caliber-weapon-pack',
      name: 'High Caliber Weapon Pack',
      release: '12 Mar 2024',
      price: '3.99',
      description: 'Adds three top-grade weapons and cosmetics.',
      content: ['Arzyna .300 Mag Tactical', '.45-70 Jernberg Superior', 'Strandberg 10SA Executive']
    },
    {
      id: 'sundarpatan-nepal',
      name: 'Sundarpatan Nepal Hunting Reserve',
      release: '18 June 2024',
      price: '7.99',
      description: 'Adds Sundarpatan Nepal reserve with many new animals including Snow Leopard and Wild Yak.',
      content: ['Sundarpatan Nepal Hunting Reserve', 'New animals: Woolly Hare, Snow Leopard, Wild Yak, Bengal Tiger']
    },
    {
      id: 'scopes-crosshairs',
      name: 'Scopes & Crosshairs Pack',
      release: '24 Sept 2024',
      price: '3.99',
      description: 'Adds precision scopes and customizable reticles with night vision support.',
      content: ['Angler 4-8x100 Night Vision Rifle Scope', 'Odin 4-12x33 Rifle Scope']
    },
    {
      id: 'salzwiesen-park',
      name: 'Salzwiesen Park',
      release: '3 Dec 2024',
      price: 'TBD',
      description: 'Salt marsh habitat reserve with waterfowl and new Great Ones.',
      content: ['Salzwiesen Park', 'New animals: Ferruginous Duck, Gadwall']
    },
    {
      id: 'hunters-choice-bolt-action',
      name: "Hunters' Choice: Bolt-Action Rifle Pack",
      release: '3 Dec 2024',
      price: 'TBD',
      description: 'Bolt-action rifle pack made in collaboration with the community.',
      content: ['Vallgarda .375', 'Johansson .450', 'Fors Elite .300']
    },
    {
      id: 'german-pointer',
      name: 'German Shorthaired Pointer',
      release: '3 Dec 2024',
      price: 'TBD',
      description: 'Adds the German Shorthaired Pointer companion.',
      content: ['German Shorthaired Pointer companion']
    },
    {
      id: 'rapid-hunt-rifle-pack',
      name: 'Rapid Hunt Rifle Pack',
      release: '25 Mar 2025',
      price: 'TBD',
      description: 'Adds three semi-automatic rifles to the game.',
      content: ['Perry .308', 'Hansson .30-06', 'Quist Reaper 7.62x39']
    }
  ];

  // All linking removed: content is rendered as plain text

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">DLC & Expansions</h1>

      <p className="text-gray-700 mb-4">This page lists official add-ons and downloadable content (DLC) for the game. Click an entry to view details or the trailer when available.</p>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">DLC name & release date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price ($/€)</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Content</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {dlcs.map(d => (
              <tr key={d.id} className="align-top">
                <td className="px-4 py-3 text-sm text-gray-800">
                  <div className="font-semibold">
                    {d.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{d.release}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">{d.price}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{d.description}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <ul className="list-disc list-inside">
                    {d.content.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-6">
        <h3 className="font-semibold">Want more entries?</h3>
        <p className="text-sm text-gray-700 mt-1">If you want additional DLC entries or corrections, provide the canonical name, release date, price, and content list and I will add them.</p>
      </div>
    </div>
  );
}
