import { useNavigate } from 'react-router-dom';
import BasicInput from '../Input/BasicInput';
import PasswordInput from '../Input/PasswordInput';
import { useState, FormEvent, useEffect } from 'react';
import { emailLogin } from '@/pages/login-page/login-page';
import { jwtDecode } from 'jwt-decode';
import useLoginStore from '@/store/LoginStore';

const EmailLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setIsLogin } = useLoginStore();

  useEffect(() => {
    if (email && password) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [email, password]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('이메일 형식에 맞지 않습니다.');
      return;
    }

    // 중복 제출 방지용 타임아웃
    await new Promise((r) => setTimeout(r, 1000));

    const res = await emailLogin({ email, password });

    if (res) {
      const { accessToken, refreshToken } = res.data;
      // 토큰에서 만료 시간 추출
      let expirationTime;
      try {
        const decodedToken = jwtDecode(accessToken);
        expirationTime = decodedToken.exp ? decodedToken.exp * 1000 : null;

        if (expirationTime) {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('tokenExpiration', expirationTime.toString());
        }
      } catch (error) {
        console.error('토큰 디코딩 실패:', error);
        alert('토큰 처리 중 오류가 발생했습니다. 다시 시도해 주세요.');
        return;
      }

      setIsLogin(true);
      navigate('/');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col justify-center w-[21rem]"
      noValidate
    >
      <BasicInput
        id="email"
        type="text"
        name="email"
        placeholder="이메일 주소"
        className="mb-[10px] border-signature placeholder-signature"
        autoComplete="off"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <div className="mb-9">
        <PasswordInput
          id="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          className="border-signature"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className={`flex justify-center items-center w-full h-12 border-2 border-[#D9D9D9] text-xl font-[900] text-[#E7E7E7] transition
          ${email && password && 'text-white bg-signature border-none'}`}
        disabled={!isSubmitting}
      >
        로그인
      </button>
    </form>
  );
};

export default EmailLoginForm;
