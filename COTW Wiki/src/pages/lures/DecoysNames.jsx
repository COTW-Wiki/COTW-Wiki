import { decoys } from '../../data/decoys';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

import '../../styles/wiki.css';

import BeanGooseDecoyFeeding from '../../assets/BeanGooseDecoyFeeding.webp';
import BeanGooseDecoySearching from '../../assets/BeanGooseDecoySearching.webp';
import BeanGooseDecoySentry from '../../assets/BeanGooseDecoySentry.webp';

import CanadaGooseDecoyFeeding from '../../assets/CanadaGooseDecoyFeeding.webp';
import CanadaGooseDecoySearching from '../../assets/CanadaGooseDecoySearching.webp';
import CanadaGooseDecoySentry from '../../assets/CanadaGooseDecoySentry.webp';

import GreylagGooseDecoyFeeding from '../../assets/GreylagGooseDecoyFeeding.webp';
import GreylagGooseDecoySearching from '../../assets/GreylagGooseDecoySearching.webp';
import GreylagGooseDecoySentry from '../../assets/GreylagGooseDecoySentry.webp';

import MagpieGooseDecoyFeeding from '../../assets/MagpieGooseDecoyFeeding.webp';
import MagpieGooseDecoySearching from '../../assets/MagpieGooseDecoySearching.webp';
import MagpieGooseDecoySentry from '../../assets/MagpieGooseDecoySentry.webp';

import CinnamonTealDecoyDrake from '../../assets/CinnamonTealDecoyDrake.webp';
import CinnamonTealDecoyHen from '../../assets/CinnamonTealDecoyHen.webp';

import EurasianTealDecoyDrake from '../../assets/EurasianTealDecoyDrake.webp';
import EurasianTealDecoyHen from '../../assets/EurasianTealDecoyHen.webp';

import EurasianWigeonDecoyDrake from '../../assets/EurasianWigeonDecoyDrake.webp';
import EurasianWigeonDecoyHen from '../../assets/EurasianWigeonDecoyHen.webp';

import FerruginousDuckDecoyDrake from '../../assets/FerruginousDuckDecoyDrake.webp';
import FerruginousDuckDecoyHen from '../../assets/FerruginousDuckDecoyHen.webp';

import GoldeneyeDecoyDrake from '../../assets/GoldeneyeDecoyDrake.webp';
import GoldeneyeDecoyHen from '../../assets/GoldeneyeDecoyHen.webp';

import GreenWingedTealDecoyDrake from '../../assets/Green.WingedTealDecoyDrake.webp';
import GreenWingedTealDecoyHen from '../../assets/Green-WingedTealHen.webp';

import GadwallDecoyDrake from '../../assets/GadwallDecoyDrake.webp';
import GadwallDecoyHen from '../../assets/GadwallDecoyHen.webp';

import HarlequinDuckDecoyDrake from '../../assets/HarlequinDuckDecoyDrake.webp';
import HarlequinDuckDecoyHen from '../../assets/HarlequinDuckDecoyHen.webp';

import MallardDecoyDrake from '../../assets/MallardDuckDecoyDrake.webp';
import MallardDecoyHen from '../../assets/MallardDuckDecoyHen.webp';

import TuftedDuckDecoyDrake from '../../assets/TuftedDuckDecoyDrake.webp';
import TuftedDuckDecoyHen from '../../assets/TuftedDuckDecoyHen.webp';

import WildTurkeyFemaleSentry from '../../assets/WildTurkeyFemaleSentry.webp';
import WildTurkeyMaleStrutting from '../../assets/WildTurkeyMaleStrutting.webp';

const decoyImages = {
  'bean_goose_decoy': [BeanGooseDecoyFeeding, BeanGooseDecoySearching, BeanGooseDecoySentry],
  'canada_goose_decoy': [CanadaGooseDecoyFeeding, CanadaGooseDecoySearching, CanadaGooseDecoySentry],
  'greylag_goose_decoy': [GreylagGooseDecoyFeeding, GreylagGooseDecoySearching, GreylagGooseDecoySentry],
  'magpie_goose_decoy': [MagpieGooseDecoyFeeding, MagpieGooseDecoySearching, MagpieGooseDecoySentry],
  'cinnamon_teal_decoy': [CinnamonTealDecoyDrake, CinnamonTealDecoyHen],
  'eurasian_teal_decoy': [EurasianTealDecoyDrake, EurasianTealDecoyHen],
  'eurasian_wigeon_decoy': [EurasianWigeonDecoyDrake, EurasianWigeonDecoyHen],
  'ferruginous_duck_decoy': [FerruginousDuckDecoyDrake, FerruginousDuckDecoyHen],
  'goldeneye_decoy': [GoldeneyeDecoyDrake, GoldeneyeDecoyHen],
  'green_winged_teal_decoy': [GreenWingedTealDecoyDrake, GreenWingedTealDecoyHen],
  'gadwall_decoy': [GadwallDecoyDrake, GadwallDecoyHen],
  'harlequin_duck_decoy': [HarlequinDuckDecoyDrake, HarlequinDuckDecoyHen],
  'mallard_decoy': [MallardDecoyDrake, MallardDecoyHen],
  'tufted_duck_decoy': [TuftedDuckDecoyDrake, TuftedDuckDecoyHen],
  'wild_turkey_female_decoy': [WildTurkeyFemaleSentry, WildTurkeyMaleStrutting],
};

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '-'));
}

export default function DecoysNames() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Decoys</h1>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar" style={{ background: 'transparent', border: 'none' }}>
            <div className="wiki-toc-panel">
              <div className="wiki-toc-panel-header">
                <span className="wiki-toc-panel-title">🔢 Contents</span>
                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                  [{isTocOpen ? 'hide' : 'show'}]
                </span>
              </div>

              {isTocOpen && (
                <ul className="wiki-list-plain">
                  <li><a href="#overview" onClick={(e) => scrollTo(e, 'overview')} className="wiki-link">1. Overview</a></li>
                  <li><a href="#geese-decoys" onClick={(e) => scrollTo(e, 'geese-decoys')} className="wiki-link">2. Geese Decoys</a></li>
                  <li><a href="#duck-decoys" onClick={(e) => scrollTo(e, 'duck-decoys')} className="wiki-link">3. Duck Decoys</a></li>
                  <li><a href="#turkey-decoy" onClick={(e) => scrollTo(e, 'turkey-decoy')} className="wiki-link">4. Wild Turkey Decoy</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN */}
          <main className="wiki-main">
            <section id="overview" className="wiki-p-mb">
              <div className="wiki-p-mb">
                <Link to="/lures" className="wiki-link">Back to Lures</Link>
              </div>

              <div className="wiki-section-card">
                <p>
                  Decoys are a special kind of lure. They mimic animals during different activities such as feeding or
                  watching to trick the animal into believing the place is safe. Currently, full-body decoys for the hunting
                  of <Link to={`/animals/${slug('Canada Goose')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Canada Geese</Link>,{' '}
                  <Link to={`/animals/${slug('Cinnamon Teal')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Cinnamon Teals</Link>,{' '}
                  <Link to={`/animals/${slug('Harlequin Duck')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Harlequin Ducks</Link>,{' '}
                  <Link to={`/animals/${slug('Mallard')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Mallards</Link>,{' '}
                  <Link to={`/animals/${slug('Eastern Wild Turkey')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Eastern Wild Turkeys</Link>,{' '}
                  <Link to={`/animals/${slug('Merriam Turkey')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Merriam Turkeys</Link>, and{' '}
                  <Link to={`/animals/${slug('Rio Grande Turkey')}`} state={{ from: '/lures/decoys/names' }} className="wiki-link">Rio Grande Turkeys</Link> are available. Multiple decoys can be used at once to increase efficacy, however only up to a
                  limit of 20. Most decoys have a caller you can use simultaneously to further increase the chances of birds
                  landing.
                </p>
              </div>
            </section>

            <section className="mb-20">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {decoys.map((d) => (
                  <Fragment key={d.id}>
                    {d.id === 'bean_goose_decoy' && (
                      <h2 id="geese-decoys" className="wiki-h2">2. Geese Decoys</h2>
                    )}
                    {d.id === 'cinnamon_teal_decoy' && (
                      <h2 id="duck-decoys" className="wiki-h2">3. Duck Decoys</h2>
                    )}
                    {d.id === 'wild_turkey_female_decoy' && (
                      <h2 id="turkey-decoy" className="wiki-h2">4. Wild Turkey Decoy</h2>
                    )}

                    <div className="wiki-section-card" style={{ padding: 0 }}>
                      <div className="wiki-uniform-card-header" style={{ textAlign: 'left' }}>{d.name}</div>

                      <div style={{ padding: '20px 30px 30px 30px' }}>
                        {decoyImages[d.id] && Array.isArray(decoyImages[d.id]) && (
                          <div className="wiki-uniform-grid" style={{ marginTop: 12 }}>
                            {decoyImages[d.id].map((img, index) => {
                              let label = '';
                              if (d.id === 'wild_turkey_female_decoy') {
                                label = ['Sentry', 'Strutting'][index];
                              } else if (decoyImages[d.id].length === 3) {
                                label = ['Feeding', 'Searching', 'Sentry'][index];
                              } else if (decoyImages[d.id].length === 2) {
                                label = ['Drake', 'Hen'][index];
                              }

                              return (
                                <div key={index} className="wiki-uniform-card">
                                  <div className="wiki-uniform-card-header">{label || d.name}</div>
                                  <div className="wiki-uniform-card-image">
                                    <img src={img} alt={`${d.name} ${label}`}/>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {decoyImages[d.id] && !Array.isArray(decoyImages[d.id]) && (
                          <div className="wiki-uniform-grid" style={{ marginTop: 12 }}>
                            <div className="wiki-uniform-card">
                              <div className="wiki-uniform-card-header">{d.name}</div>
                              <div className="wiki-uniform-card-image">
                                <img src={decoyImages[d.id]} alt={d.name}/>
                              </div>
                            </div>
                          </div>
                        )}

                      {d.id === 'bean_goose_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            Once deployed, these decoys increase the chance of geese breaking off from high flying flocks and landing. Deploying multiple decoys will increase the probability of bean geese landing on feeding grounds.
                          </p>
                          <p className="wiki-p-mb">
                            The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE BEAN GOOSE CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Tundra Bean Goose')}`} className="wiki-link">Tundra Bean Geese</Link>. All of these decoys are purchased in groups of 5, for 4000. Each decoy has an attraction strength of 2, a range of 500 m, and a weight of 1.5. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'canada_goose_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            These custom-painted, full-body decoys will fool even the most skeptical of Canada geese. Once deployed, these decoys increase the chance of geese braking off from high flying flocks and landing. Deploying multiple decoys will increase the probability of Canada geese landing on feeding grounds, such as farmlands.
                          </p>
                          <p className="wiki-p-mb">
                            The effect of multiple decoys in the same area stacks up to a max of 20 decoys.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Canada Goose')}`} className="wiki-link">Canada Geese</Link>. All of these decoys are purchased in groups of 5, for 4000. Similar to Bean Goose decoy, each decoy has an attraction strength of 2, a range of 500 m, and a weight of 1.5.
                          </p>
                        </div>
                      )}
                      {d.id === 'greylag_goose_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            Once deployed, these decoys increase the chance of geese breaking off from high flying flocks and landing. Deploying multiple decoys will increase the probability of greylag geese landing on feeding grounds.
                          </p>
                          <p className="wiki-p-mb">
                            The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE GREYLAG GOOSE CALLER</strong>
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Greylag Goose')}`} className="wiki-link">Greylag Geese</Link>. All of these decoys are purchased in groups of 5, for 4000. Each decoy has an attraction strength of 2, a range of 500 m, and a weight of 1.5. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'magpie_goose_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            Discover the handmade Magpie Goose Decoys - the ultimate addition to your arsenal for Magpie Goose hunting. Each full-bodied decoy is custom-painted and meticulously crafted to lure high-flying flocks down to land.
                          </p>
                          <p className="wiki-p-mb">
                            The effect of multiple decoys in the same area stacks up to a max of 20 decoys.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Magpie Goose')}`} className="wiki-link">Magpie Geese</Link>. All of these decoys are purchased in groups of 5, for 4000. Each decoy has an attraction strength of 2, a range of 500 m, and a weight of 1.5.
                          </p>
                        </div>
                      )}
                      {d.id === 'cinnamon_teal_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            These full-body, realistic decoys create a lifelike appearance that easily fool even wary birds.
                          </p>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying cinnamon teal landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE DUCK CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Cinnamon Teal')}`} className="wiki-link">Cinnamon Teals</Link>. These decoys are bought in groups of 10, for 4000. Both of them share the stats of 2 attraction strength, 500 m of range, and a weight of 1.
                          </p>
                        </div>
                      )}
                      {d.id === 'eurasian_teal_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying eurasian teal landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE EURASIAN TEAL CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Eurasian Teal')}`} className="wiki-link">Eurasian Teals</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'eurasian_wigeon_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying eurasian wigeon landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE EURASIAN WIGEON CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Eurasian Wigeon')}`} className="wiki-link">Eurasian Wigeons</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'ferruginous_duck_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying Ferruginous ducks landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE DUCK CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Ferruginous Duck')}`} className="wiki-link">Ferruginous Ducks</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/salzwiesen-park`} className="wiki-link">Salzwiesen Park DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'goldeneye_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            These full-body, realistic decoys create a lifelike appearance that easily fool even wary birds.
                          </p>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying goldeneye landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Common Goldeneye')}`} className="wiki-link">Goldeneyes</Link>. These decoys are bought in groups of 10, for 4000 and have a stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'green_winged_teal_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying eurasian teal landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>Beacon Deluxe Eurasian Teal Caller</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Green-winged Teal')}`} className="wiki-link">Green-Winged Teals</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/new-england-mountains`} className="wiki-link">New England Mountains DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'gadwall_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying Gadwall ducks landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys. Best used in conjunction with the <strong>GADWALL DUCK CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Gadwall')}`} className="wiki-link">Gadwalls</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/salzwiesen-park`} className="wiki-link">Salzwiesen Park DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'harlequin_duck_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            These full-body, realistic decoys have a lifelike appearance that easily fool even wary birds.
                          </p>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying ducks landing nearby. Deploying multiple decoys will increase the probability of harlequin ducks landing. The effect of multiple decoys in the same area stacks up to a max on 20 decoys.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Harlequin Duck')}`} className="wiki-link">Harlequin Ducks</Link>. These decoys have identical stats to the Cinnamon Teal Decoys and Mallard Decoys.
                          </p>
                        </div>
                      )}
                      {d.id === 'mallard_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            These full-body, realistic decoys have a lifelike appearance that easily fool even wary birds.
                          </p>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying mallards landing nearby. Deploying multiple decoys will increase the probability of mallards landing. The effect of multiple decoys in the same area stacks up to a max on 20 decoys. Best used in conjunction with the <strong>BEACON DELUXE DUCK CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Mallard')}`} className="wiki-link">Mallards</Link>. These decoys share the same stats as both the Cinnamon Teal Decoys, and the Harlequin Duck Decoys.
                          </p>
                        </div>
                      )}
                      {d.id === 'tufted_duck_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p className="wiki-p-mb">
                            Deploy these decoys at lake shorelines to increase the chance of flying tufted duck landing nearby. Deploying multiple decoys will increase the probability of birds landing. The effect of multiple decoys in the same area stacks up to a max of 20 decoys.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Tufted Duck')}`} className="wiki-link">Tufted Ducks</Link>. These decoys are bought in groups of 10, for 4000 and have stats of 2 attraction strength, 500 m of range, and a weight of 1. Requires <Link to={`/maps/revontuli-coast`} className="wiki-link">Revontuli Coast DLC</Link>.
                          </p>
                        </div>
                      )}
                      {d.id === 'wild_turkey_female_decoy' && (
                        <div className="wiki-section-card wiki-decoy-textbox" style={{ marginTop: 12 }}>
                          <p>
                            Trigger the dominant instincts of any big gobbler with these true-to-life (female/strutting) decoys, offering unbeatable attraction power to bring in the big birds. Blow molded to withstand grueling weather conditions, these decoys will surely be part of your arsenal for years to come. Deploying multiple decoys will maximize the attraction.
                          </p>
                          <p className="wiki-p-mb">
                            The effect of multiple decoys in the same area stacks up to a max of 5 decoys. Best used in conjunction with the <strong>TURKEY MOUTH CALLER</strong>.
                          </p>
                          <p className="wiki-fs-sm" style={{ fontStyle: 'italic', fontWeight: 700 }}>— In-Game Description</p>
                          <p className="wiki-p-mt">
                            This group of decoys are used to target <Link to={`/animals/${slug('Eastern Wild Turkey')}`} className="wiki-link">Eastern Wild Turkeys</Link>, <Link to={`/animals/${slug('Merriam Turkey')}`} className="wiki-link">Merriam Turkeys</Link> and <Link to={`/animals/${slug('Rio Grande Turkey')}`} className="wiki-link">Rio Grande Turkeys</Link>. These decoys are purchased as singular decoys for 3200 and share an attraction strength of 8, a range of 500 m, and a weight of 1.5.
                          </p>
                        </div>
                      )}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
