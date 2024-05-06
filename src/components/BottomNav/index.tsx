import { MaterialSymbol } from 'react-material-symbols';
const BottomNav = () => {
  return (
    <div
      className="sticky justify-between
    bottom-0 bg-white px-5 py-7 flex rounded-t-3xl shadow-top *:flex *: items-center *:justify-center"
    >
      <a href="#" className="">
        <img src="select_menu_home.png" className="w-[102px] " alt="home" />
      </a>
      <a href="#" className="mx-2">
        <MaterialSymbol icon="trip" size={24} fill grade={-25} color="#d9d9d9" />
      </a>
      <a href="#" className="mx-2">
        <MaterialSymbol icon="message" size={24} fill grade={-25} color="#d9d9d9" />
      </a>
      <a href="#" className="mx-2">
        <MaterialSymbol icon="person" size={24} fill grade={-25} color="#d9d9d9" />
      </a>
    </div>
  );
};

export default BottomNav;
