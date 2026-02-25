import { Link } from 'react-router-dom';
import '../../styles/wiki.css';

export default function LuresPage() {
  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Lures</h1>

        <div className="wiki-p-mb">
          <ul className="wiki-ul">
            <li className="wiki-li"><Link to="/lures/decoys/names" className="wiki-link">Decoys</Link></li>
            <li className="wiki-li"><Link to="/lures/scents/names" className="wiki-link">Scents</Link></li>
            <li className="wiki-li"><Link to="/lures/callers/names" className="wiki-link">Callers</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
