import { MaterialSymbol } from 'react-material-symbols';

type PropsType = {
  point: number;
};

const StarGrade = ({ point }: PropsType) => {
  const renderStar = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const color = point >= i ? 'text-signature' : 'text-sub-non';
      stars.push(
        <div key={i}>
          <MaterialSymbol className={`align-middle ${color}`} icon="star" size={16} fill />
        </div>,
      );
    }
    return stars;
  };
  return <div className="flex">{renderStar()}</div>;
};

export default StarGrade;
