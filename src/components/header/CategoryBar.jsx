import {
  Armchair,
  Archive,
  Sofa,
  Bed,
  Table2,
  Lamp,
  MapPin,
  Phone,
} from "lucide-react";

const categories = [
  { name: "Chairs", Icon: Armchair },
  { name: "Storage", Icon: Archive },
  { name: "Armchairs", Icon: Armchair },
  { name: "Sofas", Icon: Sofa },
  { name: "Beds", Icon: Bed },
  { name: "Tables", Icon: Table2 },
  { name: "Decor", Icon: Lamp },
];

export default function CategoryBar() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1300px] items-center justify-between gap-8 px-5">
        <nav className="flex items-center gap-7">
          {categories.map(({ name, Icon }) => (
            <a
              key={name}
              href="#"
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-[#42504B] transition hover:text-[#274C4F]"
            >
              <Icon size={21} strokeWidth={1.6} />
              <span>{name}</span>
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2EDEF] text-[#42504B]">
              <MapPin size={19} strokeWidth={1.7} />
            </span>

            <div className="text-xs leading-5">
              <p className="font-semibold">Address:</p>
              <p className="text-[#456A6D]">Your Street, Your City</p>
            </div>
          </div>

          <a href="tel:+10000000000" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2EDEF] text-[#42504B]">
              <Phone size={18} strokeWidth={1.7} />
            </span>

            <div className="text-xs leading-5">
              <p className="font-semibold">Phone:</p>
              <p className="text-[#456A6D]">+1 000 000 0000</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
