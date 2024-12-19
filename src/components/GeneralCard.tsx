import { Link } from "react-router-dom";

interface GeneralCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  link: string;
}

const GeneralCard: React.FC<GeneralCardProps> = ({
  title,
  description,
  imageUrl,
  tag,
  link
}) => {
  return (
    <div className="card bg-base-100 shadow-2xl rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="card-body">
        <div className="p-4">
          <h3 className="card-title">
            {title}
            <div className="badge badge-outline px-2 py-1 truncate">{tag}</div>
          </h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-actions justify-end">
        <Link to={link} className="text-blue-500 my-3 mx-5 inline-block">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default GeneralCard;
