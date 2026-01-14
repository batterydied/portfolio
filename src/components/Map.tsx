import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://api.maptiler.com/maps/dataviz-dark/style.json?key=pW2wYWjyttLgPtcEpSxT",
      center: [-71.1440, 42.1626],
      zoom: 2,
      attributionControl: false,
    });

    map.on("load", () => {
      map.flyTo({
        zoom: 8,
        center: [-71.1440, 42.1626],
        speed: 0.8,
        curve: 1.6,
        essential: true,
      });

      new maplibregl.Marker()
        .setLngLat([-71.1440, 42.1626])
        .addTo(map);
    });

    return () => map.remove();
  }, [])

  return (
    <div
      className="relative w-full h-48 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "cover",
      }}
    >
      <div id="map" className="w-full h-full"></div>
    </div>
  );
}
