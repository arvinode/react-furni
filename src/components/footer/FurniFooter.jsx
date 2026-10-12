import FooterNewsletter from "./FooterNewsletter";
import FooterContact from "./FooterContact";
import FooterNavigation from "./FooterNavigation";
import FooterCopyright from "./FooterCopyright";

export default function FurniFooter() {
  return (
    <footer className="w-full">
      <FooterNewsletter />
      <FooterContact />
      <FooterNavigation />
      <FooterCopyright />
    </footer>
  );
}