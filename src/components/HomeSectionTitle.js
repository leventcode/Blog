export default function HomeSectionTitle({ title, description }) {
  return (
    <div className="relative pb-14 text-center uppercase">
      <h1 className="relative z-20 mb-2 text-4xl text-white ">{title}</h1>
      <span className="inline-block h-1.5 w-32 animate-pulse rounded-full bg-gray-400 bg-opacity-50"></span>
      <span className="absolute w-full left-0  -top-2 z-0  text-9xl font-bold  text-gray-300 text-heading opacity-5">
        {description}
      </span>
    </div>
  );
}
