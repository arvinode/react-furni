import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { label: "Facebook", Icon: FaFacebook, href: "#" },
  { label: "X", Icon: FaXTwitter, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "#" },
  { label: "LinkedIn", Icon: FaLinkedin, href: "#" },
];

const legalLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Site Map",
];

export default function FooterCopyright() {
  return (
    <section className="bg-[#EEF4F5]">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-8 border-t border-[#DCE6E7] px-5 py-6">
        <p className="text-xs text-[#42504B]">
          Copyright © {new Date().getFullYear()} Furni
        </p>

        <div className="flex items-center gap-7 text-[#42504B]">
          {socialLinks.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition hover:text-[#274C4F]"
            >
              <Icon size={14} />
            </a>
          ))}
          <a
            href="#"
            aria-label="Medium"
            className="text-sm font-extrabold hover:text-[#274C4F]"
          >
            M
          </a>
        </div>

        <nav className="flex items-center gap-6 text-xs text-[#42504B]">
          {legalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="whitespace-nowrap transition hover:text-[#274C4F]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}