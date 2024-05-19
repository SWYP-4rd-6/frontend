import React, { useState, useEffect, useRef } from 'react';
import { StagePropsType } from '@/pages/register-page/register-page';
import ArrowButton from '../Button/ArrowButton';
import { useTourRegStore } from '@/store/RegisterStore';

const RegisterStage2 = ({ setStage, setStep }: StagePropsType) => {
  const { tour, changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoCompleteRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const geocoder = useRef<google.maps.Geocoder | null>(null);

  useEffect(() => {
    const loadScript = (url: string, callback: () => void) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    const handleScriptLoad = () => {
      autoCompleteRef.current = new window.google.maps.places.AutocompleteService();
      geocoder.current = new window.google.maps.Geocoder();
      setScriptLoaded(true);
    };

    if (!scriptLoaded) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`,
        handleScriptLoad,
      );
    }
  }, [scriptLoaded]);

  useEffect(() => {
    if (tour.place && tour.latitude && tour.longitude) {
      setStep(2);
      setActivate(true);
    } else {
      setStep(1);
      setActivate(false);
    }
  }, [tour.place, tour.latitude]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    changeState('place', input);
    if (!input) {
      setSuggestions([]);
      return;
    }

    if (autoCompleteRef.current) {
      autoCompleteRef.current.getPlacePredictions({ input }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          setSuggestions(predictions);
        } else {
          setSuggestions([]);
        }
      });
    }
  };

  const handleSelectPlace = async (placeId: string, mainText: string) => {
    if (!geocoder.current) return;

    geocoder.current.geocode({ placeId }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        changeState('latitude', lat());
        changeState('longitude', lng());
        console.log('위도:', lat(), '경도:', lng());
      } else {
        console.error('장소를 찾을 수 없습니다.');
      }
    });
    changeState('place', mainText);
    setStep(2);
  };

  return (
    <div>
      <div className="reg-title-black mb-5">
        <div>
          <span className="reg-title-blue">어디</span>를
        </div>
        <div>여행할까요?</div>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="주소를 입력해주세요."
        value={tour.place}
        onChange={handleInputChange}
        className="w-full h-9 border-2 border-signature text-signature font-[900] placeholder-normal caret-black focus:outline-none px-2"
      />
      <div className="border-x border-b">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`border-b border-sub-no py-1 mx-2 text-sub-bu ${index === suggestions.length && 'border-none'}`}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = suggestion.structured_formatting.main_text;
                setSuggestions([]);
                handleSelectPlace(suggestion.place_id, suggestion.structured_formatting.main_text);
              }
            }}
          >
            {suggestion.structured_formatting.main_text}
          </div>
        ))}
      </div>

      <ArrowButton
        activate={activate}
        moveForward={() => setStage(3)}
        moveBack={() => setStage(1)}
      />
    </div>
  );
};

export default RegisterStage2;
