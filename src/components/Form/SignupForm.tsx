import { useForm } from 'react-hook-form';
import PasswordInput from '../Input/PasswordInput';
import ValidateCheck from './ValidateCheck';
import { Fragment, useEffect, useState } from 'react';
import { useActivateStore } from '@/store/ActivateStore';
import ButtonInput from '../Input/ButtonInput';
import { checkEmail } from '@/pages/signup-page';

const SignupForm = () => {
  const toggleActivateButton = useActivateStore((state) => state.toggleActivateButton);
  const { register, handleSubmit, watch } = useForm();
  const [checkDuplication, setCheckDuplication] = useState(false);
  const [pwValid, setPwValid] = useState({
    containEng: false,
    containNum: false,
    pwLength: false,
    check: false,
  });

  const checkPasswordValidity = (value: string, pwCheck: string) => {
    const containEng = /[a-zA-Z]/.test(value);
    const containNum = /\d/.test(value);
    const pwLength = value.length >= 8 && value.length <= 20;
    const isEqual = value && pwCheck ? value === pwCheck : false;
    setPwValid({
      containEng,
      containNum,
      pwLength,
      check: isEqual,
    });
  };

  // 비밀번호 입력 변화를 감지하여 유효성 검사
  useEffect(() => {
    const password = watch('password');
    const pwCheck = watch('passwordCheck');
    checkPasswordValidity(password, pwCheck);
    console.log(pwValid);
  }, [watch('password'), watch('passwordCheck')]);

  // 다음단계로 가기위해 모든 입력값이 유효성을 충족하는지 관찰
  useEffect(() => {
    if (
      pwValid.containEng &&
      pwValid.containNum &&
      pwValid.pwLength &&
      pwValid.check &&
      checkDuplication
    ) {
      toggleActivateButton(true);
    } else {
      toggleActivateButton(false);
    }
  }, [pwValid, checkDuplication]);

  // useQuery로 변경 예정
  const checkEmailQuery = async () => {
    const email = watch('email');
    const emailRegex = /^\S+@\S+\.\S+$/;

    // 입력된 이메일이 정규식에 부합하는지 확인
    if (!emailRegex.test(email)) {
      alert('유효하지 않은 이메일 형식입니다.');
      return;
    }

    // 이메일이 정규식에 부합하면 중복 확인 수행
    const res: boolean = await checkEmail(email);

    if (res) {
      alert('사용 가능한 이메일입니다.');
      setCheckDuplication(true);
    } else {
      alert('이미 존재하는 이메일입니다.');
    }
  };

  return (
    <Fragment>
      <div className="text-[#646464] font-[300] text-4xl flex flex-col gap-2 mb-6">
        <div>
          <span className="text-signature font-[900]">로그인</span>에 사용할
        </div>
        <div>
          <span className="text-signature font-[900]">아이디</span>와{' '}
          <span className="text-signature font-[900]">비밀번호</span>를
        </div>
        <div>입력해주세요.</div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-start w-full"
        noValidate
      >
        <label htmlFor="email" className="label-style">
          이메일 주소
        </label>
        <ButtonInput
          id="email"
          type="email"
          className=""
          autoComplete="off"
          register={register('email')}
          value={watch('email')}
          clickFunc={() => checkEmailQuery()}
          buttonText="중복확인"
        />
        <div className="flex items-center mt-[8px] mb-[10px]">
          <ValidateCheck content="중복 확인" isChecked={checkDuplication} />
        </div>

        <label htmlFor="password" className="label-style">
          비밀번호
        </label>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          register={register('password')}
          value={watch('password')}
        />
        <div className="flex items-center gap-3 mb-[10px] mt-[8px]">
          <ValidateCheck content="영문포함" isChecked={pwValid.containEng} />
          <ValidateCheck content="숫자포함" isChecked={pwValid.containNum} />
          <ValidateCheck content="8~20자 이내" isChecked={pwValid.pwLength} />
        </div>

        <label htmlFor="passwordCheck" className="label-style">
          비밀번호 확인
        </label>
        <PasswordInput
          id="passwordCheck"
          autoComplete="current-password"
          register={register('passwordCheck')}
          value={watch('passwordCheck')}
        />
        <div className="flex items-center mt-[8px]">
          <ValidateCheck content="비밀번호 일치" isChecked={pwValid.check} />
        </div>
      </form>
    </Fragment>
  );
};

export default SignupForm;
