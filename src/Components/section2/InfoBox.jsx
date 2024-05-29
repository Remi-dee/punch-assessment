const InfoBox = ({ title, description, skills, categories, profiles }) => {
  return (
    <div className="max-w-[380px] p-4  mb-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex space-x-4 text-gray-600">
        <span>🛠️ {skills} Skills</span>
        <span>📂 {categories} Sub-Categories</span>
        <span>👤 {profiles} Profiles</span>
      </div>
    </div>
  );
};

export default InfoBox;
