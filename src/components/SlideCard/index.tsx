type PropsType = {
  title: string;
};

const SlideCard = ({ title }: PropsType) => {
  return <div className="bg-sky-100 h-80">{title}</div>;
};

export default SlideCard;
