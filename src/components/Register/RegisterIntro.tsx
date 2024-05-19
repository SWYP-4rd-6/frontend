import { StagePropsType } from '@/pages/register-page/register-page';

const RegisterIntro = ({ setStage, setStep }: StagePropsType) => {
  return (
    <div className="flex flex-col">
      <div className="text-[2.25rem] text-signature font-[900] mb-5">
        <div>당신과의 여행을</div>
        <div>소개해주세요</div>
      </div>

      <div className="text-base text-sub-bu font-[300]">
        <div>7개의 단계로 간단하게 시작해보세요.</div>
        <div>설정한 내용은 언제든지 수정하실 수 있습니다.</div>
      </div>

      <button
        type="button"
        className={`absolute bottom-12 w-full h-12 px-[33px] flex  items-center text-white bg-signature`}
        onClick={() => {
          setStage(1);
          setStep(1);
        }}
      >
        <span className="font-[700] text-xl mr-[10px]">시작하기</span>
        <span className="flex-1 text-right">
          <img src="/arrow-forward-white.png" alt="arrow" className="h-full object-contain" />
        </span>
      </button>
    </div>
  );
};

export default RegisterIntro;
