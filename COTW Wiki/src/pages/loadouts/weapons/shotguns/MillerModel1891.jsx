import { useState } from 'react';
import '../../../../styles/wiki.css';
import MillerModel1891Deputy from '../../../../assets/MillerModel1891Deputy.webp';
import MillerModel1891Rancher from '../../../../assets/MillerModel1891Rancher.webp';
import MillerModel1891Sheriff from '../../../../assets/MillerModel1891Sheriff.webp';
import MillerModel1891Variants from '../../../../assets/Miller_Model.webp';
import MillerModel1891Gif from '../../../../assets/Miller_Model_Gif.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

// --- Main App Component ---
export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Rancher');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const MillerImg = 'https://static.wikia.nocookie.net/thehuntercotw/images/e/e0/Shotgun_Miller_Model_1891.png';

    const variants = {
        Rancher: {
            image: MillerModel1891Rancher,
            desc: 'The standard variant featuring a well-worn wood stock and case-hardened receiver.',
        },
        Deputy: {
            image: MillerModel1891Deputy,
            desc: 'A variant with a refined finish.',
        },
        Sheriff: {
            image: MillerModel1891Sheriff,
            desc: 'A pristine variant with high-quality wood and gold engravings.',
        },
    };

    const ammoData = [
        { name: '10 GA Brass Birdshot', pen: 0, exp: 0, class: '1-2', range: '25m', price: 200 },
        { name: '10 GA Brass Buckshot', pen: 5, exp: 5, class: '4-7', range: '25m', price: 600 },
        { name: '10 GA Brass Slug', pen: 45, exp: 25, class: '6-9', range: '50m', price: 950 },
    ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Miller Model 1891</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Miller Model 1891</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
                            {Object.keys(variants).map((variantName) => (
                                <button
                                    key={variantName}
                                    onClick={() => setSelectedVariant(variantName)}
                                    type="button"
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variantName ? 'true' : undefined}
                                >
                                    {variantName}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={variants[selectedVariant].image}
                                alt={selectedVariant}
                                onError={(e) => {
                                    e.target.src = MillerImg;
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header text-sm">General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>3.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header text-sm">Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>33</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>82</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>69</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>88</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>3</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"A firearm as tenacious as they come, this lever-action shotgun follows the legacy of the gun that won the west, delivering unrelenting power with its 10 gauge brass shells. With the largest bore in any commercially produced shotgun, the Miller Model 1891 leaves little to be desired when it comes to close-range stopping power."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Miller Model 1891 Rancher</strong> is a classic lever-action shotgun. Known for its reliable operation and plentiful use during the end of the 19th century, it is still used throughout the world as a traditional rifle for hunting. Thanks to its shotgun design, it is capable of hunting the vast majority of game available across the reserves. It is directly based off of the Real world Winchester Model 1887/1901 Lever Action Shotgun. ingame it is depicted with a full length stock and barrel configuration
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">Smoking Barrels Weapon Pack</a> DLC.
                            </p>
                        </div>

                        <div className="wiki-toc-panel wiki-p-mb">
                            <div className="wiki-toc-panel-header">
                                <span className="wiki-toc-panel-title">Contents</span>
                                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                                    [{isTocOpen ? 'hide' : 'show'}]
                                </span>
                            </div>
                            {isTocOpen && (
                                <ul className="wiki-list-plain">
                                    <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                                    <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other shotguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most shotguns, three variants of its ammunition are available:</p>

                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr>
                                            <th className="wiki-th">Ammo</th>
                                            <th className="wiki-th">Penetration</th>
                                            <th className="wiki-th">Expansion</th>
                                            <th className="wiki-th">Class</th>
                                            <th className="wiki-th">Range</th>
                                            <th className="wiki-th">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ammoData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="wiki-td font-bold">{item.name}</td>
                                                <td className="wiki-td">{item.pen}</td>
                                                <td className="wiki-td">{item.exp}</td>
                                                <td className="wiki-td">{item.class}</td>
                                                <td className="wiki-td">{item.range}</td>
                                                <td className="wiki-td">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="sights" className="pt-8">
                            <h2 className="wiki-h2">2. Sights</h2>
                            <p className="wiki-p-mb">
                                The Miller Model 1891 cannot be equipped with any optical sights. It relies solely on its <strong>Iron Sights</strong>.
                            </p>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    <strong>Miller Model 1891 Rancher</strong> is the standard variant, featuring a worn wood and case-hardened finish.
                                </p>
                                <p className="mt-4">
                                    <strong>Miller Model 1891 Deputy</strong> is an alternate style a gold trim and iridescent plating on the side of the receiver.
                                </p>
                                <p className="mt-4">
                                    <strong>Miller Model 1891 Sheriff</strong> is a variant built from dark brown wood, and black metal. The receiver has golden filigree inlaid onto the side.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">This weapon is based on the Winchester Model 1887/1901 repeating shotguns.</p>
                            <p className="wiki-p-mb">the Gun is famous for its appearances in media such as Terminator 2: Judgment day and Call Of Duty: Modern Warfare 2 (2009) where it appeared in a Sawn off configuration</p>
                            <p className="wiki-p-mb">The Brass 10 Gauge Shells are a direct reference to how Shotgun shells were made in the early 1800s and the large muzzle smoke produced by the gun is most likely because they are Black powder shells (As smokeless powder was only invented 3 years prior before this gun was made) and because the first alternative shotgun shell materials (That being paper) were only just starting to appear and the modern plastic shotgun shell wasn't invented until the 1960's</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Variants', img: MillerModel1891Variants },
                                    { title: 'Action', img: MillerModel1891Gif },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-gallery-item">
                                        <div className="wiki-gallery-placeholder">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <span className="wiki-gallery-label">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">6. Comparison to other shotguns</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img
                                        src={ShotgunDiagram}
                                        alt="Shotgun Comparison Chart"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="pt-8">
                            <WeaponsTable />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}