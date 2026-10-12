import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#152420] text-white">
      <div className="mx-auto flex h-10 max-w-[1300px] items-center justify-between px-5">
        <nav className="flex items-center gap-7 text-xs text-white/75">
          <a href="#" className="transition hover:text-white">Showrooms</a>
          <a href="#" className="transition hover:text-white">Custom Work</a>
          <a href="#" className="transition hover:text-white">Gift Cards</a>
        </nav>

        <div className="flex items-center gap-5 text-white/60">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebookF size={13} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram size={14} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white">
            <FaYoutube size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
