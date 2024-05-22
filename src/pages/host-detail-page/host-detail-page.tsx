import { GuideType } from '@/types/common';
import Header from '@/components/Header/Header';
import ImgList from '@/components/List/ImgLIst';
import Loading from '@/components/Loading';

interface PropsType {
  content?: GuideType;
  onClickTripImage: (index: number) => void;
}

const HostDetailView = ({ content, onClickTripImage }: PropsType) => {
  return (
    <div className=" ">
      <Header />
      <section className="px-6 ">
        {content ? (
          <>
            <div className="flex">
              <img
                src={content.profileImageUrl}
                className="w-40 rounded-full ring-1 "
                alt="profileImg"
              />

              <div className="mx-3">
                <p className="font-black text-signature text-base">{content.nickname}</p>
                <p className="font-black text-signature text-base">
                  <span>{content.reviewCount}</span>개의 리뷰
                </p>

                <p className="font-black text-signature text-base">
                  <span>{content.reviewRating}</span>점의 별점
                </p>
              </div>
            </div>

            <div className="px-5 py-4 border-content text-base text-light my-3">
              {content.profile}
            </div>

            <div className="line-content">
              <div className="sub-title-2">호스팅</div>
              <div className="grid-img-wrap">
                {content.guideProducts?.map((item, index) => (
                  <ImgList key={index} content={item} onClick={() => onClickTripImage(index)} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default HostDetailView;
