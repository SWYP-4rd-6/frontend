import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BottomNavLayout from '@/components/BottomNavLayout';
import useLoginStore from '@/store/LoginStore';
import { MaterialSymbol } from 'react-material-symbols';
import Loading from '@/components/Loading';

const MyPageView = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { isLogin, setIsLogin, setUserId } = useLoginStore();

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId === undefined) {
        setError('Invalid user ID');
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/v1/users/${parseInt(userId)}`,
        );
        if (response.status === 200) {
          console.log(response.data);
          setUserData(response.data);
        }
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          setError('사용자를 찾을 수 없습니다.');
        } else {
          console.log(err);
          setError('데이터를 가져오는 도중 오류가 발생했습니다.');
        }
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <Loading />;
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
    setIsLogin(false);
    setUserId(0);
  };

  return (
    <BottomNavLayout login={isLogin}>
      <div className="mx-[25px]">
        <div className="flex flex-col text-4xl text-signature mb-10 mt-10">
          <span className="font-[800] flex">
            Mat<span className="transform scale-x-[-1]">t</span>hew,
          </span>
          <span className="font-[275]">Here is your Space!</span>
        </div>

        <div className="flex justify-center items-center border-2 border-sub-non w-full h-24 gap-5 mb-5">
          <img src={userData.profileImageUrl} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <div className="font-[900] text-signature mb-1">{userData.nickname}</div>

            <div className="flex justify-start items-center text-xs font-[300] text-sub-bu gap-[2px] -ml-1">
              <MaterialSymbol icon="location_on" fill size={20} color="#d9d9d9" />
              {userData.location ? userData.location : '지역 인증이 필요합니다.'}
            </div>
          </div>
          <div className="border-2 border-sub-non text-sub-bu px-4 py-1 text-xs ml-2 cursor-pointer">
            프로필보기
          </div>
        </div>
      </div>

      <div className="h-[6px] border-y-2 border-signature mb-4" />

      <div className="mx-[25px] text-base font-[900]">
        <div className="text-signature mb-[14px]">계정</div>
        <div className="text-sub-bu flex flex-col justify-center gap-[14px] mx-1">
          <span>계정 정보 수정</span>
          <span className="cursor-pointer w-fit" onClick={logout}>
            로그아웃
          </span>
          <span>회원탈퇴</span>
          <div className="border-t-2 border-signature mb-[14px]" />
        </div>

        <div className="text-signature mb-[14px]">결제</div>
        <div className="text-sub-bu flex flex-col justify-center gap-[14px] mx-1">
          <div>결제 수단 등록 / 변경</div>
          <div>결제 내역</div>
          <div className="border-t-2 border-signature mb-[14px]" />
        </div>

        <div className="text-signature mb-[14px]">인증</div>
        <div className="text-sub-bu flex flex-col justify-center gap-[14px] mx-1">
          <div>위치 인증</div>
          <div>휴대폰 인증</div>
          <div className="border-t-2 border-signature mb-[14px]" />
        </div>

        <div className="h-[200px]" />
      </div>

      {/* <h1>My Page</h1>
        <img src={userData.profileImageUrl} alt="Profile" />
        <p>Email: {userData.email}</p>
        <p>Nickname: {userData.nickname}</p>
        <p>Name: {userData.name}</p>
        <p>Profile: {userData.profile}</p>
        <p>Review Count: {userData.reviewCount}</p>
        <p>Review Rating: {userData.reviewRating}</p>
        <p>Created At: {userData.createdAt}</p>
        <h2>Guide Products</h2>
        <ul>
          {userData.guideProducts.slice(0, 4).map((product: any) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.thumb} alt={product.title} />
              <p>Location: {product.locationName}</p>
              <p>Guide Start: {product.guideStart}</p>
              <p>Guide End: {product.guideEnd}</p>
            </li>
          ))}
        </ul> */}
    </BottomNavLayout>
  );
};

export default MyPageView;
