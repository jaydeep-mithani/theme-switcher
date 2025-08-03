interface StatCardProps {
  stat: string;
  label?: string;
}

const StatCard: React.FC<StatCardProps> = ({ stat = "", label = "" }) => {
  return (
    <div className="stat-card">
      <div className="stat-number" data-value={stat}>
        {stat}
      </div>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;
