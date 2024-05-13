import { Fragment } from 'react/jsx-runtime';
import BasicInput from '../Input/BasicInput';
import ButtonInput from '../Input/ButtonInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Country } from '@/types/userInfo';
import Select, { StylesConfig } from 'react-select';
import { getLocation } from '@/\butils/getLocation';
import PhoneAuth from '../Input/PhoneAuth';
import { countryList } from '@/constants/common';

const SignupForm2 = () => {
  const { register, watch, setValue } = useForm();
  const [gender, setGender] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const GENDER_BUTTON_STYLE = `w-20 p-2 px-[20px] border-2 border-[#D9D9D9] text-[#D9D9D9] focus:outline-none transition`;
  const countries: Country[] = countryList;

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

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption ? (selectedOption as Country) : null);
  };

  const getUserLocation = async () => {
    try {
      const location = await getLocation();
      setValue('location', location.address);
    } catch (error) {
      console.error(error);
    }
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
              buttonText="중복확인"
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
              type="birth"
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
                className={`${GENDER_BUTTON_STYLE} ${gender === 'male' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('male')}
              >
                남성
              </button>
              <button
                type="button"
                className={`${GENDER_BUTTON_STYLE} ${gender === 'female' ? 'bg-signature text-white font-[900] border-none' : 'bg-white'}`}
                onClick={() => handleGenderSelect('female')}
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
          <PhoneAuth />
        </div>
        
      </form>
    </Fragment>
  );
};

export default SignupForm2;
