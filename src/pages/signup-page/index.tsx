import { UserState, useUserInfoStore } from '@/store/UserInfoStore';
import SignUpPageView from './signup-page';
import axios from 'axios';
import GoogleSignupPageView from './google-signup-page';

// 이메일 중복확인
export const checkEmail = async (email: string): Promise<boolean | void> => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('유효하지 않은 이메일 형식입니다.');
    return;
  }

  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/validation/email`, {
      params: {
        email: email,
      },
    });

    if (response.status === 200) {
      console.log('success');
      return true;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 409) {
        console.log('fail');
        alert('이미 사용 중인 이메일입니다.');
        return false;
      } else {
        console.error('An error occurred:', error.response?.status, error.message);
        alert('이메일 확인 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } else {
      console.error('An unexpected error occurred:', error);
      alert('예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  }
};

// 닉네임 중복확인
export const checkNickname = async (nickname: string): Promise<boolean | void> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/validation/nickname`, {
      params: {
        nickname: nickname,
      },
    });

    if (response.status === 200) {
      console.log('success');
      return true;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 409) {
        console.log('fail');
        alert('이미 사용 중인 닉네임입니다.');
        return false;
      } else {
        console.error('An error occurred:', error.response?.status, error.message);
        alert('닉네임 확인 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } else {
      console.error('An unexpected error occurred:', error);
      alert('예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  }
};

// 전화번호 중복확인
export const checkPhone = async (phone: string): Promise<boolean | void> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/validation/phone`, {
      params: {
        phone: phone,
      },
    });

    if (response.status === 200) {
      console.log('success');
      return true;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 409) {
        console.log('fail');
        alert('이미 사용 중인 전화번호입니다.');
        return false;
      } else {
        console.error('An error occurred:', error.response?.status, error.message);
        alert('전화번호 확인 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } else {
      console.error('An unexpected error occurred:', error);
      alert('예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  }
};

// 회원가입
export const signup = async () => {
  const userData = useUserInfoStore.getState().user;

  const validData = await Object.entries(userData).reduce((acc: any, [key, value]) => {
    if (value !== '' && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});
  console.log(validData);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/v1/auth/signup`,
      validData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      console.log('Signup success');
      return true;
    } else if (response.status === 409) {
      console.log('Duplicate entry exists');
    } else if (response.status === 400) {
      console.log('Form input error');
    }
  } catch (error) {
    console.error('Signup failed:', error);
    return false;
  }
  return false;
};

// 구글 회원가입
export const googleSignup = async () => {
  const userData = useUserInfoStore.getState().googleUser;

  const validData = await Object.entries(userData).reduce((acc: any, [key, value]) => {
    if (value !== '' && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});
  console.log(validData);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/v1/oauth2/google/signup`,
      validData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      console.log('Signup success');
      return response.data;
    } else if (response.status === 409) {
      console.log('Duplicate entry exists');
    } else if (response.status === 400) {
      console.log('Form input error');
    }
  } catch (error) {
    console.error('Signup failed:', error);
    return false;
  }
  return false;
};

export const SignUp = () => <SignUpPageView />;

export const GoogleSignup = () => <GoogleSignupPageView />


