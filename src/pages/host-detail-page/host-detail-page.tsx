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

              <div className="w-full text-center self-center ml-7">
                <p className="font-black text-signature text-base pb-3 mb-3 border-b-signature border-b-2">
                  {content.nickname}
                </p>
                <p className="font-light  text-base">
                  <span className="font-black text-signature">{content.reviewCount}</span>개의 리뷰
                </p>
                <p className="font-light  text-base">
                  <span className="font-black text-signature">{content.reviewRating}</span>점의 별점
                </p>
              </div>
            </div>

            <div className="mt-4">
              {content.languages?.map((item: string, i: number) => (
                <span key={i} className="font-light text-signature mr-1">
                  #{item}
                </span>
              ))}
            </div>
            {content.profile && (
              <div className="px-5 py-4 border-content text-base text-light my-3">
                {content.profile}
              </div>
            )}
            <div className="line-t">
              <div className="sub-title-2 ">호스팅</div>
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
