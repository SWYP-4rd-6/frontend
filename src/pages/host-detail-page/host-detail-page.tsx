import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ILocation, SlickSettingsType, UserType } from '@/types/common';
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
  content: UserType;
}

const HostDetailView = ({ onClickTripImage, content }: PropsType) => {
  return (
    <div className=" ">
      <Header />
      <section className="px-6 ">
        <div className="flex">
          <img
            src={content.profileImageUrl}
            className="w-40 rounded-full ring-1 ring-sub-g"
            alt="profileImg"
          />

          <div className="mx-3">
            <p className="font-black text-signature text-base">Proeatparty</p>
            <p className="font-black text-signature text-base">
              <span>?</span>개의 리뷰
            </p>

            <p className="font-black text-signature text-base">
              <span>4.6</span>점의 별점
            </p>
          </div>
        </div>

        <div className="px-5 py-4 border-content text-base text-light my-3">{content.profile}</div>

        <div className="line-content">
          <div className="sub-title-2">호스팅</div>
          <div className="grid-img-wrap">
            {content.guideProducts?.map((item, index) => (
              <ImgList key={index} content={item} onClick={onClickTripImage} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostDetailView;
