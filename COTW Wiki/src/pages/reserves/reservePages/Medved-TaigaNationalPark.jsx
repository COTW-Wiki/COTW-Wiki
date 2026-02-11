import React from 'react';
import { Link } from 'react-router-dom';
// --- IMPORTS ---
// Component placeholders (Adjust paths as necessary)
import MedvedHuntableAnimalsTable from '../../../components/MedvedTaigaHuntableAnimalsTable'; 
import GallerySlideshow from '../../../components/GallerySlideshow';

// Image Assets (Placeholders based on your project structure)
import MedvedMapImage from '../../../assets/Medved_logo-background.webp'; // The circular logo from Screenshot 1
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import medvedLogo from '../../../assets/Medved_taiga-removebg-preview.png';
import '../Reserves.css';

// Gallery placeholders
import m1 from '../../../assets/Zombine.webp';
import m2 from '../../../assets/518790_screenshots_20200204211215_1.webp';
import m3 from '../../../assets/TheHunterCotW_F_2020-02-13_00-40-43_29.webp';
import m4 from '../../../assets/20191018160606_1.webp';
import m5 from '../../../assets/Hosty.webp';


const MedvedTaiga = () => {

  // --- DATA SOURCES ---

  // Regions Data (From Screenshot 3)
  const regionsData = [
    { region: "Ledyanoy Bay", subregions: ["Rybatskiy Bay", "Zabolochennye Lands"] },
    { region: "P'yanaya Taiga", subregions: ["Lesnye Lands", "P'yanyy Forest"] },
    { region: "Zverolova Hill", subregions: ["Zverolova Hill"] },
    { region: "Besplodnoye Plateau", subregions: ["Mamontovaya Tundra", "Pustaya Mountain"] },
    { region: "Vetrenyye Plains", subregions: ["Dikiy Coast", "Bol'shoye Lake Taiga"] },
  ];

  // Trivia Data (From Screenshot 8)
  const triviaData = [
    "Since this was the first paid map in the game, the authors tried to fill it with content (often filler), resulting in 7 Steam achievements associated with collecting: traps with hares, elk antlers, Nenets monuments, artifacts, rock paintings, field notes, and sights.",
    "Like on the two starting maps, in Taiga there is no door opening animation. The doors instantly switch between open and closed positions.",
    "\"Medved'\" (with soft sound on the end) is the Russian word for \"bear,\" which literally translates to \"honey knowing.\"",
    "The perpetual snow cover makes nights on this map quite bright, making it one of the easiest maps for nighttime hunting.",
    "Upon its release, the Medved-Taiga map featured only six animals. On December 6th, 2022, the grey wolf and western capercaillie were added to the map.",
    "Despite having no huntable hares or rabbits, dead hares caught in traps can be found.",
    "Upon release, the map also featured weasels, however they were intended to be ambience only. This makes Medved-Taiga one of only three maps to have ever had an ambient animal."
  ];

  // Tips & Tricks Data (From Screenshot 7)
  const tipsData = [
    "An effective way to harvest multiple animals in a short amount of time is to set up a tripod or blind in an open area of the map, such as the frozen lakes and rivers, where animals are hard to miss.",
    "Frozen lakes or rivers with a nearby Grey Wolf need zone are especially good for mass harvesting. Since wolves travel in packs and often won't flee the immediate area until a member of the pack dies, you can shoot several of them in the lungs or liver and harvest them after they've bled out and the rest of the pack has fled."
  ];

  // styles moved to Reserves.css (.reserve-toc, .reserve-link, .reserve-h2)

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  const markerBase = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.2s ease-in-out',
    zIndex: 10,
  };

  const mapStyles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#05121c',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1f405a',
      padding: 0
    },
    mapImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      opacity: '0.6',
    },
    medved: { ...markerBase, top: '28%', left: '75%', width: '7%', display: 'inline-block' },
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">

        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Medved-Taiga National Park</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (Logo/Map Image) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Medved-Taiga National Park</div>
            <div className="reserve-sidebar-image">
                <img src={MedvedMapImage} alt="Medved-Taiga Logo" />
            </div>
            {/* Additional info usually goes here, but wasn't explicitly in screenshots aside from text */}
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Intro Quote */}
            <div className="wiki-quote">
              Far from civilization and a challenge for hunters, adventurers and scientists alike, the Taiga, with its frozen valleys, mountains, and unreliable weather conditions, will put your navigation and tracking skills to the test. Hunters looking for a variety of game will not be disappointed as the Siberian mainland is home to solid populations of brown bear, moose, reindeer, lynx, and the curious musk deer.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p className="wiki-p-mb">
              Inspired by the harsh, frozen landscape of Siberia, you'll traverse the unforgiving tundra, enter into the drunken forests and venture out on the frozen bay. Here, the weather can turn at an instant, leaving you swept in whirling snow and surrounded by cracking ice.
            </p>
            <p className="wiki-p-mb">
               The Medved Taiga National Park is located in <span className="wiki-link">Siberia</span>, a northern part of Asia. The warden of the reserve is <span className="wiki-link">Dr. Alena Khasavovna Khada</span>. The Medved-Taiga National Park was the <span className="wiki-link">first paid DLC map</span> and can be purchased for 7.99€/$.
            </p>

            {/* Table of Contents */}
            <div className="reserve-toc">
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
            <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} className="reserve-link">Location</a></li>
            <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} className="reserve-link">Regions</a></li>
            <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} className="reserve-link">Huntable Animals</a></li>
            <li><a href="#weapon" onClick={(e)=>scrollToId(e,'weapon')} className="reserve-link">Weapon</a></li>
            <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} className="reserve-link">Missions</a></li>
              <ol><a
                href="#setting" onClick={(e)=>scrollToId(e,'setting')} className="reserve-link">5.1 About the setting</a>
              </ol>
            <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} className="reserve-link">Trailer</a></li>
            <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="reserve-link">Tips & Tricks</a></li>
            <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="reserve-link">Trivia</a></li>
            <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="reserve-link">Gallery</a></li>
            </ol>
            </div>

            {/* LOCATION (World map) */}
            <h2 className="wiki-h2" id="location">Location</h2>
            <div style={mapStyles.container}>
              <style>{` 
                .map-inline a:hover { transform: translate(-50%, -50%) scale(1.3) !important; z-index: 100 !important; }
                .map-inline img { max-width: 100%; height: auto; pointer-events: none; }
              `}</style>
              <img src={worldMapImage} alt="World map" style={mapStyles.mapImage} />

              <Link to="/maps/medved" style={mapStyles.medved} data-tooltip="Medved-Taiga National Park">
                <img src={medvedLogo} alt="Medved Logo" style={{width: '100%', height: 'auto', display: 'block'}}/>
              </Link>
            </div>

            {/* REGIONS */}
            <h2 className="wiki-h2" id="regions">Regions</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                  <th className="wiki-th">Region</th>
                  <th className="wiki-th">Subregion</th>
                    </tr>
                </thead>
                <tbody>
                    {regionsData.map((row, idx) => (
                        <tr key={idx}>
                    <td className="wiki-td wiki-td-highlight">{row.region}</td>
                    <td className="wiki-td">
                      {row.subregions.map((sub, sIdx) => (
                        <div key={sIdx} className="subregion-item">{sub}</div>
                      ))}
                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* HUNTABLE ANIMALS */}
            <h2 className="wiki-h2" id="huntable-animals">Huntable Animals</h2>
            <p> This map contains a small but class-balanced range of animals. Two animals are unique: musk deer (the smallest deer in the game) and reindeer (which is very similar to the <span className="reserve-link">Grant Caribou</span> in <span className="reserve-link">Yukon Valley Nature Reserve</span>, as the two species are synonymous in real life). Prior to the release of <span className="reserve-link">Revontuli Coast</span>, the Eurasian lynx and Eurasian brown bear were also unique to this map.</p>
            <div style={{marginBottom: '30px'}}>
              <MedvedHuntableAnimalsTable />
            </div>
            <p>
                There is one <span className="reserve-link">boss animal</span> on the map, being an albino bear in a cave.
            </p>

            <p> 
                This map contains 3 '<span className="reserve-link">great ones</span>': <span className="reserve-link">moose</span>, <span className="reserve-link">gray wolf</span>, <span className="reserve-link">wild boar</span>.
            </p>
            {/* WEAPON */}
            <h2 className="wiki-h2" id="weapon">Weapon</h2>
            <p style={{marginBottom: '15px'}}>
               <strong style={{color: '#dbe4eb'}}>Grankin's Shotgun</strong> is a variant of the <span className="reserve-link">Caversham Steward 12G</span> that can be acquired through the Medved-Taiga campaign missions.
            </p>
            <p>
                It has three types of ammunition to cover all animal classes except for class nine. It can only hold two shells at a time, but has a comparatively quick reload time. Like all shotguns, it has low range and is intended to be used at a closer distance.
            </p>

            {/* MISSIONS */}
            <h2 className="reserve-h2" id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
              Main article: <span className="reserve-link">Medved Taiga National Park Missions</span>
            </div>
            <p>
                The open world of Medved-Taiga National Park measures 25 square miles (64 square kilometers), the same impressive size as Hirschfelden and Layton Lake District. It features the largest campaign with 32 missions, 50 side missions and numerous unique sights to discover.
            </p>
            <p>
                You take the role of an expert survivalist and hunter contracted to assist Alena Khasavovna and her scientific expedition. In addition to being a highly-trained climatologist, Alena hails from a reindeer herding people native to the region, offering her a unique insight into its challenges. The expedition is off to a bad start, and it's up to you to gather your group, help the locals and make sure everyone gets through the expedition in one piece. But it won’t be easy. Not everyone – and everything – wants you to succeed.
            </p>

            <h3 className="reserve-h2" style={{fontSize: '1.2rem', borderBottom: 'none'}} id="setting">About the setting</h3>
            <p>
              The reserve is located on the territory of Russia, but this is not Central Russia, which is widely known in pop culture, but the Yamalo-Nenets Autonomous Okrug. The indigenous people are the Nenets. Although from the point of view of foreign players the depiction of the setting may seem plausible, for Russians and especially locals there is a lot of absurdity and ridiculous clichés in what is shown: one of the quest givers has the surname of a famous writer (Pushkin), the dispatcher is worried that due to her disability she cannot dance Kalinka (for more than 100 years no one dances it anywhere but theaters), sends the Hunter to hunt mutant-bear and pray over the sleigh... She distorts Russian words (the actress knows only the Russian accent, but not the language). The Nenets monuments are something like sleigh with a bunch of deer antlers, and places of interest are kind of <span className="reserve-link">ovoo</span> with a Soviet star, such objects do not exist.
            </p>

            {/* TRAILER */}
            <h2 className="reserve-h2" id="trailer">Trailer</h2>
            <div style={{marginBottom: '15px', overflow: 'auto'}}>
              <div style={{float: 'right', width: '320px', marginLeft: '8px', maxWidth: '100%'}}>
                <iframe
                  width="320"
                  height="180"
                  src="https://www.youtube.com/embed/ArD7Te25UGU"
                  title="theHunter: Call of the Wild | Medved-Taiga Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{display: 'block', width: '100%', height: '180px', border: 'none'}}
                ></iframe>
              </div>
              <div style={{fontStyle: 'italic', color: '#dbe4eb'}}>
                Transcript: "Before we go any further, you should know, my expedition requires a serious professional, an experienced hunter. I need someone who does not fear the cold, harsh Taïga. From the banks of the Frozen Bay to the Drunken Forests, the Mammoth Tundra, someone who respect the sacred Reindeer, the proud Moose and the rare Musk Deer, someone who can outwit the Lynx and turn it from predator to prey and someone who is not afraid to face the Brown Bear. I need someone who can see even through the storm and stands tall on ice as it's cracking all around you, maybe someone like you... I hope you brought a warm coat!"
              </div>
            </div>

            {/* TIPS & TRICKS */}
            <h2 className="reserve-h2" id="tips">Tips & Tricks</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {tipsData.map((tip, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>{tip}</li>
                ))}
            </ul>

            {/* TRIVIA */}
            <h2 className="reserve-h2" id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>
                       {point}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 className="reserve-h2" id="gallery">Gallery</h2>
            <div style={{marginBottom: '24px'}}>
              <GallerySlideshow images={[
                { src: m1, alt: 'Medved Landscape 1' },
                { src: m2, alt: 'Medved Landscape 2' },
                { src: m3, alt: 'Medved Landscape 3' },
                { src: m4, alt: 'Medved Landscape 4' },
                { src: m5, alt: 'Medved Landscape 5' }
              ]} />
            </div>

            </main>
        </div>
      </div>
    </div>
  );
};

export default MedvedTaiga;