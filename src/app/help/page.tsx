import Footer from "@/components/footer"
import HelpCard from "@/components/help-card"
import HomeNavbar from "@/components/navbar"

function Help() {
    const values = [
        {src:'/help1.jpg', heading: 'Police Helpline', number:"100"},
        {src:'/help2.jpg', heading: 'Emergency Medical', number:"108"},
        {src:'/help3.jpg', heading: 'Women Helpline', number:"1091"},
        {src:'/help4.jpg', heading: 'Cyber Crime', number:"1930"},
        {src:'/help5.jpg', heading: 'Child Helpline', number:"1098"},
        {src:'/help6.jpg', heading: 'Mental Health Support', number:"9152987821"},
    ]

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
                {values.map(item =>(
                    <HelpCard key={item.heading} src={item.src} heading={item.heading} number={item.number} />
                ))}
            </div>
        </main>
        <Footer />
    </div>
  )
}
export default Help