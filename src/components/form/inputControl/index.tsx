const InputControl: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input className="form-input" {...props} />;
};

export default InputControl;
