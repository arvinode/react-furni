import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

export default function MainHeader() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[94px] max-w-[1300px] items-center justify-between gap-8 px-5">
        <div className="flex shrink-0 items-center gap-9">
          <a
            href="#"
            aria-label="Furni home"
            className="flex items-center gap-2 text-[#152420]"
          >
            <ShoppingBag size={31} strokeWidth={1.8} />
            <span className="text-[25px] font-extrabold tracking-tight">
              Furni
            </span>
          </a>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex h-12 w-[330px] items-center rounded-full border-2 border-[#E2EDEF] px-4 transition focus-within:border-[#456A6D]"
          >
            <input
              type="search"
              placeholder="Search furniture..."
              aria-label="Search furniture"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="text-[#42504B] hover:text-[#274C4F]"
            >
              <Search size={19} strokeWidth={1.7} />
            </button>
          </form>
        </div>

        <div className="flex shrink-0 items-center gap-8">
          <nav className="flex items-center gap-7 text-sm font-semibold">
            <a href="#" className="text-[#274C4F]">Home</a>
            <a
              href="#"
              className="flex items-center gap-1 transition hover:text-[#456A6D]"
            >
              Shop <ChevronDown size={14} />
            </a>
            <a href="#" className="transition hover:text-[#456A6D]">
              About Us
            </a>
            <a href="#" className="transition hover:text-[#456A6D]">
              Blog
            </a>
            <a href="#" className="transition hover:text-[#456A6D]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5 text-[#42504B]">
            <a href="#" aria-label="Account" title="Account"
              className="transition hover:text-[#274C4F]">
              <UserRound size={20} strokeWidth={1.7} />
            </a>

            <a href="#" aria-label="Wishlist" title="Wishlist"
              className="transition hover:text-[#274C4F]">
              <Heart size={20} strokeWidth={1.7} />
            </a>

            <a href="#" aria-label="Cart" title="Cart"
              className="relative transition hover:text-[#274C4F]">
              <ShoppingBag size={20} strokeWidth={1.7} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#274C4F] text-[10px] text-white">
                2
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
