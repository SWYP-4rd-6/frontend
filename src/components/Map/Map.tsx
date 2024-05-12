import { Status, Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <GoogleMap />;
  }
};

const Map = () => (
  <Wrapper
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    render={render}
    libraries={['marker']}
  />
);

export default Map;
