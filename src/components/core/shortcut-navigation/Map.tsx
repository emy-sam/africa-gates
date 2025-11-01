'use client';

import { useEffect, useRef } from 'react';
import type { Map as LMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map: LMap;

    (async () => {
      // Dynamically import leaflet only on client side
      const L = await import('leaflet');

      // Fix default icon issues in Next.js
      const prototype = L.Icon.Default.prototype as unknown as {
        _getIconUrl?: string;
      };
      delete prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (mapRef.current) {
        map = L.map(mapRef.current, { scrollWheelZoom: false }).setView(
          [36.834921246083276, 10.202831671701075],
          13
        );
        map.scrollWheelZoom.disable();

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        L.marker([36.834921246083276, 10.202831671701075]).addTo(map);
      }
    })();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="relative z-10 flex h-screen w-full items-center justify-center">
      <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};
export default Map;
