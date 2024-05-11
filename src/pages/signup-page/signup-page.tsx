import ArrowButton from '@/components/Button/ArrowButton';
import Header from '@/components/Header/Header';
import SignupForm from '@/components/Form/SignupForm';
import { useActivateStore } from '@/store/ActivateStore';

const SignUpPageView = () => {
  const readyToNext = useActivateStore((state) => state.readyToNext);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mx-6">
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
        <SignupForm />
        <ArrowButton activate={readyToNext} />
      </div>
    </div>
  );
};

export default SignUpPageView;
