interface CheckProps {
  label?: string;
  id?: string;
  name?: string;
}

const Check: React.FC<CheckProps> = ({ label = "", id = "", name = "" }) => {
  return (
    <div className="custom-checkbox">
      <input type="checkbox" id={id} name={name} />
      <label>{label}</label>
    </div>
  );
};

export default Check;
