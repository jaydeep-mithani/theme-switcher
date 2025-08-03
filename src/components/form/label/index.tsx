const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...props
}) => {
  return (
    <label className="form-label" {...props}>
      {children}
    </label>
  );
};

export default Label;
