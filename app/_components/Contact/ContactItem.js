import Link from "next/link";

function ContactItem({ title, details, children, href, target }) {
  return (
    <Link href={href} target={target}>
      <div className="flex gap-3 overflow-hidden xl:gap-[1vw]">
        <div className="overflow-hidden rounded-lg bg-gray-100/10 p-3 backdrop-blur-xs transition-all duration-300 hover:brightness-[1.25] xl:p-[0.8vw]">
          {children}
        </div>
        <div className="flex flex-col gap-1 xl:gap-[0.4vw]">
          <h5 className="text-lg font-semibold text-white md:text-xl lg:text-2xl xl:text-[1.8vw]">
            {title}
          </h5>
          <p className="text-sm text-gray-300 md:text-base lg:text-lg xl:text-[1.2vw]">
            {details}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ContactItem;
