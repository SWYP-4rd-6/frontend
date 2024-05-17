import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';

interface PropsType {
  content: {};
}
const ReservationCompleteView = ({ content }: PropsType) => {
  const [backgroundImage, setBackgroundImage] = useState('/default-background.jpg');

  const handleBackgroundImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className=" ">
      <Header />
      <div className="relative">
        <div className="flex justify-center">
          <div className="w-80 h-48 rounded-lg overflow-hidden bg-gray-900">
            <img src={backgroundImage} alt="Background" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">한강 치맥파티</div>
              <div className="text-white">#무거리 #아웃횡돈</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full">Nice to Matthew</div>
        </div>
        <div className="mt-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationCompleteView;
