interface PropsType {
  text: string;
  active?: boolean;
  onClick: () => void;
}

const CategoryButton = ({ text, active, onClick }: PropsType) => {
  return (
    <button
      type="button"
      className={`border-2  w-[4.2rem]  text-xs py-[0.3rem] ${active ? 'bg-signature text-white border-signature font-bold' : 'text-sub-bu border-sub-non'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
