type PropsType = {
  title: string;
  src: string;
  onClick: () => void;
};

const SlideCard = ({ title, onClick, src }: PropsType) => {
  return (
    <div className="bg-sky-100 h-80" onClick={onClick}>
      <img src={src} className="h-full" />
      {title}
    </div>
  );
};

export default SlideCard;
