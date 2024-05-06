import { MaterialSymbol } from 'react-material-symbols';

const FloatingButton = () => {
  return (
    <button className="sticky bottom-28 left-full mx-6 rounded-full size-16 bg-signature z-50 ">
      <MaterialSymbol className="align-middle" icon="add" size={28} fill grade={30} color="white" />
    </button>
  );
};

export default FloatingButton;
