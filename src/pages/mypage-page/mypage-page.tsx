import { useParams } from 'react-router-dom';

const MyPageView = () => {
  const { userId } = useParams();
  
  return <div>MyPage {userId}</div>;
};

export default MyPageView;
