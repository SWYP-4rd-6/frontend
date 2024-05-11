type PropsType = {
  title: string;
  fromDate: string;
  toDate: string;
  tags: Array<string>;
  src: string;
  onClick: () => void;
};

const SlideCard = ({ title, fromDate, toDate, tags, onClick, src }: PropsType) => {
  return (
    <div className=" h-[22.5rem] w-[22.5rem] relative " onClick={onClick}>
      <div
        className="inset-0 size-full bg-contain bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0173FA] bg-opacity-20"></div>
      <div className="px-8 absolute bottom-8">
        <div className="font-black text-4xl text-white">{title}</div>
        <div className="text-base text-white font-right">
          {fromDate}~{toDate}
        </div>
        {tags.map((item, index) => (
          <span key={index} className="text-sm text-white font-right">
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlideCard;
