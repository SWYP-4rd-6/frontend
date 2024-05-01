type PropsType = {
  title: string;
  onClick: () => void;
};

const SlideCard = ({ title, onClick }: PropsType) => {
  return (
    <div className="bg-sky-100 h-80" onClick={onClick}>
      {title}
    </div>
  );
};

export default SlideCard;
