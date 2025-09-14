import HeroSection from "@/components/ui/hero/HeroSection";
import Image from "next/image";

export default function Home({}) {
  return (
      <div className="flex justify-between items-start py-20">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img src="/assets/images/hero_img.png" alt="profile"  width={380} height={350} className="rounded-b-full hover:rounded-b-none bg-gradient-to-t from-blue-950 to-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
  );
}
