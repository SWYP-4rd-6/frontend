import { useEffect, useRef, useState } from 'react';

const GoogleMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: 37.5,
          lng: 127.0,
        },
        zoom: 16,
        mapId: 'db41baeb66c351b9',
      });

      setGoogleMap(initialMap);
    }
  }, []);

  return <div ref={ref} id="map" className="h-screen" />;
};

export default GoogleMap;
