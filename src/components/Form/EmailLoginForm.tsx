import { emailLogin } from '@/apis/login';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BasicInput from '../Input/BasicInput';
import PasswordInput from '../Input/PasswordInput';

const EmailLoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const emailLoginQuery = useMutation({
    mutationFn: emailLogin,
    onSuccess(data) {
      if (data?.data.success) {
        console.log(data);
        const { token, refreshToken } = data.data;
        // 로그인 성공 시 토큰과 리프레시 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        // 로그인 성공 메시지
        alert('로그인 성공!');
        navigate(`/`);
      } else {
        alert('아이디와 비밀번호를 확인해주세요');
      }
    },
  });

  const onSubmit = async (data: any) => {
    // 중복 제출 방지용 타임아웃
    await new Promise((r) => setTimeout(r, 1_000));
    emailLoginQuery.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-[21rem]"
      noValidate
    >
      {errors.email && (
        <small role="alert" className="text-red-600 mb-1">
          {errors.email.message as string}
        </small>
      )}
      <BasicInput
        id="email"
        type="email"
        placeholder="이메일 주소"
        className="mb-[10px] border-signature"
        autoComplete="off"
        register={register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      {errors.password && (
        <small role="alert" className="text-red-600 mb-1">
          {errors.password.message as string}
        </small>
      )}
      <div className="mb-9">
        <PasswordInput
          id="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          className='border-signature'
          register={register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '8자리 이상 비밀번호를 사용하세요.',
            },
          })}
        />
      </div>

      <button
        type="submit"
        className={`flex justify-center items-center w-full h-12 border-2 border-[#D9D9D9] text-xl font-[900] text-[#E7E7E7] transition
          ${watch('email') && watch('password') && 'text-white bg-signature border-none'}`}
        disabled={isSubmitting}
      >
        로그인
      </button>
    </form>
  );
};

export default EmailLoginForm;
