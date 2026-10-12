import AnnouncementBar from "./AnnouncementBar";
import MainHeader from "./MainHeader";
import CategoryBar from "./CategoryBar";

export default function FurniHeader() {
  return (
    <header className="w-full bg-white text-[#152420]">
      <AnnouncementBar />
      <MainHeader />
      <CategoryBar />
    </header>
  );
}
