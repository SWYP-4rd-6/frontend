const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-around">
      <a href="#" className="text-white flex flex-col items-center flex-1">
        <img src="trip_image_sample1.png" className="w-8 h-8" />
        <span>둘러보기</span>
      </a>
      <a href="#" className="text-white flex flex-col items-center flex-1">
        <img src="trip_image_sample1.png" className="w-8 h-8" />
        <span>내 여행</span>
      </a>
      <a href="#" className="text-white flex flex-col items-center flex-1">
        <img src="trip_image_sample1.png" className="w-8 h-8" />
        <span>메세지</span>
      </a>
      <a href="#" className="text-white flex flex-col items-center flex-1">
        <img src="trip_image_sample1.png" className="w-8 h-8" />
        <span>마이페이지</span>
      </a>
    </div>
  );
};

export default BottomNav;
