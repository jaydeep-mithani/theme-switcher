import { ChevronRight, LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  showLearnMore?: boolean;
}

const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  icon: Icon,
  showLearnMore = false,
}) => {
  return (
    <div className="card" data-delay="500">
      <div>{Icon && <Icon className="w-6 h-6 card-icon" />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {showLearnMore && (
        <a href="#">
          Learn more
          <ChevronRight className="learn-more-icon" />
        </a>
      )}
    </div>
  );
};

export default Card;
