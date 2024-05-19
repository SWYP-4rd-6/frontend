import BasicInput from '../Input/BasicInput';
import ButtonInput from '../Input/ButtonInput';
import { useForm } from 'react-hook-form';
import { Fragment, useEffect, useState } from 'react';
import { Country } from '@/types/userInfo';
import Select, { StylesConfig } from 'react-select';
import { getLocation } from '@/utils/getLocation';
import PhoneAuth from '../Input/PhoneAuth';
import { countryList } from '@/constants/common';
import ArrowButton from '../Button/ArrowButton';
import { useActivateStore } from '@/store/ActivateStore';
import { checkNickname, signup } from '@/pages/signup-page';
import { UserState, useUserInfoStore } from '@/store/UserInfoStore';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  setSignupStage: React.Dispatch<React.SetStateAction<number>>;
}

type Gender = 'Male' | 'Female'

const SignupForm2 = ({ setSignupStage }: PropsType) => {
  const { user, changeState } = useUserInfoStore();
  const [activate, setActivate] = useState(false);
  const [location, setLocation] = useState('');
  const [checkDuplication, setCheckDuplication] = useState({
    nickname: false,
    phone: false,
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeState(name as keyof UserState['user'], value);
  };

  const handleGenderSelect = (selectedGender: Gender) => {
    changeState('gender', selectedGender);
  };

  const handleCountryChange = (selectedOption: any) => {
    changeState('nationality', selectedOption.value);
  };

  const getUserLocation = async () => {
    try {
      const location = await getLocation();
      changeState('location', location.address);
      setLocation(`${location.address}의 Matthew`);
    } catch (error) {
      console.error(error);
    }
  };

  // 닉네임 중복 확인
  const checkNicknameQuery = async () => {
    const nickname = user.nickname;
    const res = await checkNickname(nickname);
    if (res) {
      alert('사용 가능한 닉네임입니다.');
      setCheckDuplication({ ...checkDuplication, nickname: true });
    } else {
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  useEffect(() => {
    if (checkDuplication.nickname && user.name && user.gender && user.birthdate) {
      setActivate(true);
    } else {
      setActivate(false);
    }
  }, [
    checkDuplication.nickname,
    checkDuplication.phone,
    user.name,
    user.gender,
    user.location,
    user.birthdate,
  ]);

  const moveForward = async () => {
    const res = await signup();
    if (res) {
      navigate('/');
    } else {
      alert('가입 실패');
    }
  };

  const moveBack = () => {
    setSignupStage(1);
  };

  return (
    <div>
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
              type="text"
              name="nickname"
              autoComplete="off"
              value={user.nickname}
              handleChange={handleChange}
              buttonText={checkDuplication.nickname ? '확인완료' : '중복확인'}
              clickFunc={() => checkNicknameQuery()}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="label-style">
              이름
            </label>
            <BasicInput
              id="name"
              type="text"
              name="name"
              className=""
              autoComplete="off"
              value={user.name}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-[40px] flex-1 mb-[10px]">
          <div className="flex flex-col flex-1">
            <label htmlFor="birthdate" className="label-style">
              생년월일
            </label>
            <BasicInput
              id="birthdate"
              type="text"
              name="birthdate"
              autoComplete="off"
              value={user.birthdate}
              handleChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="gender" className="label-style">
              성별
            </label>
            <div className="flex gap-[20px]">
              <button
                type="button"
                className={`${GENDER_BUTTON_STYLE} ${user.gender === 'Male' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('Male')}
              >
                남성
              </button>
              <button
                type="button"
                className={`${GENDER_BUTTON_STYLE} ${user.gender === 'Female' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('Female')}
              >
                여성
              </button>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="nationally" className="label-style">
            국적
          </label>
          <Select
            id="nationally"
            name="nationally"
            options={countries}
            onChange={handleCountryChange}
            styles={customStyles}
            placeholder="국적을 선택해주세요"
            className="mt-[5px]"
          />
        </div>

        <div className="my-5 border-t-2 border-signature w-full" />

        <div className="mb-[20px]">
          <label htmlFor="location" className="label-style">
            지역 인증 (선택)
          </label>
          <div className="mb-[5px] text-[#646464] text-[12px]">
            자신의 지역을 인증하고, 지역을 소개하는 <span className="font-[700]">Matthew</span>가
            되어보세요.
          </div>
          <ButtonInput
            id="location"
            type="text"
            name="location"
            autoComplete="off"
            value={location}
            buttonText={location ? '인증완료' : '인증하기'}
            clickFunc={getUserLocation}
            readonly={true}
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-style">
            휴대폰 인증 (선택)
          </label>
          <div className="text-[#646464] text-[12px]">
            가이드인 <span className="font-[700]">Matthew</span>가 되기 위해서는 인증이 필요하며,
          </div>
          <div className="mb-[5px] text-[#646464] text-[12px]">번호는 공개되지 않습니다.</div>
          <PhoneAuth setCheckDuplication={setCheckDuplication} />
        </div>
      </form>

      <ArrowButton activate={activate} moveForward={moveForward} moveBack={moveBack} />
    </div>
  );
};

export default SignupForm2;
