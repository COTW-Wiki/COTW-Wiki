import React from 'react';
import { Link } from 'react-router-dom';
// --- IMPORTS ---
// Component placeholders (Adjust paths as necessary)
import VurhongaHuntableAnimalsTable from '../../../components/VurhongaSavannaHuntableAnimalsTable'; 
import GallerySlideshow from '../../../components/GallerySlideshow';

// Image Assets (Placeholders based on your project structure)
import VurhongaMapImage from '../../../assets/Vurhonga_logo-background_transluc.webp'; // The tree logo from Screenshot 1
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import vurhongaLogo from '../../../assets/VurhongaIcon.png';
import '../Reserves.css';

// Gallery placeholders
import v1 from '../../../assets/Svn.webp';
import v2 from '../../../assets/20200314052247_1.webp';
import v3 from '../../../assets/Unknown_29_3.webp';
import v4 from '../../../assets/Image0_29.webp';
import v5 from '../../../assets/20200503053852_1.webp';
import v6 from '../../../assets/20200512125939_1.webp';
import v7 from '../../../assets/0egblw6rnd561.webp';
import v8 from '../../../assets/84oztblqnd561.webp';

const VurhongaSavanna = () => {

  // --- DATA SOURCES ---

  // Regions Data (From Screenshot 3)
  // Structured to handle the multiple columns per subregion
  const regionsData = [
    { 
      region: "N'Walungu", 
      subregions: [
        { name: "Bush Valley", outposts: 2, lookouts: 1, structures: 1, landmarks: 3 },
        { name: "Tingwenyeni", outposts: 2, lookouts: 1, structures: 3, landmarks: 4 },
        { name: "Ndlopfu Gorge", outposts: 2, lookouts: 1, structures: 2, landmarks: 3 }
      ]
    },
    { 
      region: "Vupeladyambu", 
      subregions: [
        { name: "Vurhonga Plateau", outposts: 2, lookouts: 1, structures: 0, landmarks: 7 }
      ]
    },
    { 
      region: "Vuxa", 
      subregions: [
        { name: "Fever Tree Forest", outposts: 2, lookouts: 1, structures: 2, landmarks: 5 },
        { name: "Mubedwa", outposts: 2, lookouts: 1, structures: 3, landmarks: 2 },
        { name: "Nambu", outposts: 2, lookouts: 1, structures: 1, landmarks: 4 },
        { name: "Xibodlo Delta", outposts: null, lookouts: null, structures: null, landmarks: null } // Blank in screenshot implies 0 or merged data? Assuming blank based on visual.
      ]
    },
    { 
      region: "Dzonga", 
      subregions: [
        { name: "Central Savanna", outposts: 2, lookouts: 1, structures: 6, landmarks: 5 },
        { name: "Ku Navela Land", outposts: 2, lookouts: 1, structures: 6, landmarks: 3 }
      ]
    }
  ];

  // Trivia Data (From Screenshot 6)
  const triviaData = [
    "Vurhonga Savanna (9 exclusive species) is tied with Revontuli Coast (9 exclusive species) and Sundarpatan (10 exclusive species) for the most species not found on any other reserve."
  ];

  // --- STYLES OBJECT (Standardized) ---
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '40px',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mainHeader: {
      fontSize: '2.5rem',
      fontWeight: '400',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '15px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse',
    },
    mainColumn: {
      flex: 1,
    },
    sidebarColumn: {
      width: '320px',
      flexShrink: 0,
      backgroundColor: '#0f2e48',
      border: '1px solid #1f405a',
      borderRadius: '4px',
    },
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #3a5a75',
      color: '#fff'
    },
    sidebarImage: {
      height: '300px',
      backgroundColor: '#1f3a52',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6fb2e6',
      fontStyle: 'italic',
      borderBottom: '1px solid #1f405a',
      position: 'relative',
      overflow: 'hidden'
    },
    quoteBox: {
      fontStyle: 'italic',
      backgroundColor: '#0f2e48',
      borderLeft: '4px solid #3a5a75',
      padding: '15px 20px',
      margin: '0 0 20px 0',
      color: '#a4cce8',
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    h2: {
      color: '#6fb2e6',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '5px',
      marginTop: '30px',
      marginBottom: '15px',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#0f2e48',
      fontSize: '0.95rem',
      marginBottom: '20px',
      border: '1px solid #1f405a'
    },
    th: {
      backgroundColor: '#164060',
      padding: '10px 15px',
      textAlign: 'left',
      color: '#fff',
      borderBottom: '2px solid #3a5a75',
      fontWeight: 'bold',
    },
    td: {
      padding: '10px 15px',
      borderBottom: '1px solid #2a4b63',
      color: '#dbe4eb',
      verticalAlign: 'top',
    },
    tocBox: {
        border: '1px solid #3a5a75',
        backgroundColor: '#0f2e48',
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: '4px',
        minWidth: '200px',
        marginBottom: '30px'
    }
  };

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Vurhonga Savanna</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (Logo/Map Image) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Vurhonga Savanna</div>
            <div style={styles.sidebarImage}>
                {/* Logo from Screenshot 1/2 */}
                <img src={VurhongaMapImage} alt="Vurhonga Savanna Logo" style={{width:'100%', height:'100%', objectFit: 'cover'}} />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Intro Quote */}
            <div style={styles.quoteBox}>
              Deep within the Southern African woodlands lies Vurhonga Savanna - A hunting reserve teeming with indigenous flora and fauna and offering a hunting experience like none other. The reserve spans over several biomes, covering the savanna, woodlands, fever tree forests, swamps and scrublands. The open plains of Vurhonga are home to warthogs, springbok, blue wildebeest, the scrublands bustle with activity of side-striped jackals and scrub hares, while the coasts and forests are home to the lesser kudu and the indomitable cape buffalo.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p style={{marginBottom:'20px'}}>
              The Vurhonga Savanna Reserve is located in <span style={styles.link}>south-west Africa</span>. The warden of the <span style={styles.link}>Reserve</span> is <span style={styles.link}>Njabulo Tshabangu</span>.
            </p>
            <p style={{marginBottom:'20px'}}>
               The Vurhonga Savanna Reserve is included in a <span style={styles.link}>paid DLC</span> can be purchased for 7.99 €/$. This reserve also gives you the possibility to purchase the <span style={styles.link}>King 470DB Zenith</span>.
            </p>

            {/* Table of Contents */}
            <div style={styles.tocBox}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} style={styles.link}>Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} style={styles.link}>Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} style={styles.link}>Huntable Animals</a></li>
                <li><a href="#flora" onClick={(e)=>scrollToId(e,'flora')} style={styles.link}>Flora</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} style={styles.link}>Missions</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} style={styles.link}>Trailer</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} style={styles.link}>Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map) */}
            <h2 style={styles.h2} id="location">Location</h2>
            <div className="map-container" style={{padding: '1rem 0', width: '1200px', maxWidth: '800px', margin: '0 auto'}}>
              <img className="map-image" src={worldMapImage} alt="World map" style={{width: '100%', height: 'auto'}} />
              {/* Adjusted margins to position pin roughly over South Africa */}
              <Link to="/maps/vurhonga" className="logo-vurhonga" style={{ '--mask': `url("${vurhongaLogo}")`, marginLeft:'-378px', marginTop:'-20px', width: '70px', height: '70px'}} data-tooltip="Vurhonga Savanna">
                <img src={vurhongaLogo} alt="Vurhonga Logo" />
              </Link>
            </div>

            {/* REGIONS */}
            <h2 style={styles.h2} id="regions">Regions</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Region</th>
                        <th style={styles.th}>Subregion</th>
                        <th style={styles.th}>Outposts</th>
                        <th style={styles.th}>Lookout Points</th>
                        <th style={styles.th}>Hunting Structures</th>
                        <th style={styles.th}>Landmarks</th>
                    </tr>
                </thead>
                <tbody>
                    {regionsData.map((row, idx) => (
                        row.subregions.map((sub, sIdx) => (
                          <tr key={`${idx}-${sIdx}`}>
                            {/* Only render the Region cell for the first subregion, rowspan for the rest */}
                            {sIdx === 0 && (
                              <td rowSpan={row.subregions.length} style={{...styles.td, color: '#6fb2e6', verticalAlign: 'middle', borderRight: '1px solid #2a4b63'}}>
                                {row.region}
                              </td>
                            )}
                            <td style={{...styles.td, color: '#6fb2e6'}}>{sub.name}</td>
                            <td style={styles.td}>{sub.outposts}</td>
                            <td style={styles.td}>{sub.lookouts}</td>
                            <td style={styles.td}>{sub.structures}</td>
                            <td style={styles.td}>{sub.landmarks}</td>
                          </tr>
                        ))
                    ))}
                </tbody>
            </table>

            {/* HUNTABLE ANIMALS */}
            <h2 style={styles.h2} id="huntable-animals">Huntable Animals</h2>
            <p>
                Humming with life, Vurhonga Savanna supports a wide range of animals. On these thriving grounds you will be able to watch the Blue Wildebeest herds passing, chase after Lesser Kudu, catch a Springbok pronking, and Scrub Hare, and Warthog's grazing by the waterholes. In the late hours of the day you might catch the shrill cries of a Side-Striped Jackal. You must also watch your back for the respected and feared widowmaker - the Cape Buffalo.
            </p>
            <p>
                As Vurhonga Savanna continues to thrive, Grandfather Njabulo has decided that it is time to reintroduce the largest native carnivore and King of the Beasts - the Lion. Embodying the symbols of royalty and poise in human culture around the world, the Lion is the second-largest of the cats, surpassed only by the tiger. With a muscular and deep chest, the density of their muscles severely complicates shot placement and penetration during a hunt. The lions of Vurhonga Savanna are in their prime and will not take kindly to trespassers on their territory. As a hunter, remain steadfast in your resolve, and keep your wits about you as you venture into the wild to hunt the King of the Jungle.
            </p>
            <div style={{marginBottom: '30px'}}>
                <VurhongaHuntableAnimalsTable />
            </div>
            <p>
                There is no "<span style={styles.link}>boss animal</span>".
            </p>
            <p>
                This map is the only one that does not contain a '<span style={styles.link}>great one</span>' species.
            </p>

            {/* FLORA */}
            <h2 style={styles.h2} id="flora">Flora</h2>
            <p>
              Vurhonga Savanna introduces striking new environments to explore and hunt within. From the flourishing riverlands to the murky swamps, the reserve offers stunning landscapes to traverse as you, the new Warden, keep the region safe. Discover the ancient Fever Tree Forest, or make your way to the heart of Vurhonga Savanna and discover the Tree of Life.
            </p>

            {/* MISSIONS */}
            <h2 style={styles.h2} id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
                Main article: <span style={styles.link}>Vurhonga Savanna Reserve Missions</span>
            </div>
            <p>
              Much like the other reserves, Vurhonga Savanna measures a striking 25 square miles (64 square kilometers). Here you can choose to pave your own path and discover its beauty, wonders and dangers. Or follow a new intriguing story with 16 new narrative missions and 46 side missions.
            </p>
            <p>
              Your Grandfather, Njabulo Tshabangu, is the Senior Warden at the reserve. His primary responsibility is ensuring the safety and stability of this protected area, but over the last few years, Grandfather's advanced age has slowed him down. He can't keep up with the poachers and other forces that threaten the reserve, which has fallen into steep decline. Several threatened species have had to be moved to safer parks. Understaffed and on a tight budget, he turns to you to help him save the reserve – and your family's reputation.
            </p>

            {/* TRAILER */}
            <div style={{marginBottom: '20px', overflow: 'hidden'}}>
              <h2 style={styles.h2} id="trailer">Trailer</h2>
              <iframe
                width="360"
                height="202"
                src="https://www.youtube.com/embed/6gJFIC_qb_k"
                title="theHunter: Call of the Wild | Vurhonga Savanna Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{float: 'right', marginLeft: '1rem', marginBottom: '0.5rem', width: '360px', height: '202px', maxWidth: '40%'}}
              />
              <div style={{fontStyle: 'italic', color: '#dbe4eb'}}>
                Transcript: "It's been awhile grandchild, but it's time to come back where life began, for us all, back to the savanna that our ancestors walked, back to the heat and the Baobabs Trees, time to come back to Vurhonga Savanna... to Africa! I can't fail our ancestors, I need to pass the torch to a new protector, a new warden. Vurhonga is in your blood. Here, you chase off after Blue Wildebeest, lock horns with Lesser Kudu and pronking Springbok, encounters Side-Striped Jackal as they searched for Scrub Hare, and when you are bold enough, deal with the "Widow Maker": The notorious Cape Buffalo. Opportunities like this don't come often grandchild, so pack your suitcases - Africa is calling!"
              </div>
            </div>

            {/* TRIVIA */}
            <h2 style={styles.h2} id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>
                       {point}
                    </li>
                ))}
            </ul>

            {/* Gallery */}
            <h2 style={styles.h2} id="gallery">Gallery</h2>
            <div style={{marginBottom: '24px'}}>
              <GallerySlideshow images={[
                { src: v1, alt: 'Vurhonga Landscape 1' },
                { src: v2, alt: 'Vurhonga Landscape 2' },
                { src: v3, alt: 'Vurhonga Landscape 3' },
                { src: v4, alt: 'Vurhonga Landscape 4' },
                { src: v5, alt: 'Vurhonga Landscape 5' },
                { src: v6, alt: 'Vurhonga Landscape 6' },
                { src: v7, alt: 'Vurhonga Landscape 7' },
                { src: v8, alt: 'Vurhonga Landscape 8' }
              ]} />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default VurhongaSavanna;