import Award from "../../Assets/section2/award.png";
import Vector1 from "../../Assets/section2/Vector1.png";
import Vector2 from "../../Assets/section2/Vector2.png";
const InfoBox = ({ title, description, skills, categories, profiles }) => {
  return (
    <div className="max-w-[380px] p-4  mb-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex space-x-4 text-gray-600 text-[12px]">
        <span className="flex space-x-1">
          <img src={Award} alt="icon" className="w-5 h-5" />{" "}
          <span>{skills} Skills</span>{" "}
        </span>
        <span className="flex space-x-1">
          <img src={Vector1} alt="icon" className="w-5 h-5" />{" "}
          <span>{categories} Sub-Categories</span>
        </span>
        <span className="flex space-x-1">
          <img src={Vector2} alt="icon" className="w-5 h-5" />{" "}
          <span>{profiles} Profiles</span>
        </span>
      </div>
    </div>
  );
};

export default InfoBox;
