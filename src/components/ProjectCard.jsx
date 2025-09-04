const ProjectCard = ({ title, description, imageUrl, link }) => (
  <div className="bg-white rounded-2xl overflow-hidden group border-2 border-black shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300">
    <a href={link} target="_blank" rel="noopener noreferrer">
      {/* Fixed-height media area for consistent card sizes */}
      <div className="overflow-hidden bg-[#F3F0FF] border-b-2 border-black">
        <div className="w-full h-56 md:h-64 p-6 md:p-8">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-md border-2 border-black/20"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/f3f0ff/111111?text=Project+Image";
            }}
          />
        </div>
      </div>
      <div className="p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  </div>
);
export default ProjectCard;
