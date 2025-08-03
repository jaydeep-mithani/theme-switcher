import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon?: LucideIcon;
  iconClassName?: string;
  title: string;
  description?: string;
  linkText?: string;
  href?: string;
  linkClassName?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  iconClassName = "",
  title = "",
  description = "",
  linkText = "",
  href = "",
  linkClassName = "",
}) => {
  return (
    <div className="contact-card">
      <div className="contact-card-inner">
        <div className={`icon-container ${iconClassName}`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <div className="contact-info">
          <h3 className="">{title}</h3>
          <p className="">{description}</p>
          <a href={href} className={linkClassName}>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
