import Footer from "@/components/footer"
import HelpCard from "@/components/help-card"
import HomeNavbar from "@/components/navbar"
import help from "@/data/values.json"

function Help() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
        <nav>
        <HomeNavbar active="Get Help"/>
        </nav>
        <main className="bg-[#191624] text-white text-center flex-1">
            <div className="text-[#8a63d2] text-3xl p-4 font-bold">
                Emergency Helplines
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-6">
                {help.help.map(item =>(
                    <HelpCard key={item.heading} src={item.src} heading={item.heading} number={item.number} />
                ))}
            </div>
        </main>
        <Footer />
    </div>
  )
}
export default Help