import FurniHeader from "./components/header/FurniHeader";
import FurniFooter from "./components/footer/FurniFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <FurniHeader />

      <main className="min-h-[600px] bg-[#FBFCFC]">
        {/* Homepage sections will be added here */}
      </main>

      <FurniFooter />
    </div>
  );
}