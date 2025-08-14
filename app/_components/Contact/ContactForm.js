import { submitContactForm } from "../../_services/actions";
import FormSubmitButton from "./FormSubmitButton";

const inputCn =
  "border-b-[1px] border-gray-300 text-white focus:outline-none md:text-xl lg:text-2xl transition-all duration-200 xl:text-[1.8vw]";

const labelCn = "text-gray-200 text-sm md:text-lg lg:text-xl xl:text-[1.6vw]";

function ContactForm() {
  return (
    <form
      action={submitContactForm}
      id="contactForm"
      className="space-y-4 md:space-y-6"
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex w-full flex-col gap-2 md:gap-1">
          <label className={labelCn} htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            name="email"
            // placeholder="email"
            required
            className={`${inputCn} focus:border-orange-400`}
          />
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-1">
          <label className={labelCn} htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            name="name"
            // placeholder="name"
            required
            className={`${inputCn} focus:border-purple-700`}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 md:gap-1">
        <label className={labelCn} htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          // placeholder="subject"
          className={`${inputCn} focus:border-cyan-500`}
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:gap-1">
        <label className={labelCn} htmlFor="message">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputCn} resize-y rounded-md border-[1px] p-2 focus:border-pink-500 xl:max-h-[25vh]`}
        ></textarea>
      </div>

      <FormSubmitButton />
    </form>
  );
}

export default ContactForm;
