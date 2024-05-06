interface PropsType {
  text: string;
  active?: boolean;
}

const CategoryButton = ({ text, active }: PropsType) => {
  return (
    <button
      type="button"
      className={`border-2  w-[4.1rem]  text-xs py-[0.3rem] ${active ? 'bg-signature text-white border-signature font-bold' : 'text-sub-bu border-sub-non'}`}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
