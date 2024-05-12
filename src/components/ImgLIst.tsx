import { MaterialSymbol } from 'react-material-symbols';

type PropsType = {
  content: {
    title: string;
    fromDate: string;
    toDate: string;
    location: string;
    //tags: Array<string>;
    src: string;
  };
  onClick: () => void;
};

const ImgList = ({ content, onClick }: PropsType) => {
  return (
    <div className="relative " onClick={onClick}>
      <img className="size-full" src={content.src}></img>
      <div className="opacity-blue-filter" />
      <div className="px-4 absolute bottom-6">
        <div className="font-black text-base text-white">{content.title}</div>
        <div className="text-[0.7rem] text-white font-right">
          <MaterialSymbol icon="fmd_good" size={19} fill grade={-25} color="white" />
          {content.location}
        </div>
        <div className="text-[0.7rem] text-white font-right">
          <MaterialSymbol icon="date_range" size={19} fill grade={-25} color="white" />
          {content.fromDate}~{content.toDate}
        </div>
      </div>
    </div>
  );
};

export default ImgList;
