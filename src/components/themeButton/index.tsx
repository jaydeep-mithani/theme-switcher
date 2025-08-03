interface ThemeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default ThemeButton;
