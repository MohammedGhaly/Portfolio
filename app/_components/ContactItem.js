import Link from "next/link";

function ContactItem({ title, details, children, href, target }) {
  return (
    <Link href={href} target={target}>
      <div className="flex gap-3 overflow-hidden">
        <div className="cursor-pointer overflow-hidden rounded-lg bg-gray-100/10 p-3 backdrop-blur-xs transition-all duration-300 hover:brightness-[1.25]">
          {children}
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">
            {title}
          </h5>
          <p className="text-sm text-gray-300 md:text-base lg:text-lg">
            {details}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ContactItem;
