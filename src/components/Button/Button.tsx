import "./Button.css";

type ButtonProps = {
  value: string;
};

const Button = (props: ButtonProps) => {
  const { value } = props;
  return (
    <div className="buynow">
      <button>{value}</button>
    </div>
  );
};

export default Button;
