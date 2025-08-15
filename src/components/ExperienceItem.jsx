const ExperienceItem = ({ date, title, company, description, isLast }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="w-5 h-5 bg-white border-2 border-black rounded-full"></div>
      {!isLast && <div className="w-px h-full bg-black/50"></div>}
    </div>
    <div className="pb-12">
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      <h3 className="text-xl font-bold text-gray-900">
        {title} at {company}
      </h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);
export default ExperienceItem;
