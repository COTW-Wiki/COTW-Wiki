import React from 'react';
import { Link } from 'react-router-dom';
// You will need to create/adjust this table component for Yukon animals
import YukonHuntableAnimalsTable from '../../../components/YukonValleyHuntableAnimalsTable'; 
// REPLACE THESE IMPORTS WITH YOUR ACTUAL YUKON ASSETS
import YukonMapImage from '../../../assets/Yukon_logo-background_translucent.webp'; 
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import yukonLogo from '../../../assets/Yukon_Valley-removebg-preview.png'; 
import '../Reserves.css';
import GallerySlideshow from '../../../components/GallerySlideshow';

// Placeholder imports for gallery - replace with actual Yukon screenshots
import y1 from '../../../assets/66b987666fa1406194a5389ff9f2d624.webp';
import y2 from '../../../assets/9erjfxo756831.webp';
import y3 from '../../../assets/9effc8450b5b21205cecd5741a90b3485ce3be1d_400x225.webp';
import y4 from '../../../assets/New-Reserve-Yukon-Valley-is-Bringing-Gray-Wolves-and-More-to-theHunter-Call-of-the-Wild_29.webp';
import y5 from '../../../assets/Images_29.webp';
import y6 from '../../../assets/20200131121350_1.webp';
import y7 from '../../../assets/20191020122648_1.webp';
import y8 from '../../../assets/20191020155914_1.webp';
import y9 from '../../../assets/20200129191308_1.webp';
import y10 from '../../../assets/20200204150653_1.webp';
import y11 from '../../../assets/20200204151433_1.webp';
import y12 from '../../../assets/20200205180551_1.webp';
import y13 from '../../../assets/20200221223315_1.webp';
import y14 from '../../../assets/Download_2.webp';
import y15 from '../../../assets/Download_6.webp';
import y16 from '../../../assets/20200311173421_1.webp';
import y17 from '../../../assets/20190715124625_1.webp';
import y18 from '../../../assets/20190715132610_1.webp';
import y19 from '../../../assets/20200414230615_1.webp';
import y20 from '../../../assets/5A6F3392705E56CC04CCE989CCE72057B8388DCB.webp';
import y21 from '../../../assets/Unknown_29(3).webp';
import y22 from '../../../assets/20200522002333_1.webp';

// ... add more as needed

const YukonValley = () => {

  // --- DATA SOURCES ---

  // Regions Data (From Screenshot)
  const regionsData = [
    { region: "Hansson River Basin", subregions: ["Lumbershore", "Greenshore Rise"] },
    { region: "Bankside Timberlands", subregions: ["Bankside Forest", "Stonehollow Basin", "Redrock Ascent"] },
    { region: "Crowngold Wetlands", subregions: ["Brightwater Flats", "Goldcap Bluffs"] },
    { region: "Teekon Forest", subregions: ["Copperbowl Lake", "Copper Rock", "Recovering Teekon Forest"] },
    { region: "Crimson Plain", subregions: ["Rustline Ridge"] },
  ];

  // Trivia Data (From Screenshot)
  const triviaData = [
    'This map, along with Sundarpatan, features dynamic snow cover as well as both snow and rain weather.',
    'Medved-Taiga National Park is the only other map to share this feature, however unlike the aforementioned maps, the ground in Medved-Taiga is always covered in snow and only snowfall weather can occur.'
  ];

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

  const styles = {
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
    // Adjust top/left to point to Alaska on the world map
    yukonLocation: { ...markerBase, top: '35.6%', left: '8.7%', width: '12%', display: 'inline-block' },
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Yukon Valley Nature Reserve</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (Map Image) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Yukon Valley Nature Reserve</div>
            <div className="wiki-sidebar-image">
                <img src={YukonMapImage} alt="Yukon Valley Map" />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Intro Quote / Description */}
            <div className="wiki-quote">
              Yukon Valley is located in the Yukon River Basin in Alaska. The warden of the <span className="wiki-link">Reserve</span> is <span className="wiki-link">Jim Murray</span>.
            </div>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} className="wiki-link">Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} className="wiki-link">Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} className="wiki-link">Huntable Animals</a></li>
                <li><a href="#flora" onClick={(e)=>scrollToId(e,'flora')} className="wiki-link">Flora</a></li>
                <li><a href="#weapon" onClick={(e)=>scrollToId(e,'weapon')} className="wiki-link">Weapon</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} className="wiki-link">Missions</a></li>
                <li><a href="#music-theme" onClick={(e)=>scrollToId(e,'music-theme')} className="wiki-link">Music Theme</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} className="wiki-link">Trailer</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="wiki-link">Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION */}
            <h2 className="wiki-h2" id="location">Location</h2>
            <div style={styles.container}>
              <style>{` 
                .map-inline a:hover { transform: translate(-50%, -50%) scale(1.3) !important; z-index: 100 !important; }
                .map-inline img { max-width: 100%; height: auto; pointer-events: none; }
              `}</style>
              <img src={worldMapImage} alt="World map" style={styles.mapImage} />

              <Link to="/maps/yukon-valley" style={styles.yukonLocation} data-tooltip="Yukon Valley Nature Reserve">
                <img src={yukonLogo} alt="Yukon Logo" style={{width: '100%', height: 'auto', display: 'block'}}/>
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
            <div className="mb-30">
                <YukonHuntableAnimalsTable />
            </div>

            {/* FLORA */}
            <h2 className="wiki-h2" id="flora">Flora</h2>
            <p className="wiki-p-mb">
                Considered one of the most visually stunning places on Earth; the Yukon region sports a series of dramatic landscapes, serving as a backdrop to a rich history. From the lush spruce forests to the red foothills, every corner of this reserve is filled with colour and life. It pays to be wary of the weather though, as the familiar scenery can quickly transform into a blanket of freshly fallen snow. As you trek through the eerie, twisted remains of a burnt forest, the seemingly endless rolling plains and the crisp yellow leaves of the woodlands you can't help but admire the magic that exists out there.
            </p>

            {/* WEAPON */}
            <h2 className="wiki-h2" id="weapon">Weapon</h2>
            <p className="wiki-p-mb">
                This reserve comes with the <span className="wiki-link">.300 Canning Magnum Frontier</span>, a powerful large-caliber bolt-action rifle developed for hunting large animals such as Moose. It gives full integrity on class 7 - 9 animals. Its particularly flat bullet trajectory makes it an excellent long range rifle, suitable for hunting at distances of up to 400m (437yd).
            </p>
            <p className="wiki-p-mb">
                This weapon requires a rifle score of 6092 to unlock and, like most other weapons that come as part of a Reserve DLC, must be bought with ingame money. The ingame price for the .300 Canning Magnum is 75000.
            </p>
            <p className="wiki-p-mb">
                The .300 Canning Magnum comes with an additional variant called the .300 Canning Magnum Marches, which features a black barrel and stained wooden body.
            </p>

            {/* MISSIONS */}
            <h2 className="wiki-h2" id="missions">Missions</h2>
            <div className="missions-note">
                Main article: <span className="wiki-link">Yukon Valley Missions</span>
            </div>
            <p>
                Yukon Valley, just like its preceding reserves, will span a massive 25 square miles (64 square kilometers) and it will be your decision whether you decide to simply explore the reserve, carving your own path, or if you pursue the thrilling new story with 10 new narrative missions, and 42 side missions.
            </p>
            <p>
                Through the knowledge, instincts and hard work of its warden Jim Murray; Yukon Valley's ecosystem and inhabitants have survived under his care. The balance is a delicate one though, and the reserve's fate is uncertain, even with Jim's care. With the permafrost retreating from Alaska, predators beginning to unbalance the delicate natural order, and tree-eating parasites threatening forests recently damaged by a forest fire, Jim is struggling to keep up. It will now fall on you to help him maintain the health and unique, untamed appeal of Yukon Valley.
            </p>

            {/* MUSIC THEME */}
            <h2 className="wiki-h2" id="music-theme">Music Theme</h2>
            <p className="wiki-p-mb">
              Listen on Youtube :{' '}
              <a
                className="wiki-link"
                href="https://www.youtube.com/watch?v=9yXYNXtlVuY&list=PL9xumIWGzk8T_Af0T_Tdwg0xFIkcOxXGd"
                target="_blank"
                rel="noreferrer"
              >
                Theme 1
              </a>
              {' '}|{' '}
              <a
                className="wiki-link"
                href="https://www.youtube.com/watch?v=t1vbY9J2-b8&list=PL9xumIWGzk8T_Af0T_Tdwg0xFIkcOxXGd"
                target="_blank"
                rel="noreferrer"
              >
                Theme 2
              </a>
            </p>

            {/* DESCRIPTION (TRAILER) */}
            <h2 className="wiki-h2" id="trailer">Trailer</h2>
            <div className="trailer-note">
                "After all these years as a warden, I am still impressed by the grit it takes to survive out here. Hunting in the Last Frontier always brings rewards. Without our influence on Alaska's delicate natural balance, life will only get tougher here at Yukon Valley.
                <br/><br/>
                You will experience a moment, one that shows why we need not only a hunter but someone who can understand this place, it might be at your first sighting of the Grant Caribou grazing on the Crimson Plains, or during an instant of tranquility as the Valley sleeps under a fresh snowfall... Perhaps it would come while you stalk a Grizzly Bear from the remote spruce forests or during contemplation of the aftermath of an inferno marked by nature itself and as night falls, you might just hear the rowdy locals sing their night songs to the sky. I am sure you will get to meet them, the wolves here are fast, smart and utterly relentless... they don't scare easy either.
                <br/><br/>
                It is my great pride to care for this wild remarkable place and to welcome you to Yukon Valley."
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">
                        {/* Basic parsing to detect links in trivia text */}
                        {point.includes("Medved-Taiga National Park") ? (
                            <span>
                                {point.split("Medved-Taiga National Park").map((part, i, arr) => 
                                    i < arr.length - 1 ? <>{part}<span className="wiki-link">Medved-Taiga National Park</span></> : part
                                )}
                            </span>
                        ) : (
                            point
                        )}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 className="wiki-h2" id="gallery">Gallery</h2>
            <div className="mb-24">
              <GallerySlideshow images={[
                { src: y1, alt: 'Yukon Valley 1' },
                { src: y2, alt: 'Yukon Valley 2' },
                { src: y3, alt: 'Yukon Valley 3' },
                { src: y4, alt: 'Yukon Valley 4' },
                { src: y5, alt: 'Yukon Valley 5' },
                { src: y6, alt: 'Yukon Valley 6' },
                { src: y7, alt: 'Yukon Valley 7' },
                { src: y8, alt: 'Yukon Valley 8' },
                { src: y9, alt: 'Yukon Valley 9' },
                { src: y10, alt: 'Yukon Valley 10' },
                { src: y11, alt: 'Yukon Valley 11' },
                { src: y12, alt: 'Yukon Valley 12' },
                { src: y13, alt: 'Yukon Valley 13' },
                { src: y14, alt: 'Yukon Valley 14' },
                { src: y15, alt: 'Yukon Valley 15' },
                { src: y16, alt: 'Yukon Valley 16' },
                { src: y17, alt: 'Yukon Valley 17' },
                { src: y18, alt: 'Yukon Valley 18' },
                { src: y19, alt: 'Yukon Valley 19' },
                { src: y20, alt: 'Yukon Valley 20' },
                { src: y21, alt: 'Yukon Valley 21' },
                { src: y22, alt: 'Yukon Valley 22' },
                // Add remaining images here...
              ]} />
            </div>

            
          </main>
        </div>
      </div>
    </div>
  );
};

export default YukonValley;