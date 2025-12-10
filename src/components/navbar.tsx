import Link from "next/link";

export default function HomeNavbar({ active }: { active: string }) {
  const nav = [
    { label: "Home", href: "/home" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Survival Stories", href: "/stories" },
    { label: "Resources", href: "/resources" },
    { label: "Profile", href: "/profile" },
    { label: "Get Help", href: "/help" }
  ];


  return (
    <div>
      <div className="p-4 border-b-3 border-[#2a263c] border-solid text-4xl font-bold">
        EmpowerHer
      </div>

      <div className="p-3 flex flex-row justify-evenly border-[#2a263c] border-b-3 border-solid">
        {nav.map(item => (
          <Link key={item.label} href={item.href}>
            <p
              className={
                item.label === active
                  ? "text-[#8a63d2] font-semibold cursor-pointer"
                  : "text-white opacity-70 hover:opacity-100 cursor-pointer"
              }
            >
              {item.label}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}
