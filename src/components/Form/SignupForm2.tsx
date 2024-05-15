import { Fragment } from 'react/jsx-runtime';
import BasicInput from '../Input/BasicInput';
import ButtonInput from '../Input/ButtonInput';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Country } from '@/types/userInfo';
import Select, { StylesConfig } from 'react-select';
import { getLocation } from '@/\butils/getLocation';
import PhoneAuth from '../Input/PhoneAuth';
import { countryList } from '@/constants/common';
import ArrowButton from '../Button/ArrowButton';
import { useActivateStore } from '@/store/activateStore';
import { checkNickname, signup } from '@/pages/signup-page';
import { useUserInfoStore } from '@/store/userInfoStore';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  setSignupStage: React.Dispatch<React.SetStateAction<number>>;
}

type Gender = 'Male' | 'Female' | null;

const SignupForm2 = ({ setSignupStage }: PropsType) => {
  const readyToNext = useActivateStore((state) => state.readyToNext);
  const toggleActivateButton = useActivateStore((state) => state.toggleActivateButton);
  const saveState = useUserInfoStore((state) => state.saveState);
  const resetState = useUserInfoStore((state) => state.resetState);
  const { register, watch, setValue } = useForm();
  const [gender, setGender] = useState<Gender>(null);
  const [location, setLocation] = useState('');
  const [checkDuplication, setCheckDuplication] = useState({
    nickname: false,
    phone: false,
  });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigate = useNavigate();
  const GENDER_BUTTON_STYLE = `w-20 p-2 px-[20px] border-2 border-[#D9D9D9] text-[#D9D9D9] focus:outline-none transition`;
  const countries: Country[] = countryList;

  // 국적 input 스타일링 (라이브러리)
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      height: '2.5rem',
      border:
        state.isFocused || state.selectProps.value ? '2px solid #0173FA' : '2px solid #D9D9D9',
      borderRadius: 'none',
      boxShadow: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#E5E5E5' : 'transparent',
      color: '#0173FA',
      fontWeight: '900',
      '&:hover': {
        backgroundColor: '#E5E5E5',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#0173FA',
      fontWeight: '900',
    }),
  };

  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
  };

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption ? (selectedOption as Country) : null);
  };

  const getUserLocation = async () => {
    try {
      const location = await getLocation();
      setValue('location', `${location.address}의 Matthew`);
      setLocation(location.address);
    } catch (error) {
      console.error(error);
    }
  };

  // 닉네임 중복 확인
  const checkNicknameQuery = async () => {
    const nickname = watch('nickname');
    const res = await checkNickname(nickname);
    if (res) {
      alert('사용 가능한 닉네임입니다.');
      setCheckDuplication({ ...checkDuplication, nickname: true });
    } else {
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  useEffect(() => {
    if (checkDuplication.nickname && watch('username') && gender && watch('birth')) {
      toggleActivateButton(true);
    } else {
      toggleActivateButton(false);
    }
  }, [
    checkDuplication.nickname,
    checkDuplication.phone,
    watch('username'),
    gender,
    watch('location'),
    watch('birth'),
  ]);

  const moveForward = async () => {
    toggleActivateButton(false);
    saveState({
      nickname: watch('nickname'),
      name: watch('username'),
      gender,
      birthdate: watch('birth'),
      location,
      nationality: selectedCountry?.value,
    });

    const res = await signup();
    if (res) {
      resetState();
      navigate('/');
    } else {
      alert('가입 실패');
    }
  };

  const moveBack = () => {
    toggleActivateButton(false);
    setSignupStage(1);
  };

  return (
    <Fragment>
      <div className="text-[#646464] font-[300] text-4xl flex flex-col gap-2 mb-6">
        <div className="flex">
          <span className="text-signature font-[900] flex">
            Mat<span className="transform scale-x-[-1]">t</span>hew
          </span>
          에서 사용할
        </div>
        <div>
          <span className="text-signature font-[900]">간단한 정보</span>를
        </div>
        <div>알려주세요.</div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-start w-full"
        noValidate
      >
        <div className="flex items-center gap-[40px] mb-[10px]">
          <div className="flex flex-col">
            <label htmlFor="nickname" className="label-style">
              닉네임
            </label>
            <ButtonInput
              id="nickname"
              type="nickname"
              className=""
              autoComplete="off"
              register={register('nickname')}
              value={watch('nickname')}
              buttonText={checkDuplication.nickname ? '확인완료' : '중복확인'}
              clickFunc={() => checkNicknameQuery()}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="label-style">
              이름
            </label>
            <BasicInput
              id="username"
              type="username"
              className=""
              autoComplete="off"
              register={register('username')}
              value={watch('username')}
            />
          </div>
        </div>

        <div className="flex items-center gap-[40px] flex-1 mb-[10px]">
          <div className="flex flex-col flex-1">
            <label htmlFor="nickname" className="label-style">
              생년월일
            </label>
            <BasicInput
              id="birth"
              type="text"
              className=""
              autoComplete="off"
              register={register('birth')}
              value={watch('birth')}
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="gender" className="label-style">
              성별
            </label>
            <div className="flex gap-[20px]">
              <button
                type="button"
                className={`${GENDER_BUTTON_STYLE} ${gender === 'Male' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('Male')}
              >
                남성
              </button>
              <button
                type="button"
                className={`${GENDER_BUTTON_STYLE} ${gender === 'Female' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('Female')}
              >
                여성
              </button>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="country" className="label-style">
            국적
          </label>
          <Select
            id="country"
            name="country"
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            styles={customStyles}
            placeholder="국적을 선택해주세요"
            className="mt-[5px]"
          />
        </div>

        <div className="my-5 border-t-2 border-signature w-full" />

        <div className="mb-[20px]">
          <label htmlFor="country" className="label-style">
            지역 인증 (선택)
          </label>
          <div className="mb-[5px] text-[#646464] text-[12px]">
            자신의 지역을 인증하고, 지역을 소개하는 <span className="font-[700]">Matthew</span>가
            되어보세요.
          </div>
          <ButtonInput
            id="location"
            type="location"
            className=""
            autoComplete="off"
            register={register('location')}
            value={watch('location')}
            buttonText={watch('location') ? '인증완료' : '인증하기'}
            clickFunc={getUserLocation}
            readonly={true}
          />
        </div>

        <div>
          <label htmlFor="country" className="label-style">
            휴대폰 인증 (선택)
          </label>
          <div className="text-[#646464] text-[12px]">
            가이드인 <span className="font-[700]">Matthew</span>가 되기 위해서는 인증이 필요하며,
          </div>
          <div className="mb-[5px] text-[#646464] text-[12px]">번호는 공개되지 않습니다.</div>
          <PhoneAuth setCheckDuplication={setCheckDuplication} />
        </div>
      </form>

      <ArrowButton activate={readyToNext} moveForward={moveForward} moveBack={moveBack} />
    </Fragment>
  );
};

export default SignupForm2;
