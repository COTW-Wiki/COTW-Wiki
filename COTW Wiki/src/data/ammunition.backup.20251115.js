// Backup copy of src/data/ammunition.js (2025-11-15)
// This is an exact snapshot created before canonicalization edits.

// Auto-generated initial ammunition batch (8 items) imported from fandom (structured facts only)
// Fields: id (slug), name, category, description (short factual), images, value, weight, stats, relatedIds

const ammunition = [
  {
    id: ".223_Polymer-Tip_Bullet",
    name: ".223 Polymer-Tip Bullet",
    category: "ammunition",
    description: "High-velocity .223 polymer-tip round prioritizing penetration; suitable for small-to-medium game.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/e/e2/223PolymerTipBullet.png/revision/latest?cb=20210228213204"
    ],
    value: 350,
    weight: 0.01,
    stats: {
      range: "150 m",
      penetration: 20,
      expansion: 3,
      class: "2-4"
    },
    relatedIds: [".223_Docent","ZARZA-15_.223"]
  },

  {
    id: ".270_Polymer-Tip_Bullet",
    name: ".270 Polymer-Tip Bullet",
    category: "ammunition",
    description: ".270 polymer-tip round with strong penetration and good ballistics for medium game.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/6/66/270PolymerTipBullet.png/revision/latest?cb=20210228221320"
    ],
    value: 700,
    weight: 0.03,
    stats: {
      range: "150 m",
      penetration: 35,
      expansion: 5,
      class: "4-8"
    },
    relatedIds: [".270_Huntsman"]
  },

  {
    id: ".308_Polymer-Tip_Bullet",
    name: ".308 Polymer-Tip Bullet",
    category: "ammunition",
    description: ".308 polymer-tip; balanced cartridge with high penetration and accuracy for a wide range of game.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/0/0c/308PolymerTipBullet.png/revision/latest?cb=20220417184311"
    ],
    value: 850,
    weight: 0.03,
    stats: {
      range: "150 m",
      penetration: 44,
      expansion: 13,
      class: "4-8"
    },
    relatedIds: ["ZARZA-10_.308", "Olsson_Model_23_.308", "Perry_.308"]
  },

  {
    id: ".22-250_Polymer-Tip_Bullet",
    name: ".22-250 Polymer-Tip Bullet",
    category: "ammunition",
    description: ".22-250 polymer-tip built for deep penetration and flat trajectories; commonly used on varmint/medium targets.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/b/b4/22-250Polymer-TipBullet.png/revision/latest?cb=20240607153225"
    ],
    value: 375,
    weight: 0.01,
    stats: {
      range: "150 m",
      penetration: 25,
      expansion: 3,
      class: "2-4"
    },
    relatedIds: ["Zagan_Varminter_.22-250"]
  },

  {
    id: "12_GA_Slug",
    name: "12 GA Slug",
    category: "ammunition",
    description: "Single-projectile 12-gauge slug — longer range and much higher stopping power than bird/buckshot.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/a/a1/12GASlug.png/revision/latest?cb=20210325191827"
    ],
    value: 880,
    weight: 0.05,
    stats: {
      range: "50 m",
      penetration: 40,
      expansion: 19,
      class: "4-8"
    },
    relatedIds: ["Cacciatore_12G","Caversham_Steward_12G"]
  },

  {
    id: "12_GA_Birdshot",
    name: "12 GA Birdshot",
    category: "ammunition",
    description: "12-gauge birdshot: many small pellets for short-range small-game/bird hunting.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/f/f0/12GABirdshot.png/revision/latest?cb=20210325190925"
    ],
    value: 180,
    weight: 0.05,
    stats: {
      range: "25 m",
      penetration: 0,
      expansion: 0,
      class: "1"
    },
    relatedIds: ["Cacciatore_12G","Caversham_Steward_12G"]
  },

  {
    id: "20_GA_Slug",
    name: "20 GA Slug",
    category: "ammunition",
    description: "20-gauge slug: single projectile for medium targets; balances weight and stopping power.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/8/81/20GASlug.png/revision/latest?cb=20210325194132"
    ],
    value: 800,
    weight: 0.05,
    stats: {
      range: "50 m",
      penetration: 33,
      expansion: 16,
      class: "4-7"
    },
    relatedIds: ["Strecker_SxS_20G_Scarlett", "Nordin_20SA_Serviceman", "Strecker_SxS_20G", "Nordin_20SA"]
  },

  {
    id: "300_gr._Small_Game_Point_Arrow",
    name: "300 gr. Small Game Point Arrow",
    category: "ammunition",
    description: "Light small-game arrow for compound bows; high velocity and easy retrieval.",
    images: [
      "https://static.wikia.nocookie.net/thehuntercotw/images/e/eb/300GrSmallGamePointArrow.png/revision/latest?cb=20210325200424"
    ],
    value: 530,
    weight: 0.06,
    stats: {
      range: "20 m",
      penetration: 10,
      expansion: 0,
      class: "1-2"
    },
    relatedIds: ["Compound_Bows", "Bearclaw_Lite_CB-60", "Hawk_Edge_CB-70", "Koter_CB-65_Bow", "Razorback_Lite_CB-60", "Stenberg_Takedown_Recurve_Bow"]
  }
  ,
  {
    id: ".22LR_Truncated_Cone",
    name: ".22LR Truncated Cone",
    category: "ammunition",
    description: "Light .22LR truncated-cone round used for small game and starter ammo.",
    images: [],
    value: 250,
    weight: 0.01,
    stats: { range: "100 m", penetration: 1, expansion: 17, class: "1" },
    relatedIds: ["Virant_.22LR", "ZARZA-15_.22LR", "Andersson_.22LR"]
  },

  {
    id: ".22H_Polymer-Tip",
    name: ".22H Polymer-Tip",
    category: "ammunition",
    description: "Polymer-tip .22H round with improved ballistics for small-to-medium targets.",
    images: [],
    value: 300,
    weight: 0.05,
    stats: { range: "150 m", penetration: 15, expansion: 3, class: "1-2" },
    relatedIds: ["Kullman_.22H"]
  },

  {
    id: ".243_Polymer-Tip",
    name: ".243 Polymer-Tip",
    category: "ammunition",
    description: ".243 polymer-tip round suitable for small-to-medium game with balanced penetration and expansion.",
    images: [],
    value: 530,
    weight: 0.02,
    stats: { range: "150 m", penetration: 30, expansion: 4, class: "2-6" },
    relatedIds: ["Ranger_.243", ".243_R._Cuomo"]
  },

  {
    id: ".30-06_Polymer-Tip",
    name: ".30-06 Polymer-Tip",
    category: "ammunition",
    description: ".30-06 polymer-tip; powerful rifle round for larger game and longer ranges.",
    images: [],
    value: 850,
    weight: 0.03,
    stats: { range: "150 m", penetration: 45, expansion: 13, class: "4-8" },
    relatedIds: ["Eckers_.30-06", "M1_Iwaniec", "Hansson_.30-06"]
  },

  {
    id: ".300_Magnum_Polymer-Tip",
    name: ".300 Magnum Polymer-Tip",
    category: "ammunition",
    description: "High-power .300 magnum polymer-tip for very large game and long-range shots.",
    images: [],
    value: 950,
    weight: 0.03,
    stats: { range: "150 m", penetration: 42, expansion: 14, class: "7-9" },
    relatedIds: [".300_Canning_Magnum", "Arzyna_.300_Mag_Tactical"]
  },

  {
    id: ".303_British_Polymer-Tip",
    name: ".303 British Polymer-Tip",
    category: "ammunition",
    description: ".303 polymer-tip offering solid performance on medium-large game.",
    images: [],
    value: 880,
    weight: 0.04,
    stats: { range: "150 m", penetration: 40, expansion: 12, class: "4-8" },
    relatedIds: ["F.L._Sporter_.303"]
  },

  {
    id: ".338_Mag_Polymer-Tip",
    name: ".338 Mag. Polymer-Tip",
    category: "ammunition",
    description: ".338 magnum polymer-tip for the largest game; very high penetration and stopping power.",
    images: [],
    value: 1050,
    weight: 0.05,
    stats: { range: "150 m", penetration: 45, expansion: 16, class: "7-9" },
    relatedIds: ["Rangemaster_338", "Tsurugi_LRR_.338"]
  },

  {
    id: ".45-70_Soft-Point_Flat_Nose",
    name: ".45-70 Soft-Point Flat Nose",
    category: "ammunition",
    description: ".45-70 soft-point flat-nose: heavy round for close/short-range stopping power on large game.",
    images: [],
    value: 390,
    weight: 0.03,
    stats: { range: "75 m", penetration: 40, expansion: 6, class: "4-9" },
    relatedIds: ["Coachmate_Lever_.45-70", ".45-70_Jernberg_Superior"]
  },

  {
    id: "6.5mm_Polymer-Tip",
    name: "6.5mm Polymer-Tip",
    category: "ammunition",
    description: "6.5mm polymer-tip with good long-range ballistics and moderate recoil.",
    images: [],
    value: 650,
    weight: 0.03,
    stats: { range: "200 m", penetration: 40, expansion: 4, class: "4-8" },
    relatedIds: ["Mårtensson_6.5mm"]
  },

  {
    id: "7.62x35mm_Polymer-Tip",
    name: "7.62x35mm Polymer-Tip",
    category: "ammunition",
    description: "Intermediate 7.62x35 polymer-tip round for mid-range targets.",
    images: [],
    value: 530,
    weight: 0.01,
    stats: { range: "150 m", penetration: 32, expansion: 7, class: "3-6" },
    relatedIds: ["Fors_Elite_.300"]
  },

  {
    id: "7.62x39mm_Polymer-Tip",
    name: "7.62x39mm Polymer-Tip",
    category: "ammunition",
    description: "Common intermediate rifle round in the game; good for short-to-mid engagements.",
    images: [],
    value: 300,
    weight: 0.01,
    stats: { range: "150 m", penetration: 34, expansion: 5, class: "2-6" },
    relatedIds: ["Quist_Reaper_7.62x39"]
  },

  {
    id: "7.62x54R_Soft-Point",
    name: "7.62x54R Soft-Point",
    category: "ammunition",
    description: "Classic 7.62x54R soft-point round used on several rifles in the game.",
    images: [],
    value: 380,
    weight: 0.01,
    stats: { range: "150 m", penetration: 15, expansion: 17, class: "3-7" },
    relatedIds: ["Solokhin_MN1890"]
  },

  {
    id: "7mm_Mag_Polymer-Tip",
    name: "7mm Magnum Polymer-Tip",
    category: "ammunition",
    description: "7mm magnum polymer-tip: high-performance magnum round for large game.",
    images: [],
    value: 880,
    weight: 0.04,
    stats: { range: "150 m", penetration: 40, expansion: 12, class: "4-9" },
    relatedIds: ["7mm_Regent_Magnum", "Malmer_7mm_Magnum"]
  },

  {
    id: "9.3x74R_Polymer-Tip",
    name: "9.3x74R Polymer-Tip",
    category: "ammunition",
    description: "Large-caliber 9.3x74R polymer-tip for tough, heavy game.",
    images: [],
    value: 880,
    weight: 0.01,
    stats: { range: "150 m", penetration: 40, expansion: 12, class: "5-9" },
    relatedIds: ["Grelck_Drilling_Rifle"]
  },

  {
    id: ".357_Flat_Nose_Hard-Cast",
    name: ".357 Flat Nose Hard-Cast",
    category: "ammunition",
    description: ".357 hard-cast flat-nose handgun round for close-range stopping.",
    images: [],
    value: 350,
    weight: 0.01,
    stats: { range: "50 m", penetration: 50, expansion: 4, class: "2-6" },
    relatedIds: ["Focoso_357"]
  },

  {
    id: ".44_Flat_Nose_Hard-Cast",
    name: ".44 Flat Nose Hard-Cast",
    category: "ammunition",
    description: ".44 hard-cast handgun round with high stopping power for close targets.",
    images: [],
    value: 530,
    weight: 0.02,
    stats: { range: "50 m", penetration: 70, expansion: 16, class: "3-8" },
    relatedIds: ["Moradi_Model_1894", ".44_Panther_Magnum"]
  },

  {
    id: "10mm_Auto_Hard_Cast",
    name: "10mm Auto Hard Cast Flat Nose",
    category: "ammunition",
    description: "10mm hard-cast flat-nose handgun round — versatile close-range option.",
    images: [],
    value: 280,
    weight: 0.01,
    stats: { range: "50 m", penetration: 50, expansion: 8, class: "2-6" },
    relatedIds: ["10mm_Davani"]
  },

  {
    id: ".410_Birdshot",
    name: ".410 Birdshot",
    category: "ammunition",
    description: ".410 birdshot: very short-range pellets for small fast-moving targets.",
    images: [],
    value: 200,
    weight: 0.05,
    stats: { range: "25 m", penetration: 0, expansion: 0, class: "1" },
    relatedIds: ["Mangiafico_410/45_Colt"]
  },
  {
    id: ".410_Buckshot",
    name: ".410 Buckshot",
    category: "ammunition",
    description: ".410 buckshot: heavier pellets for increased stopping power at short range.",
    images: [],
    value: 500,
    weight: 0.05,
    stats: { range: "25 m", penetration: 4, expansion: 0, class: "2-4" },
    relatedIds: ["Giddings_SSC_.410_Coyote"]
  },
  {
    id: ".410_Slug",
    name: ".410 Slug",
    category: "ammunition",
    description: ".410 slug: single-projectile option for the .410 bore with limited range compared to larger slugs.",
    images: [],
    value: 800,
    weight: 0.05,
    stats: { range: "50 m", penetration: 33, expansion: 16, class: "4-7" },
    relatedIds: ["Giddings_SSC_.410_Coyote"]
  },

  {
    id: "350_Grain_Broadhead_Traditional_Arrow",
    name: "350 Grain Broadhead Traditional Arrow",
    category: "ammunition",
    description: "Traditional broadhead arrow for bows (350 gr).",
    images: [],
    value: 500,
    weight: 0.07,
    stats: { range: "20 m", penetration: 15, expansion: 0, class: "1-3" },
    relatedIds: ["Alexander_Longbow", "Houyi_Recurve_Bow"]
  },

  {
    id: "420_gr._Broadhead_Arrow",
    name: "420 gr. Broadhead Arrow",
    category: "ammunition",
    description: "Heavier broadhead arrow for larger targets.",
    images: [],
    value: 700,
    weight: 0.07,
    stats: { range: "50 m", penetration: 50, expansion: 0, class: "2-7" },
    relatedIds: ["Bearclaw_Lite_CB-60", "Hawk_Edge_CB-70", "Koter_CB-65_Bow", "Razorback_Lite_CB-60", "Stenberg_Takedown_Recurve_Bow"]
  },

  {
    id: "600_gr._Broadhead_Arrow",
    name: "600 gr. Broadhead Arrow",
    category: "ammunition",
    description: "Very heavy broadhead arrow for the largest bow-huntable targets.",
    images: [],
    value: 880,
    weight: 0.08,
    stats: { range: "90 m", penetration: 90, expansion: 0, class: "7-9" },
    relatedIds: ["Bearclaw_Lite_CB-60", "Hawk_Edge_CB-70", "Koter_CB-65_Bow", "Razorback_Lite_CB-60", "Stenberg_Takedown_Recurve_Bow"]
  }
  ,
  {
    id: ".30-30_Soft-Point_Round_Nose",
    name: ".30-30 Soft-Point Round Nose",
    category: "ammunition",
    description: "Traditional .30-30 soft-point round (round-nose) used for short to medium range hunting.",
    images: [],
    value: 220,
    weight: 0.02,
    stats: { range: "75 m", penetration: 35, expansion: 4, class: "2-6" },
    relatedIds: ["Whitlock_Model_86", "Laperriere_Outrider_.30-30"]
  },
  {
    id: ".30-30_Hollow-Point",
    name: ".30-30 Hollow-Point",
    category: "ammunition",
    description: "Hollow-point variant of the .30-30 for increased expansion at shorter ranges.",
    images: [],
    value: 480,
    weight: 0.02,
    stats: { range: "75 m", penetration: 17, expansion: 17, class: "2-6" },
    relatedIds: ["Whitlock_Model_86", "Laperriere_Outrider_.30-30"]
  }, 
  {
    id: ".470_Nitro_Express_FMJ",
    name: ".470 Nitro Express Full Metal Jacket",
    category: "ammunition",
    description: "High-caliber full metal jacket round used for largest dangerous game; very high penetration.",
    images: [],
    value: 2660,
    weight: 0.03,
    stats: { range: "75 m", penetration: 100, expansion: 23, class: "9" },
    relatedIds: ["King_470DB"]
  },
  {
    id: ".470_Nitro_Express_Soft-Point",
    name: ".470 Nitro Express Soft-Point",
    category: "ammunition",
    description: "Soft-point variant of the .470 Nitro Express for large-game expansion.",
    images: [],
    value: 2000,
    weight: 0.03,
    stats: { range: "75 m", penetration: 25, expansion: 100, class: "9" },
    relatedIds: ["King_470DB"]
  },
  {
    id: ".50_Ball_Minié",
    name: ".50 Ball (Minié Ball)",
    category: "ammunition",
    description: "Historic .50 calibre minié ball and round-ball projectiles used in muzzleloaders.",
    images: [],
    value: 300,
    weight: 0.01,
    stats: { range: "100 m", penetration: 40, expansion: 30, class: "3-7" },
    relatedIds: ["Hudzik_.50_Caplock", "Curman_.50_Inline"]
  },
  {
    id: ".50_Ball_Round",
    name: ".50 Round Ball",
    category: "ammunition",
    description: "Round ball .50 caliber ammunition for muzzle-loading firearms.",
    images: [],
    value: 300,
    weight: 0.01,
    stats: { range: "100 m", penetration: 30, expansion: 30, class: "3-7" },
    relatedIds: ["Hudzik_.50_Caplock", "Curman_.50_Inline"]
  },
  {
    id: ".50_Polymer-Tip_Sabot",
    name: ".50 Polymer-Tip Sabot",
    category: "ammunition",
    description: "Sabot-style polymer-tip .50 projectile for very high-penetration long-range shots.",
    images: [],
    value: 500,
    weight: 0.01,
    stats: { range: "200 m", penetration: 42, expansion: 20, class: "4-8" },
    relatedIds: ["Curman_.50_Inline"]
  },
  {
    id: ".50_Hollow-Point_Sabot",
    name: ".50 Hollow-Point Sabot",
    category: "ammunition",
    description: "Hollow-point sabot .50 variant for greater expansion at impact.",
    images: [],
    value: 450,
    weight: 0.01,
    stats: { range: "200 m", penetration: 20, expansion: 60, class: "4-8" },
    relatedIds: ["Curman_.50_Inline"]
  },
  {
    id: ".243_Soft-Point",
    name: ".243 Soft-Point",
    category: "ammunition",
    description: "Soft-point variant of the .243 round focused on expansion for small-to-medium game.",
    images: [],
    value: 440,
    weight: 0.02,
    stats: { range: "150 m", penetration: 15, expansion: 17, class: "2-6" },
    relatedIds: ["Ranger_.243", ".243_R._Cuomo"]
  },
  {
    id: ".270_Soft-Point",
    name: ".270 Soft-Point",
    category: "ammunition",
    description: "Soft-point .270 ammunition for improved expansion on medium game.",
    images: [],
    value: 440,
    weight: 0.03,
    stats: { range: "150 m", penetration: 17, expansion: 24, class: "4-8" },
    relatedIds: [".270_Huntsman"]
  },
  {
    id: ".30-06_Soft-Point",
    name: ".30-06 Soft-Point",
    category: "ammunition",
    description: "Soft-point variant of .30-06 for larger game with strong expansion.",
    images: [],
    value: 590,
    weight: 0.03,
    stats: { range: "150 m", penetration: 19, expansion: 53, class: "4-8" },
    relatedIds: ["Eckers_.30-06", "M1_Iwaniec", "Hansson_.30-06"]
  },
  {
    id: ".300_Magnum_Soft-Point",
    name: ".300 Magnum Soft-Point",
    category: "ammunition",
    description: "Soft-point variant of .300 Magnum for heavy-game expansion.",
    images: [],
    value: 720,
    weight: 0.03,
    stats: { range: "150 m", penetration: 21, expansion: 60, class: "7-9" },
    relatedIds: [".300_Canning_Magnum", "Arzyna_.300_Mag_Tactical"]
  },
  {
    id: ".303_British_Soft-Point",
    name: ".303 British Soft-Point",
    category: "ammunition",
    description: "Soft-point .303 variant used for medium-large game.",
    images: [],
    value: 610,
    weight: 0.04,
    stats: { range: "150 m", penetration: 20, expansion: 53, class: "4-8" },
    relatedIds: ["F.L._Sporter_.303"]
  },
  {
    id: ".308_Soft-Point",
    name: ".308 Soft-Point",
    category: "ammunition",
    description: "Soft-point .308 ammunition focused on terminal expansion.",
    images: [],
    value: 690,
    weight: 0.03,
    stats: { range: "150 m", penetration: 19, expansion: 52, class: "4-8" },
    relatedIds: ["ZARZA-10_.308", "Olsson_Model_23_.308", "Perry_.308"]
  },
  {
    id: ".338_Mag_Soft-Point",
    name: ".338 Mag Soft-Point",
    category: "ammunition",
    description: "Soft-point .338 magnum for extreme stopping power at medium-long ranges.",
    images: [],
    value: 790,
    weight: 0.05,
    stats: { range: "150 m", penetration: 22, expansion: 68, class: "7-9" },
    relatedIds: ["Rangemaster_338", "Tsurugi_LRR_.338"]
  },
  {
    id: "6.5mm_Soft-Point",
    name: "6.5mm Soft-Point",
    category: "ammunition",
    description: "Soft-point 6.5mm round offering higher expansion for medium-large targets.",
    images: [],
    value: 400,
    weight: 0.03,
    stats: { range: "200 m", penetration: 20, expansion: 20, class: "4-8" },
    relatedIds: ["Mårtensson_6.5mm"]
  },
  {
    id: "7.62x35mm_Soft-Point",
    name: "7.62x35mm Soft-Point",
    category: "ammunition",
    description: "Soft-point variant of 7.62x35 for lower penetration and higher expansion.",
    images: [],
    value: 350,
    weight: 0.01,
    stats: { range: "150 m", penetration: 15, expansion: 21, class: "3-6" },
    relatedIds: ["Fors_Elite_.300"]
  },
  {
    id: "7.62x39mm_Soft-Point",
    name: "7.62x39mm Soft-Point",
    category: "ammunition",
    description: "Soft-point 7.62x39 for increased expansion on short-mid range targets.",
    images: [],
    value: 200,
    weight: 0.01,
    stats: { range: "150 m", penetration: 16, expansion: 20, class: "2-6" },
    relatedIds: ["Quist_Reaper_7.62x39"]
  },
  {
    id: "7mm_Mag_Soft-Point",
    name: "7mm Mag Soft-Point",
    category: "ammunition",
    description: "Soft-point 7mm magnum variant for improved expansion on large game.",
    images: [],
    value: 720,
    weight: 0.04,
    stats: { range: "150 m", penetration: null, expansion: null, class: "4-9" },
    relatedIds: ["7mm_Regent_Magnum", "Malmer_7mm_Magnum"]
  },
  {
    id: "9.3x74R_Soft-Point",
    name: "9.3x74R Soft-Point",
    category: "ammunition",
    description: "Soft-point 9.3x74R round for heavy game with strong expansion.",
    images: [],
    value: 610,
    weight: 0.01,
    stats: { range: "150 m", penetration: 20, expansion: 53, class: "5-9" },
    relatedIds: ["Grelck_Drilling_Rifle"]
  },
  {
    id: ".357_Jacketed_Hollow-Point",
    name: ".357 Jacketed Hollow-Point",
    category: "ammunition",
    description: "Jacketed hollow-point .357 handgun round for increased expansion.",
    images: [],
    value: 220,
    weight: 0.01,
    stats: { range: "50 m", penetration: 12, expansion: 18, class: "2-6" },
    relatedIds: ["Focoso_357"]
  },
  {
    id: ".44_Jacketed_Hollow-Point",
    name: ".44 Jacketed Hollow-Point",
    category: "ammunition",
    description: "Jacketed hollow-point variant for .44 handguns for improved terminal performance.",
    images: [],
    value: 260,
    weight: 0.02,
    stats: { range: "50 m", penetration: 17, expansion: 70, class: "3-8" },
    relatedIds: ["Moradi_Model_1894", ".44_Panther_Magnum"]
  },
  {
    id: ".45_Colt_FMJ",
    name: ".45 Colt Full Metal Jacket",
    category: "ammunition",
    description: "Full metal jacket .45 Colt round (less expansion, penetration-focused).",
    images: [],
    value: 600,
    weight: 0.03,
    stats: { range: "50 m", penetration: 55, expansion: 6, class: "2-5" },
    relatedIds: [".45_Rolleston", "Mangiafico_410/45_Colt"]
  },
  {
    id: ".45_Colt_Flat_Nose_Hard-Cast",
    name: ".45 Colt Flat Nose Hard-Cast",
    category: "ammunition",
    description: "Hard-cast flat-nose .45 Colt ammunition suited for close-range stopping power.",
    images: [],
    value: 530,
    weight: 0.02,
    stats: { range: "50 m", penetration: 17, expansion: 70, class: "2-5" },
    relatedIds: [".45_Rolleston", "Mangiafico_410/45_Colt"]
  },
  {
    id: ".454_Jacketed_Hollow-Point",
    name: ".454 Jacketed Hollow-Point",
    category: "ammunition",
    description: "High-performance hollow-point .454 handgun round.",
    images: [],
    value: 440,
    weight: 0.03,
    stats: { range: "50 m", penetration: 25, expansion: 100, class: "4-9" },
    relatedIds: ["Rhino_454", "Sundberg_454"]
  },
  {
    id: ".454_Flat_Nose_Hard-Cast",
    name: ".454 Flat Nose Hard-Cast",
    category: "ammunition",
    description: "Hard-cast flat-nose .454 handgun round with very high penetration for close-range stopping power.",
    images: [],
    value: 770,
    weight: 0.03,
    stats: { range: "50 m", penetration: 100, expansion: 23, class: "4-9" },
    relatedIds: ["Rhino_454", "Sundberg_454"]
  },
  {
    id: "10mm_Auto_Jacketed_Hollow-Point",
    name: "10mm Auto Jacketed Hollow-Point",
    category: "ammunition",
    description: "Jacketed hollow-point 10mm for handguns where expansion is desired.",
    images: [],
    value: 350,
    weight: 0.01,
    stats: { range: "50 m", penetration: 12, expansion: 36, class: "2-6" },
    relatedIds: ["10mm_Davani"]
  },
  {
    id: "20_GA_Birdshot",
    name: "20 GA Birdshot",
    category: "ammunition",
    description: "20 gauge birdshot for short-range bird hunting.",
    images: [],
    value: 150,
    weight: 0.05,
    stats: { range: "25 m", penetration: 0, expansion: 0, class: "1" },
    relatedIds: ["Strecker_SxS_20G", "Nordin_20SA"]
  },
  {
    id: "20_GA_Buckshot",
    name: "20 GA Buckshot",
    category: "ammunition",
    description: "20 gauge buckshot for increased pellet mass and stopping power.",
    images: [],
    value: 500,
    weight: 0.05,
    stats: { range: "25 m", penetration: 4, expansion: 0, class: "2-5" },
    relatedIds: ["Strecker_SxS_20G", "Nordin_20SA"]
  },
  {
    id: "16_GA_Birdshot",
    name: "16 GA Birdshot",
    category: "ammunition",
    description: "16 gauge birdshot for small-game hunting at close ranges.",
    images: [],
    value: 180,
    weight: 0.05,
    stats: { range: "25 m", penetration: 0, expansion: 0, class: "1" },
    relatedIds: ["Couso_Model_1897", "Grelck_Drilling_Rifle"]
  },
  {
    id: "16_GA_Buckshot",
    name: "16 GA Buckshot",
    category: "ammunition",
    description: "16 gauge buckshot for medium-range pellet effect.",
    images: [],
    value: 530,
    weight: 0.05,
    stats: { range: "25 m", penetration: 5, expansion: 0, class: "4-7" },
    relatedIds: ["Couso_Model_1897", "Grelck_Drilling_Rifle"]
  },
  {
    id: "10_GA_Plastic_Birdshot",
    name: "10 GA Plastic Birdshot",
    category: "ammunition",
    description: "10 gauge plastic-hulled birdshot for short-range small-game.",
    images: [],
    value: 200,
    weight: 0.05,
    stats: { range: "25 m", penetration: 0, expansion: 0, class: "1-2" },
    relatedIds: ["Strandberg_10SA_Executive", "Gopi_10G_Grand"]
  },
  {
    id: "10_GA_Brass_Birdshot",
    name: "10 GA Brass Birdshot",
    category: "ammunition",
    description: "10 gauge brass-hulled birdshot for short-range small-game (brass-hulled).",
    images: [],
    value: 200,
    weight: 0.05,
    stats: { range: "25 m", penetration: 0, expansion: 0, class: "1-2" },
    relatedIds: ["Miller_Model_1891"]
  },
  {
    id: "10_GA_Brass_Buckshot",
    name: "10 GA Brass Buckshot",
    category: "ammunition",
    description: "10 gauge brass-hulled buckshot for increased pellet mass and stopping power.",
    images: [],
    value: 600,
    weight: 0.05,
    stats: { range: "25 m", penetration: 5, expansion: 0, class: "4-7" },
    relatedIds: ["Miller_Model_1891"]
  },
  {
    id: "10_GA_Plastic_Buckshot",
    name: "10 GA Plastic Buckshot",
    category: "ammunition",
    description: "10 gauge plastic buckshot offering heavy pellet loads for close encounters.",
    images: [],
    value: 600,
    weight: 0.05,
    stats: { range: "25 m", penetration: 5, expansion: 0, class: "4-7" },
    relatedIds: ["Strandberg_10SA_Executive", "Gopi_10G_Grand"]
  },
  {
    id: "12_GA_Buckshot",
    name: "12 GA Buckshot",
    category: "ammunition",
    description: "12 gauge buckshot — multiple large pellets for close-range stopping power.",
    images: [],
    value: 530,
    weight: 0.05,
    stats: { range: "25 m", penetration: 5, expansion: 0, class: "2-5" },
    relatedIds: ["Cacciatore_12G", "Caversham_Steward_12G"]
  },
  {
    id: "540_Grain_Broadhead",
    name: "540 Grain Broadhead Traditional Arrow",
    category: "ammunition",
    description: "540 gr broadhead arrow for larger bow-huntable targets.",
    images: [],
    value: 750,
    weight: 0.08,
    stats: { range: "75 m", penetration: 75, expansion: 0, class: "4-7" },
    relatedIds: ["Alexander_Longbow", "Houyi_Recurve_Bow"]
  },
  {
    id: "700_Grain_Broadhead",
    name: "700 Grain Broadhead Traditional Arrow",
    category: "ammunition",
    description: "700 gr broadhead arrow for the heaviest bow hunting requirements.",
    images: [],
    value: 900,
    weight: 0.09,
    stats: { range: "90 m", penetration: 90, expansion: 0, class: "8-9" },
    relatedIds: ["Alexander_Longbow", "Houyi_Recurve_Bow"]
  }
  ,
  {
    id: "300_gr._Small_Game_Point_Bolt",
    name: "300 gr. Small Game Point Bolt",
    category: "ammunition",
    description: "Crossbow bolt: 300 gr small-game point bolt for crossbows.",
    images: [],
    value: 600,
    weight: 0.06,
    stats: { range: "30 m", penetration: 10, expansion: 0, class: "1-2" },
    relatedIds: ["Crossbows", "Crosspoint_CB-165"]
  },
  {
    id: "420_gr._Broadhead_Bolt",
    name: "420 gr. Broadhead Bolt",
    category: "ammunition",
    description: "Crossbow bolt: 420 gr broadhead bolt for larger crossbow targets.",
    images: [],
    value: 770,
    weight: 0.07,
    stats: { range: "50 m", penetration: 50, expansion: 0, class: "2-7" },
    relatedIds: ["Crossbows", "Crosspoint_CB-165"]
  },
  {
    id: "600_gr._Broadhead_Bolt",
    name: "600 gr. Broadhead Bolt",
    category: "ammunition",
    description: "Crossbow bolt: 600 gr broadhead bolt for the largest crossbow hunts.",
    images: [],
    value: 950,
    weight: 0.08,
    stats: { range: "90 m", penetration: 90, expansion: 0, class: "7-9" },
    relatedIds: ["Crossbows", "Crosspoint_CB-165"]
  }
  ,
  {
    id: "10_GA_Brass_Slug",
    name: "10 GA Brass Slug",
    category: "ammunition",
    description: "10-gauge brass-hulled slug: single projectile for medium targets.",
    images: [],
    value: 950,
    weight: 0.05,
    stats: { range: "50 m", penetration: 45, expansion: 22, class: "6-9" },
    relatedIds: ["Miller_Model_1891"]
  },
  {
    id: "10_GA_Plastic_Slug",
    name: "10 GA Plastic Slug",
    category: "ammunition",
    description: "10-gauge plastic-hulled slug: single projectile for medium targets.",
    images: [],
    value: 950,
    weight: 0.05,
    stats: { range: "50 m", penetration: 45, expansion: 22, class: "6-9" },
    relatedIds: ["Strandberg_10SA_Executive", "Gopi_10G_Grand"]
  },
  {
    id: "16_GA_Slug",
    name: "16 GA Slug",
    category: "ammunition",
    description: "16-gauge slug: single projectile for medium targets.",
    images: [],
    value: 880,
    weight: 0.05,
    stats: { range: "50 m", penetration: 37, expansion: 16, class: "4-7" },
    relatedIds: ["Couso_Model_1897", "Grelck_Drilling_Rifle"]
  }
];

export const ammo = ammunition;
export default ammunition;
