import { MapPin, Phone, Clock } from "lucide-react";

const contactDetails = [
  {
    title: "Address:",
    detail: "Your Street, Your City",
    Icon: MapPin,
  },
  {
    title: "Phone:",
    detail: "+1 000 000 0000",
    Icon: Phone,
  },
  {
    title: "Opening hours",
    detail: "9AM - 5PM / 10AM - 3PM",
    Icon: Clock,
  },
];

export default function FooterContact() {
  return (
    <section className="bg-[#EEF4F5]">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-8 border-b border-[#DCE6E7] px-5 py-10">
        <div className="min-w-[280px]">
          <h2 className="font-bold text-[#152420]">
            Get in touch with us
          </h2>
          <p className="mt-2 text-sm text-[#42504B]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-between gap-6">
          {contactDetails.map(({ title, detail, Icon }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE6E7] text-[#42504B]">
                <Icon size={18} strokeWidth={1.7} />
              </span>

              <div className="text-xs leading-5">
                <h3 className="font-semibold text-[#152420]">
                  {title}
                </h3>
                <p className="text-[#42504B]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}