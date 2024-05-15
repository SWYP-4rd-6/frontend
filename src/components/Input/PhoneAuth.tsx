import { Fragment, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from '../../firebase/setup';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import ReactModal from 'react-modal';
import { countryCode } from '@/constants/common';
import { checkPhone } from '@/pages/signup-page';
import { useUserInfoStore } from '@/store/userInfoStore';
interface PropsType {
  setCheckDuplication: React.Dispatch<React.SetStateAction<any>>;
}

const PhoneAuth = ({ setCheckDuplication }: PropsType) => {
  const saveState = useUserInfoStore((state) => state.saveState);
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState<ConfirmationResult | null>(null);
  const [otp, setOtp] = useState('');
  const [recaptcha, setRecaptcha] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const countryNumbers = countryCode;

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '360px',
      height: '180px',
      zIndex: '150',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto',
    },
  };

  useEffect(() => {
    ReactModal.setAppElement('#root'); // 앱 요소 설정
  }, []);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
      setModalIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user?.confirm(otp);
      if (data) {
        const phoneNum = data.user.phoneNumber as string;
        if (data.operationType === 'signIn') {
          const res = await checkPhone(phoneNum);
          if (!res) {
            alert('중복된 전화번호입니다.');
          } else {
            setModalIsOpen(false);
            setRecaptcha(false);
            setCheckDuplication((prev: any) => ({ ...prev, phone: true }));
            saveState({
              phone,
            });
            return true;
          }
        }
      }
    } catch (error) {
      alert('인증코드가 올바르지 않습니다.');
    }
    setModalIsOpen(false);
    return false;
  };

  return (
    <Fragment>
      <div className="relative">
        <div
          className={`border-2 ${!(phone.length === 0 || countryNumbers.includes(phone)) ? 'border-signature' : 'border-[#D9D9D9]'} w-full text-base"`}
        >
          <PhoneInput
            country={'kr'}
            value={phone}
            onChange={(phone) => setPhone('+' + phone)}
            inputStyle={{
              width: '100%',
              height: '40px',
              fontSize: '16px',
              fontWeight: '900',
              border: 'none',
              color: '#0173FA',
              caret: 'black',
            }}
            dropdownStyle={{
              top: '-10px',
              maxHeight: '150px',
              overflowY: 'auto',
            }}
          />
        </div>
        <button
          onClick={sendOtp}
          className={`absolute top-1/2 transform -translate-y-1/2 right-[1px] text-[16px] px-3 py-[8px] transition ${!(phone.length === 0 || countryNumbers.includes(phone)) ? 'text-white bg-signature font-[900]' : 'text-[#646464] bg-[#D9D9D9] font-[300]'}`}
        >
          코드전송
        </button>
      </div>

      <div className="absolute bottom-32">{recaptcha && <div id="recaptcha"></div>}</div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="예제 모달"
        style={customModalStyles}
      >
        <div className="flex flex-col justify-center h-full">
          <div className="mb-[10px]">전송된 인증번호를 입력해주세요.</div>
          <div className="relative flex flex-col justify-center items-center">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className={`input-style ${otp ? 'border-signature' : 'border-[#D9D9D9]'}`}
            />
            <button
              onClick={verifyOtp}
              className={`absolute top-1/2 transform -translate-y-1/2 right-0 text-[16px] px-3 py-[8px] ${otp ? `text-white bg-signature font-[900]` : `text-[#646464] bg-[#D9D9D9] font-[300]`}`}
            >
              인증 하기
            </button>
          </div>
        </div>
      </ReactModal>
    </Fragment>
  );
};

export default PhoneAuth;
