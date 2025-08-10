import LayersIcon from "./LayersIcon";

function ServiceItem({ title, description, cn, children }) {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-4 rounded-lg bg-gray-200/20 px-10 py-8 shadow-md backdrop-blur-xs transition-all duration-300 hover:shadow-lg md:px-6 ${cn}`}
    >
      <div className="-mt-20">{children}</div>
      <h3 className="text-center text-2xl font-semibold text-gray-100 md:text-3xl lg:text-4xl">
        {title}
      </h3>
      <p className="text-center text-lg text-gray-300 md:text-xl lg:text-2xl">
        {description}
      </p>
    </div>
  );
}

export default ServiceItem;
