import { UserState, useUserInfoStore } from '@/store/UserInfoStore';
import SignUpPageView from './signup-page';
import axios from 'axios';

// 이메일 중복확인
export const checkEmail = async (email: string): Promise<boolean | void> => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('유효하지 않은 이메일 형식입니다.');
    return;
  }
  const response = await axios.get('/api/v1/validation/email', {
    params: {
      email: email,
    },
  });
  if (response.status === 200) {
    console.log('success');
    return true;
  }
  console.log('fail');
  return false;
};

// 닉네임 중복확인
export const checkNickname = async (nickname: string): Promise<boolean> => {
  const response = await axios.get('/api/v1/validation/nickname', {
    params: {
      nickname: nickname,
    },
  });
  if (response.status === 200) {
    console.log('success');
    return true;
  }
  console.log('fail');
  return false;
};

// 전화번호 중복확인
export const checkPhone = async (phone: string): Promise<boolean> => {
  const response = await axios.get('/api/v1/validation/phone', {
    params: {
      phone: phone,
    },
  });
  if (response.status === 200) {
    console.log('success');
    return true;
  }
  console.log('fail');
  return false;
};

// 회원가입
export const signup = async () => {
  const state = useUserInfoStore.getState();
  const { saveState, resetState, ...data } = state;

  const response = await axios.post('/api/v1/auth/signup', {
    data,
  });
  if (response.status === 200) {
    console.log('success');
    return true;
  } else if (response.status === 409) {
    console.log('중복 값 존재');
  } else if (response.status === 400) {
    console.log('입력 양식 오류');
  }
  return false;
};

const SignUp = () => <SignUpPageView />;

export default SignUp;
