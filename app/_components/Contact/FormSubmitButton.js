"use client";
import { useFormStatus } from "react-dom";

function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-6 text-center">
      <button
        type="submit"
        disabled={pending}
        className="mx-auto w-fit rounded-full border-[1px] border-white bg-gray-200/20 px-20 py-2 text-lg text-white transition-all duration-300 hover:brightness-[1.18] disabled:opacity-50 md:text-xl lg:text-2xl xl:text-[2vw]"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}

export default FormSubmitButton;
