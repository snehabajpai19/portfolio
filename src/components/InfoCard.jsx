const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-[6px_6px_0_0_#000] transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default InfoCard;
