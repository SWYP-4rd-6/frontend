import { FC, ReactNode } from 'react';

const BackGround: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-slate-100 w-screen h-screen relative csize:py-10">
    <div className="hidden lg:flex absolute left-36 xl:left-50 2xl:left-52 top-32 xl:top-24 flex-col">
      <div className="text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-signature font-[275]">
        Nice to
      </div>
      {/* <img src='/bg-title.png' alt='title' className='w-[35rem] mb-10'/> */}
      <div className="flex items-end justify-start gap-2 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="241"
          // height="89"
          className="w-[10rem] h-[3.6rem] xl:w-[14rem] xl:h-[5.1rem] 2xl:w-[16rem] 2xl:h-[5.5rem]"
          viewBox="0 0 241 89"
          fill="none"
        >
          <path
            d="M240.196 66.7519V87.3727H229.701C212.002 87.3727 203.153 78.6057 203.153 61.0719V38.2285H194.633V18.1016H203.153V1.30859H227.478V18.1016H240.073V38.2285H227.478V61.4423C227.478 63.3356 227.89 64.6939 228.713 65.5171C229.618 66.3403 231.1 66.7519 233.158 66.7519H240.196Z"
            fill="#0173FA"
          />
          <path
            d="M111.447 52.6745C111.447 45.5128 112.723 39.2565 115.275 33.9058C117.909 28.5551 121.449 24.4392 125.894 21.558C130.422 18.6769 135.443 17.2363 140.958 17.2363C145.733 17.2363 149.849 18.183 153.306 20.0763C156.764 21.9696 159.439 24.5215 161.332 27.7319V18.1007H185.534V87.3717H161.332V77.7405C159.439 80.9509 156.722 83.5028 153.183 85.3961C149.725 87.2894 145.651 88.2361 140.958 88.2361C135.443 88.2361 130.422 86.7955 125.894 83.9144C121.449 81.0332 117.909 76.9173 115.275 71.5666C112.723 66.1336 111.447 59.8362 111.447 52.6745ZM161.332 52.6745C161.332 48.2293 160.098 44.7307 157.628 42.1789C155.241 39.627 152.277 38.351 148.738 38.351C145.116 38.351 142.111 39.627 139.724 42.1789C137.336 44.6484 136.143 48.1469 136.143 52.6745C136.143 57.1197 137.336 60.6594 139.724 63.2936C142.111 65.8454 145.116 67.1214 148.738 67.1214C152.277 67.1214 155.241 65.8454 157.628 63.2936C160.098 60.7417 161.332 57.202 161.332 52.6745Z"
            fill="#0173FA"
          />
          <path
            d="M101.622 0.320312V87.3722H77.4206V39.3393L60.9981 87.3722H40.7477L24.2017 38.9689V87.3722H0V0.320312H29.2643L51.1198 56.8732L72.4815 0.320312H101.622Z"
            fill="#0173FA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="47"
          // height="87"
          className="w-[1.9rem] h-[3.6rem] xl:w-[2.7rem] xl:h-[5.1rem]  2xl:w-[3rem] 2xl:h-[5.5rem] -ml-2"
          viewBox="0 0 47 87"
          fill="none"
        >
          <path
            d="M0.564602 65.7519V86.3727H11.0602C28.7587 86.3727 37.608 77.6057 37.608 60.0719V37.2285H46.1279V17.1016H37.608V0.308594H13.2828V17.1016H0.688084V37.2285H13.2828V60.4423C13.2828 62.3356 12.8712 63.6939 12.048 64.5171C11.1425 65.3403 9.66081 65.7519 7.60284 65.7519H0.564602Z"
            fill="#0173FA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="72"
          // height="92"
          className="w-[3rem] h-[3.8rem] xl:w-[4.4rem] xl:h-[5.6rem] 2xl:w-[4.5rem] 2xl:h-[5.8rem]"
          viewBox="0 0 72 92"
          fill="none"
        >
          <path
            d="M45.828 21.4851C53.7306 21.4851 59.9868 24.1605 64.5966 29.5112C69.2888 34.7796 71.6348 41.9413 71.6348 50.9963V91.3736H47.4332V54.2068C47.4332 50.2555 46.4042 47.1685 44.3462 44.9459C42.2883 42.641 39.5306 41.4886 36.0732 41.4886C32.4512 41.4886 29.6112 42.641 27.5533 44.9459C25.4953 47.1685 24.4663 50.2555 24.4663 54.2068V91.3736H0.264648V0H24.4663V31.9808C26.6066 28.8526 29.4877 26.3419 33.1098 24.4486C36.8141 22.473 41.0535 21.4851 45.828 21.4851Z"
            fill="#0173FA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="72"
          // height="72"
          className="w-[3rem] h-[3rem] xl:w-[4.2rem] xl:h-[4.2rem] 2xl:w-[4.6rem] 2xl:h-[4.6rem]  -ml-1 -mb-1 xl:-ml-0"
          viewBox="0 0 72 72"
          fill="none"
        >
          <path
            d="M71.0983 34.9375C71.0983 36.8308 70.9748 38.7242 70.7279 40.6175H24.9176C25.1645 44.4041 26.1935 47.2441 28.0045 49.1375C29.8979 50.9485 32.2851 51.854 35.1663 51.854C39.1999 51.854 42.081 50.043 43.8097 46.4209H69.6166C68.5464 51.1954 66.4473 55.476 63.3192 59.2626C60.2734 62.967 56.4044 65.8893 51.7123 68.0296C47.0201 70.1699 41.8341 71.24 36.1541 71.24C29.3216 71.24 23.2301 69.7994 17.8794 66.9183C12.611 64.0371 8.45388 59.9212 5.40809 54.5705C2.44462 49.2198 0.962891 42.9224 0.962891 35.6784C0.962891 28.4343 2.44462 22.1781 5.40809 16.9097C8.37156 11.559 12.4875 7.44311 17.7559 4.56195C23.1066 1.68081 29.2393 0.240234 36.1541 0.240234C42.9865 0.240234 49.0369 1.63965 54.3053 4.43848C59.5737 7.23731 63.6896 11.2709 66.6531 16.5393C69.6166 21.7254 71.0983 27.8581 71.0983 34.9375ZM46.4027 28.8871C46.4027 25.9236 45.4149 23.6187 43.4393 21.9723C41.4636 20.2436 38.9941 19.3793 36.0306 19.3793C33.0671 19.3793 30.6387 20.2025 28.7454 21.8489C26.8521 23.4129 25.6173 25.759 25.0411 28.8871H46.4027Z"
            fill="#0173FA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="110"
          // height="70"
          className="w-[4.5rem] h-[2.9rem] xl:w-[6rem] xl:h-[3.8rem] 2xl:w-[6.9rem] 2xl:h-[4.3rem] -ml-1.5 -mb-0.5"
          viewBox="0 0 110 70"
          fill="none"
        >
          <path
            d="M109.366 0.103516L91.7086 69.3746H64.5434L54.9122 27.3921L44.9105 69.3746H17.8688L0.334961 0.103516H24.4131L32.1923 46.0373L42.4409 0.103516H68.3713L78.9904 46.1607L86.646 0.103516H109.366Z"
            fill="#0173FA"
          />
        </svg>
      </div>
      <div className="border-y-2 h-2 w-[26rem] xl:w-[34rem] 2xl:w-[40.063rem] border-signature"></div>
      <div className="text-sub-bu text-base xl:text-xl font-[300] mt-7 mb-[10rem] h-md:mb-[18.75rem] max-w-[26rem] xl:max-w-[34rem] 2xl:max-w-[40.063rem]">
        <div>
          높아진 로컬 일상에 대한 관심을 가진 여행객들과 현지 가이드와의 매칭을 통해 다른 지역에
          거주하고 있는 친구를 만들고 이들과의 만족스러운 여행 경험을 선사하는 서비스입니다.
        </div>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeGkJqSfQ2cdjbhc9yB2hKGS-QbIERhMZRlfGWLIZfPpxt8Jw/viewform?pli=1"
        target="_blank"
        className="text-sub-non border-2 border-sub-non w-60 text-lg xl:text-xl font-[900] px-4 py-2.5 xl:px-5 xl:py-3"
      >
        <div>사용 후기를</div>
        <div>자유롭게 공유해주세요.</div>
      </a>
    </div>
    {children}
  </div>
);

export default BackGround;
