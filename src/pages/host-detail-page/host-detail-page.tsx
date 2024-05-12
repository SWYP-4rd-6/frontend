import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ILocation, SlickSettingsType } from '@/types/common';
import Header from '@/components/Header/Header';
import ImgList from '@/components/ImgLIst';

interface PropsType {
  slickSettings: SlickSettingsType;
  multiSlickSettings: SlickSettingsType;
  onClickTripImage: () => void;
  location?: ILocation;
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  onClickMore: () => void;
}

const HostDetailView = ({ onClickTripImage }: PropsType) => {
  return (
    <div className=" ">
      <Header />
      <section className="px-6 ">
        <div className="flex">
          <img src="/man_sample.png" className="w-40 rounded-full ring-1 ring-sub-g" alt="logo" />

          <div className="mx-3">
            <p className="font-black text-signature text-base">Proeatparty</p>

            <p className="font-black text-signature text-base">
              <span>10</span>개의 리뷰
            </p>

            <p className="font-black text-signature text-base">
              <span>4.6</span>점의 별점
            </p>
          </div>
        </div>

        <div className="px-5 py-4 border-content text-base text-light my-3">
          후기가 너무 좋아서 기대 되네요! 다음번에도 참여하고 싶어요.
        </div>

        <div className="line-content">
          <div className="sub-title-2">호스팅</div>
          <div className="grid-img-wrap">
            <ImgList
              content={{
                fromDate: '2024.08.08',
                toDate: '2024.08.08',
                location: '반포한강공원',
                title: '한강 치맥파티',
                src: '/trip_image_sample1.png',
              }}
              onClick={onClickTripImage}
            />
            <ImgList
              content={{
                fromDate: '2024.08.08',
                toDate: '2024.08.08',
                location: '반포한강공원',
                title: '한강 치맥파티',
                src: '/trip_image_sample1.png',
              }}
              onClick={onClickTripImage}
            />
            <ImgList
              content={{
                fromDate: '2024.08.08',
                toDate: '2024.08.08',
                location: '반포한강공원',
                title: '한강 치맥파티',
                src: '/trip_image_sample1.png',
              }}
              onClick={onClickTripImage}
            />
            <ImgList
              content={{
                fromDate: '2024.08.08',
                toDate: '2024.08.08',
                location: '반포한강공원',
                title: '한강 치맥파티',
                src: '/trip_image_sample1.png',
              }}
              onClick={onClickTripImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostDetailView;
