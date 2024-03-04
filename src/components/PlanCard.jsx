const PlanCard = ({ name, description, btnText, price, features, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
    >
      <h2 className="mb-5 text-xl font-semibold ">{name}</h2>
      <div className="mb-5 flex items-end text-6xl font-black">{price}</div>
      <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2 list-inside list-disc">
        <li>{features[0]}</li>
        <li>{features[1]}</li>
        <li>{features[2]}</li>
      </ul>
      <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">
        {btnText}
      </button>
    </div>
  );
};

export default PlanCard;
