interface PropsType {
  text: string;
}

const CategoryButton = ({ text }: PropsType) => {
  return (
    <button type="button" className="border">
      {text}
    </button>
  );
};

export default CategoryButton;
