import { useEffect, useState } from 'react';
import { StagePropsType } from '@/pages/register-page/register-page';
import { MaterialSymbol, MaterialSymbolProps } from 'react-material-symbols';
import { Category, useTourRegStore } from '@/store/RegisterStore';
import ArrowButton from '../Button/ArrowButton';

type TourCategory = {
  icon: MaterialSymbolProps['icon'];
  label: string;
  value: Category;
};

const RegisterStage6 = ({ setStage, setStep }: StagePropsType) => {
  const { tour, setCategories, changeState } = useTourRegStore();
  const [activate, setActivate] = useState(false);

  const categories: TourCategory[] = [
    { icon: 'restaurant', label: '먹거리', value: 'DINING' },
    { icon: 'tour', label: '관광', value: 'TOUR' },
    { icon: 'nature', label: '야외활동', value: 'OUTDOOR' },
    { icon: 'sports_esports', label: '놀거리', value: 'ENTERTAINMENT' },
    { icon: 'palette', label: '문화예술', value: 'ART_CULTURE' },
    { icon: 'hiking', label: '스포츠/운동', value: 'SPORTS_FITNESS' },
  ];

  useEffect(() => {
    // 전역상태 확인 후 세팅
    if (tour.categories.length > 0) {
      setStep(6);
      setActivate(true);
    } else {
      setStep(5);
      setActivate(false);
    }
  }, [tour.categories, setStep]);

  const handleSelect = (category: Category) => {
    const newCategories = tour.categories.includes(category)
      ? tour.categories.filter((cat) => cat !== category)
      : [...tour.categories, category];
    setCategories(newCategories);
  };

  return (
    <div>
      <div className="reg-title-black mb-5">
        <div>당신과의</div>
        <div className="reg-title-blue">여행의 카테고리를</div>
        <div>선택해주세요.</div>
      </div>

      <div className="reg-subtitle mb-10">여행이 해당하는 모든 카테고리를 선택해주세요.</div>

      <div className="grid grid-cols-3 gap-10">
        {categories.map((el, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center w-full cursor-pointer"
            onClick={() => handleSelect(el.value)}
          >
            <MaterialSymbol
              icon={el.icon}
              size={46}
              fill
              color={tour.categories.includes(el.value) ? '#0173FA' : '#d9d9d9'}
            />
            <span
              className={`text-base font-[900] mt-1 ${
                tour.categories.includes(el.value) ? 'text-signature' : 'text-sub-non'
              }`}
            >
              {el.label}
            </span>
          </div>
        ))}
      </div>

      <ArrowButton
        activate={activate}
        moveForward={() => setStage(7)}
        moveBack={() => {
          changeState('images', [])
          setStage(5);
        }}
      />
    </div>
  );
};

export default RegisterStage6;
