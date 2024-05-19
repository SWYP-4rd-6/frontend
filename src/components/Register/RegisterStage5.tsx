import { useEffect, useState } from 'react';
import { StagePropsType } from '@/pages/register-page/register-page';
import { useTourRegStore } from '@/store/RegisterStore';
import ArrowButton from '../Button/ArrowButton';

const RegisterStage5 = ({ setStage, setStep }: StagePropsType) => {
  const [images, setImages] = useState<string[]>([]);
  const [activate, setActivate] = useState(false);
  const { tour, addImage, changeState } = useTourRegStore();

  useEffect(() => {
    if (images.length >= 2) {
      setStep(5);
      setActivate(true);
    } else {
      setStep(4);
      setActivate(false);
    }
  }, [images, setStep]);

  console.log(useTourRegStore.getState());

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    if (fileArray.length + images.length > 12) {
      alert('최대 12장까지 업로드할 수 있습니다.');
      return;
    }

    // 로컬 URL 생성
    const newImages = fileArray.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);

    // S3 URL 생성 (mock)
    fileArray.forEach((file) => {
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${file.type.split('/')[1]}`;
      const s3Url = `https://metthew-s3.s3.us-east-2.amazonaws.com/guide/${fileName}`;
      addImage(s3Url);
    });
  };

  return (
    <div className="">
      <div className="reg-title-black">
        <div>당신과 할</div>
        <div>
          <span className="reg-title-blue">여행의 사진들</span>을
        </div>
        <div>공유해주세요.</div>
      </div>
      <div className="reg-subtitle mt-4 mb-5 flex flex-col gap-1">
        <span>최소 2장의 사진이 필요합니다.</span>
        <span>최대 12장까지 공유 가능합니다.</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Uploaded ${index}`} className="w-full h-28" />
        ))}
        {images.length < 12 && (
          <div
            className="w-28 h-28 cursor-pointer border border-dashed flex items-center justify-center"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <img src="/tour_register_photo.png" alt="photo" />
          </div>
        )}
      </div>

      <input
        id="fileInput"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageUpload}
      />

      <ArrowButton
        activate={activate}
        moveForward={() => {
          changeState('thumb', tour.images[0]);
          changeState('thumb_local', images[0]);
          setStage(6);
        }}
        moveBack={() => setStage(4)}
      />
    </div>
  );
};

export default RegisterStage5;
