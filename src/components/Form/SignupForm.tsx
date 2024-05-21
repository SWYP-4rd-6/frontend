import { Fragment, useEffect, useState } from 'react';
import { UserState, useUserInfoStore } from '@/store/UserInfoStore';
import PasswordInput from '../Input/PasswordInput';
import ButtonInput from '../Input/ButtonInput';
import ArrowButton from '../Button/ArrowButton';
import ValidateCheck from './ValidateCheck';
import { useNavigate } from 'react-router-dom';
import { checkEmail, signup } from '@/pages/signup-page';

interface PropsType {
  setSignupStage: React.Dispatch<React.SetStateAction<number>>;
}

const SignupForm = ({ setSignupStage }: PropsType) => {
  const { user, changeState } = useUserInfoStore();
  const [activate, setActivate] = useState(false);
  const navigate = useNavigate();
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
    const password = user.password;
    const pwCheck = user.passwordCheck;
    checkPasswordValidity(password, pwCheck);
  }, [user.password, user.passwordCheck]);

  // 다음단계로 가기위해 모든 입력값이 유효성을 충족하는지 관찰
  useEffect(() => {
    if (
      pwValid.containEng &&
      pwValid.containNum &&
      pwValid.pwLength &&
      pwValid.check &&
      checkDuplication
    ) {
      setActivate(true);
    } else {
      setActivate(false);
    }
  }, [pwValid, checkDuplication]);

  const checkEmailQuery = async () => {
    const email = user.email;
    const res = await checkEmail(email);
    if (res) {
      alert('사용 가능한 이메일입니다.');
      setCheckDuplication(true);
    } else {
      alert('이미 존재하는 이메일입니다.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeState(name as keyof UserState['user'], value);
  };

  return (
    <div className='flex flex-col h-full'>
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
          type="text"
          name="email"
          autoComplete="off"
          value={user.email}
          handleChange={handleChange}
          clickFunc={() => checkEmailQuery()}
          buttonText={!checkDuplication ? '중복확인' : '확인완료'}
        />
        <div className="flex items-center mt-[8px] mb-[10px]">
          <ValidateCheck content="중복 확인" isChecked={checkDuplication} />
        </div>

        <label htmlFor="password" className="label-style">
          비밀번호
        </label>
        <PasswordInput
          id="password"
          name="password"
          autoComplete="current-password"
          value={user.password}
          handleChange={handleChange}
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
          name="passwordCheck"
          autoComplete="current-password"
          value={user.passwordCheck}
          handleChange={handleChange}
        />
        <div className="flex items-center mt-[8px]">
          <ValidateCheck content="비밀번호 일치" isChecked={pwValid.check} />
        </div>
      </form>
      {/* 이 div가 남은 공간 다 차지하게 해줘 */}
      <div className='flex-grow w-full h-full'></div>
      <ArrowButton
        activate={activate}
        moveForward={() => setSignupStage(2)}
        moveBack={() => signup()}
      />
    </div>
  );
};

export default SignupForm;
