import './neighborhood-preview.css';

export function NeighborhoodPreview() {
  return (
    <span className="birthday-scene" aria-hidden="true">
      <span className="birthday-map">
        <span className="map-pond" />
        <span className="map-road" /><span className="map-road map-crossroad" />
        <span className="map-house house-mint" /><span className="map-house house-coral" /><span className="map-house house-yellow" />
        <span className="map-folds" />
      </span>
    </span>
  );
}
