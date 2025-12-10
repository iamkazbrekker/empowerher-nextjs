import Image from "next/image";
import HomeNavbar from "@/components/navbar"
import VideoModule from "@/components/module";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
        <nav className="sticky top-0 w-full bg-[#191624] text-center text-white z-50">
            <HomeNavbar active="Home"/>
        </nav>
        <main className="min-h-screen bg-[#191624] text-center text-white">
            <div className="relative w-[400px] h-[950px] mx-auto">
                <img src="/path.svg" alt="path" className="w-full" />
                <VideoModule position="module-1"/>
                <VideoModule position="module-2"/>
                <VideoModule position="module-3"/>
                <VideoModule position="module-4"/>
                <VideoModule position="module-5"/>
                <VideoModule position="module-6"/>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}
