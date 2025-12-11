import { HelpCircle, Home, Package, Pen, Text, User } from "lucide-react";
import Link from "next/link";

export default function HomeNavbar({ active }: { active: string }) {
  const nav = [
    { label: "Home", href: "/home", icon: <Home /> },
    { label: "Testimonials", href: "/testimonials", icon: <Text /> },
    { label: "Survival Stories", href: "/stories", icon: <Pen /> },
    { label: "Resources", href: "/resources", icon: <Package /> },
    { label: "Profile", href: "/profile", icon: <User /> },
    { label: "Get Help", href: "/help", icon: <HelpCircle/> }
  ];


  return (
    <div className="sticky top-0 w-full bg-[#191624] text-center text-white z-50">
      <div className="p-4 border-b-3 border-[#2a263c] border-solid text-4xl font-bold">
        EmpowerHer
      </div>
      
      <div className="p-3 flex flex-row justify-evenly border-[#2a263c] border-b-3 border-solid">
        {nav.map(item => (
          <Link key={item.label} href={item.href}>
            
            <div
              className={ 
                item.label === active
                  ? "text-[#8a63d2] font-semibold cursor-pointer flex flex-rows justify-between mr-0.5"
                  : "text-white opacity-70 hover:opacity-100 cursor-pointer flex flex-rows justify-between"
              }
            >
              {item.icon}{item.label}
            </div>
          
          </Link>
          
        ))}

      </div>
    </div>
  );
}
