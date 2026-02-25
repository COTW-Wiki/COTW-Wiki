import { useParams, Link } from 'react-router-dom';
import { decoys } from '../../data/decoys';
import '../../styles/wiki.css';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function DecoyDetail() {
  const { decoyId } = useParams();

  const decoy = decoys.find((d) => d.id === decoyId || slug(d.name) === decoyId || encodeURIComponent(d.name.replace(/\s+/g, '_')) === decoyId);

  if (!decoy) {
    return (
      <div className="wiki-page">
        <div className="wiki-inner">
          <h1 className="wiki-header">Decoy not found</h1>
          <div className="wiki-section-card">
            <p>
              No decoy matches the id: <code>{decoyId}</code>
            </p>
            <p className="wiki-p-mb">
              <Link to="/lures/decoys" className="wiki-link">Back to Decoys</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <div className="wiki-p-mb">
          <Link to="/lures/decoys" className="wiki-link">Back to Decoys</Link>
        </div>

        <h1 className="wiki-header">{decoy.name}</h1>

        <div className="wiki-section-card">
          {decoy.description && <p className="wiki-p-mb">{decoy.description}</p>}

          <ul className="wiki-ul">
            {decoy.target && <li className="wiki-li"><strong>Target:</strong> {decoy.target.join(', ')}</li>}
            {decoy.groupSize != null && <li className="wiki-li"><strong>Group size:</strong> {decoy.groupSize}</li>}
            {decoy.attractionStrength != null && (
              <li className="wiki-li"><strong>Attraction strength:</strong> {decoy.attractionStrength}</li>
            )}
            {decoy.range && <li className="wiki-li"><strong>Range:</strong> {decoy.range}</li>}
            {decoy.weight && <li className="wiki-li"><strong>Weight:</strong> {decoy.weight}</li>}
            {decoy.notes && <li className="wiki-li"><strong>Notes:</strong> {decoy.notes}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
