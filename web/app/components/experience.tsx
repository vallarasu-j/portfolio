export const Experience = ({ career, years, description }: any) => {
  return (
    <div>
      <h3 className="text-sm">{career}</h3>
      <span className="text-sm text-gray-400"> ({years})</span>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};
