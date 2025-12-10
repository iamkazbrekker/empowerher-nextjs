import Image from "next/image";
import HomeNavbar from "@/components/navbar"

export default function Home() {
  return (
    <div>
        <nav><HomeNavbar></HomeNavbar></nav>
        <main>
            <div className="h-full bg-[#191624] text-white pt-32">
                idkman
            </div>
        </main>
    </div>
  );
}
