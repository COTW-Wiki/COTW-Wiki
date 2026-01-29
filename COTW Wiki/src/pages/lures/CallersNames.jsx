import { callers } from '../../data/callers';
import { Link } from 'react-router-dom';
import AntlerRattler from '../../assets/AntlerRattler.webp';
import AxisDeerScreamerCaller from '../../assets/AxisDeerScreamerCaller.webp';
import BeaconDeluxeBeanGooseCaller from '../../assets/BeaconDeluxeBeanGooseCaller.webp';
import BeaconDeluxeDuckCaller from '../../assets/BeaconDeluxeDuckCaller.webp';
import BeaconDeluxeEurasianTealCaller from '../../assets/BeaconDeluxeEurasianTealCaller.webp';
import BeaconDeluxeEurasianWigeonCaller from '../../assets/BeaconDeluxeEurasianWigeonCaller.webp';
import BeaconDeluxeGreylagGooseCaller from '../../assets/BeaconDeluxeGreylagGooseCaller.webp';
import BuckSnortWheezeCaller from '../../assets/BuckSnortWheezeCaller.webp';
import DeerBleatCaller from '../../assets/DeerBleatCaller.webp';
import DeerGruntCaller from '../../assets/DeerGruntCaller.webp';
import ElkCaller from '../../assets/ElkCaller.webp';
import GadwallCaller from '../../assets/GadwallCaller.webp';
import HazelGrouseCaller from '../../assets/HazelGrouseCaller.webp';
import MooseCaller from '../../assets/MooseCaller.webp';
import MagpieGooseCaller from '../../assets/MagpieGooseCaller.webp';
import PredatorDistressedFawnCaller from '../../assets/PredatorDistressedFawnCaller.webp';
import PredatorJackrabbitCaller from '../../assets/PredatorJackrabbitCaller.webp';
import RaccoonSquallCaller from '../../assets/RaccoonSquallCaller.webp';
import RedDeerCaller from '../../assets/RedDeerCaller.webp';
import RoeDeerCaller from '../../assets/RoeDeerCaller.webp';
import SambarMouthCaller from '../../assets/SambarMouthCaller.webp';
import ShortReedCanadaGooseCaller from '../../assets/ShortReedCanadaGooseCaller.webp';
import WildBoarCaller from '../../assets/WildBoarCaller.webp';
import WildTurkeyCrowCaller from '../../assets/WildTurkeyCrowCaller.webp';
import WildTurkeyMouthCaller from '../../assets/WildTurkeyMouthCaller.webp';
import QuistRedProElectronicCaller from '../../assets/Quist_Red_Pro_Electronic_Caller_29.webp';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '-'));
}

const callerImages = {
  'Antler_Rattler': AntlerRattler,
  'Axis_Deer_Screamer_Caller': AxisDeerScreamerCaller,
  'Beacon_Deluxe_Bean_Goose_Caller': BeaconDeluxeBeanGooseCaller,
  'Beacon_Deluxe_Duck_Caller': BeaconDeluxeDuckCaller,
  'Beacon_Deluxe_Eurasian_Teal_Caller': BeaconDeluxeEurasianTealCaller,
  'Beacon_Deluxe_Eurasian_Wigeon_Caller': BeaconDeluxeEurasianWigeonCaller,
  'Beacon_Deluxe_Greylag_Goose_Caller': BeaconDeluxeGreylagGooseCaller,
  'Buck_Snort_Wheeze_Caller': BuckSnortWheezeCaller,
  'Deer_Bleat_Caller': DeerBleatCaller,
  'Deer_Grunt_Caller': DeerGruntCaller,
  'Elk_Caller': ElkCaller,
  'Gadwall_Caller': GadwallCaller,
  'Hazel_Grouse_Caller': HazelGrouseCaller,
  'Moose_Caller': MooseCaller,
  'Magpie_Goose_Caller': MagpieGooseCaller,
  'Predator_Distressed_Fawn_Caller': PredatorDistressedFawnCaller,
  'Predator_Jackrabbit_Caller': PredatorJackrabbitCaller,
  'Raccoon_Squall_Caller': RaccoonSquallCaller,
  'Red_Deer_Caller': RedDeerCaller,
  'Roe_Deer_Caller': RoeDeerCaller,
  'Sambar_Mouth_Caller': SambarMouthCaller,
  'Short_Reed_Canada_Goose_Caller': ShortReedCanadaGooseCaller,
  'Wild_Boar_Caller': WildBoarCaller,
  'Wild_Turkey_Crow_Caller': WildTurkeyCrowCaller,
  'Wild_Turkey_Mouth_Caller': WildTurkeyMouthCaller,
  'Quist_Red_Pro_Electronic_Caller': QuistRedProElectronicCaller,
};

export default function CallersNames() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Callers</h1>
      <div className="mb-4 text-gray-700 bg-gray-50 p-4 rounded">
        <p>
          Callers are used to attract their targeted <Link to="/animals" className="text-green-800 hover:underline">animals</Link> when they're not in a stressed state. Some animals may respond to your call by making a vocal response — for example, an Elk may communicate by making a sound called a bugle. Each caller has a different attraction strength and range.
        </p>
      </div>
      <div className="mb-4">
        <Link to="/lures" className="text-green-700 hover:underline">Back to Lures</Link>
      </div>

      <h2 className="text-xl font-bold mb-4 text-green-800">Available Callers</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {callers.map((c) => (
          <div key={c.id} className="w-[30%] flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition-shadow bg-white">
            <Link to={`/lures/callers/${c.id}`} className="block mb-2">
               {callerImages[c.id] ? (
                 <img src={callerImages[c.id]} alt={c.name} className="w-[120px] h-[60px] object-contain" />
               ) : (
                 <div className="w-[120px] h-[60px] bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
               )}
            </Link>
            <Link to={`/lures/callers/${c.id}`} className="text-center text-sm text-green-800 hover:underline font-semibold">
              {c.name}
            </Link>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-bold mb-4 text-green-800 mt-12">Callers Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-2">Name</th>
              <th className="px-6 py-2">Species</th>
              <th className="px-6 py-2">Strength</th>
              <th className="px-6 py-2">Duration</th>
              <th className="px-6 py-2">Range</th>
              <th className="px-6 py-2">Price</th>
              <th className="px-6 py-2">Additional Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Antler_Rattler`} className="text-green-800 hover:underline">Antler Rattler</Link></td>
              <td className="border-t px-6 py-2">
                {["Fallow Deer","Mountain Reindeer","Grant Caribou","Lesser Kudu","Gemsbok","Blackbuck","Barasingha"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Axis_Deer_Screamer_Caller`} className="text-green-800 hover:underline">Axis Deer "Screamer" Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Axis Deer')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Axis Deer</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/parque-fernando" className="text-green-800 hover:underline">Parque Fernando</Link> or <Link to="/maps/emerald-coast" className="text-green-800 hover:underline">Emerald Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Beacon_Deluxe_Bean_Goose_Caller`} className="text-green-800 hover:underline">Beacon Deluxe Bean Goose Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Tundra Bean Goose')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Tundra Bean Goose</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Beacon_Deluxe_Duck_Caller`} className="text-green-800 hover:underline">Beacon Deluxe Duck Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Mallard","Cinnamon Teal","Common Goldeneye","Tufted Duck","Harlequin Duck","Ferruginous Duck"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Beacon_Deluxe_Eurasian_Teal_Caller`} className="text-green-800 hover:underline">Beacon Deluxe Eurasian Teal Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Eurasian Teal","Green-Winged Teal"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Beacon_Deluxe_Eurasian_Wigeon_Caller`} className="text-green-800 hover:underline">Beacon Deluxe Eurasian Wigeon Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Eurasian Wigeon')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Eurasian Wigeon</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Beacon_Deluxe_Greylag_Goose_Caller`} className="text-green-800 hover:underline">Beacon Deluxe Greylag Goose Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Greylag Goose')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Greylag Goose</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Buck_Snort_Wheeze_Caller`} className="text-green-800 hover:underline">Buck Snort Wheeze Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Whitetail Deer","Springbok","Blue Wildebeest","Lesser Kudu","Sika Deer","Nilgai"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">FREE</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/vurhonga" className="text-green-800 hover:underline">Vurhonga Savanna</Link> DLC. Only attracts males.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Deer_Bleat_Caller`} className="text-green-800 hover:underline">Deer Bleat Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Whitetail Deer","Blacktail Deer","Mule Deer","Sika Deer"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">50</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">150 Meters</td>
              <td className="border-t px-6 py-2">FREE</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Deer_Grunt_Caller`} className="text-green-800 hover:underline">Deer Grunt Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Whitetail Deer","Blacktail Deer","Sika Deer"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">25</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">250 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Elk_Caller`} className="text-green-800 hover:underline">Elk Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Roosevelt Elk","Rocky Mountain Elk"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">May provoke vocal responses.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Gadwall_Caller`} className="text-green-800 hover:underline">Gadwall Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Gadwall')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Gadwall</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Hazel_Grouse_Caller`} className="text-green-800 hover:underline">Hazel Grouse Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Hazel Grouse')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Hazel Grouse</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Moose_Caller`} className="text-green-800 hover:underline">Moose Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Moose')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Moose</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Magpie_Goose_Caller`} className="text-green-800 hover:underline">Magpie Goose Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Magpie Goose')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Magpie Goose</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/emerald-coast" className="text-green-800 hover:underline">Emerald Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Predator_Distressed_Fawn_Caller`} className="text-green-800 hover:underline">Predator Distressed Fawn Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Black Bear","Grizzly Bear","Brown Bear","Puma","Mountain Lion","Lion","Gray Wolf","Iberian Wolf","Bengal Tiger"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Predator_Jackrabbit_Caller`} className="text-green-800 hover:underline">Predator Jackrabbit Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Red Fox","Tibetan Fox","Gray Fox","Eurasian Lynx","Bobcat","Mexican Bobcat","Collared Peccary","Coyote","Side-striped Jackal","Gray Wolf","Iberian Wolf","Lion"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Raccoon_Squall_Caller`} className="text-green-800 hover:underline">Raccoon Squall Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Common Raccoon')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Common Raccoon</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Red_Deer_Caller`} className="text-green-800 hover:underline">Red Deer Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Red Deer","Sika Deer"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">May provoke vocal responses.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Roe_Deer_Caller`} className="text-green-800 hover:underline">Roe Deer Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Roe Deer","Northern Red Muntjac"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">FREE</td>
              <td className="border-t px-6 py-2">Is received for free at the start of the game.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Sambar_Mouth_Caller`} className="text-green-800 hover:underline">Sambar Mouth Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Sambar","Javan Rusa","Hog Deer"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/emerald-coast" className="text-green-800 hover:underline">Emerald Coast</Link> DLC.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Short_Reed_Canada_Goose_Caller`} className="text-green-800 hover:underline">Short Reed Canada Goose Caller</Link></td>
              <td className="border-t px-6 py-2"><Link to={`/animals/${slug('Canada Goose')}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">Canada Goose</Link></td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">25 Seconds</td>
              <td className="border-t px-6 py-2">500 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Wild_Boar_Caller`} className="text-green-800 hover:underline">Wild Boar Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Wild Boar","Warthog","Feral Pig"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Wild_Turkey_Crow_Caller`} className="text-green-800 hover:underline">Wild Turkey Crow Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Eastern Wild Turkey","Merriam Turkey","Rio Grande Turkey"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} state={{ from: '/lures/callers/names' }} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">50</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2">Requires the <Link to="/maps/silver-ridge-peaks" className="text-green-800 hover:underline">Silver Ridge Peaks</Link> DLC. May provoke vocal responses.</td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Wild_Turkey_Mouth_Caller`} className="text-green-800 hover:underline">Wild Turkey Mouth Caller</Link></td>
              <td className="border-t px-6 py-2">
                {["Eastern Wild Turkey","Merriam Turkey","Rio Grande Turkey"].map((s,i,arr)=> (
                  <span key={s}>
                    <Link to={`/animals/${slug(s)}`} className="text-green-800 hover:underline">{s}</Link>{i < arr.length-1 && <br/>}
                  </span>
                ))}
              </td>
              <td className="border-t px-6 py-2">40</td>
              <td className="border-t px-6 py-2">90 Seconds</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">6000</td>
              <td className="border-t px-6 py-2"></td>
            </tr>
            <tr>
              <td className="border-t px-6 py-2"><Link to={`/lures/callers/Quist_Red_Pro_Electronic_Caller`} className="text-green-800 hover:underline">Quist Red Pro Electronic Caller</Link></td>
              <td className="border-t px-6 py-2">ALL species that can be called (replaces 1 caller at a time)</td>
              <td className="border-t px-6 py-2">30</td>
              <td className="border-t px-6 py-2">works constantly</td>
              <td className="border-t px-6 py-2">200 Meters</td>
              <td className="border-t px-6 py-2">FREE</td>
              <td className="border-t px-6 py-2">Has a high weight of 3.5, stationary, 1 per reserve</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-gray-50 p-4 rounded text-gray-700">
        <h2 className="text-lg font-semibold mb-2">Tips for use</h2>
        <p>
          Callers may seem ineffective because they have a very narrow range of applicability. Beginner players
          sometimes think they can just run and quack and the animals will come to them, but it isn't that simple.
          There are a number of rules you should understand to use callers effectively:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            You must decide what species you are hunting. What is attractive to one type of deer or bird will in most
            cases repel others.
          </li>
          <li>
            They are designed for ambush hunting. If you are running, the noise of your steps and heart produces a
            more frightening effect than the caller's beckoning effect. You must sit still.
          </li>
          <li>
            You shouldn't be visible. Use bushes, a hideout, a tripod or a storage shed so the visibility indicator
            (lower right) shows a straight line.
          </li>
          <li>
            The wind should not blow from you towards the animal, otherwise it can smell you. Or use an odor
            neutralizer.
          </li>
          <li>
            If there is a bait model or scent for the species you want, use it in combination with the caller.
          </li>
          <li>
            If you have a dog, it should be given the "lie down" command while calling.
          </li>
          <li>
            Upgrading relevant skills is important. If you enjoy this style of hunting, level up the branch related
            to callers and decoys.
          </li>
          <li>
            The last point of that skill branch also increases the range of decoys when used next to tripods and
            stationary shelters — feel free to use it.
          </li>
        </ul>
        <p className="mt-3">
          Even if all these factors converge, do not expect every animal in the area to react; only a few will. If you
          find the right habitat and time, you can create a stationary ambush and get a more or less constant flow of
          game (for example, geese or ducks).
        </p>
        <p className="mt-3">
          The right approach is to set up an ambush in an area where a target species is needed. After you kill several
          animals in one place, need zones may disappear due to "death zones" (pink spots). You can try this tactic in
          multiplayer to keep need zones refreshed by other players' kills, but that is untested.
        </p>
      </div>
    </div>
  );
}
