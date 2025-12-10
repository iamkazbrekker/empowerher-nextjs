export default function HomeNavbar({ active }: { active: string }) {
  const items = [
    "Home",
    "Testimonials",
    "Survival Stories",
    "Resources",
    "Profile",
    "Get Help"
  ];

  return (
    <div>
      <div className="p-4 border-b-3 border-[#2a263c] border-solid text-4xl font-bold">
        EmpowerHer
      </div>

      <div className="p-3 flex flex-row justify-evenly border-[#2a263c] border-b-3 border-solid">
        {items.map((item) => (
          <p
            key={item}
            className={
              item === active
                ? "text-[#8a63d2] font-semibold cursor-pointer"
                : "text-white opacity-70 hover:opacity-100 cursor-pointer"
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
