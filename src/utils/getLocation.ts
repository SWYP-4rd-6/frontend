import axios from 'axios';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 86400000,
};

export const getLocation = async () => {
  const { geolocation } = navigator;

  if (!geolocation) {
    return 'Geolocation is not supported.';
  }

  // 상태를 사용하지 않고 요청에 따라 값을 반환하도록 Promise 사용
  return new Promise<any>((resolve, reject) => {
    geolocation.getCurrentPosition(
      async (pos: GeolocationPosition) => {
        try {
          const { latitude, longitude } = pos.coords;
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=ko&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
          const response = await axios.get(url);
          const { results } = response.data;
          if (results && results.length > 0) {
            const addressComponents = results[5].formatted_address;
            const address = addressComponents.split(' ').slice(1).join(' ');
            const locationInfo = {
              latitude,
              longitude,
              address,
            };
            resolve(locationInfo);
          } else {
            reject('No address found');
          }
        } catch (error) {
          reject(error);
        }
      },
      (err: GeolocationPositionError) => {
        reject({ message: err.message });
      },
      geolocationOptions,
    );
  });
};
