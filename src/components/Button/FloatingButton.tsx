import { MaterialSymbol } from 'react-material-symbols';
import useScrollStore from '@/store/scrollStore';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const { scrolling } = useScrollStore();
  const navigateTo = useNavigate();

  return (
    <button
      onClick={() => {
        navigateTo('tour/register');
      }}
      className={` z-50 fixed bottom-28 right-0 mx-6 rounded-full bg-signature  font-black text-xl text-white duration-200 transition-width ease-in-out h-16 px-4 overflow-hidden whitespace-nowrap ${scrolling ? 'w-16' : 'w-48 '}`}
    >
      <MaterialSymbol className="align-middle" icon="add" size={28} fill grade={30} color="white" />
      {!scrolling && '여행 등록하기'}
    </button>
  );
};

export default FloatingButton;
