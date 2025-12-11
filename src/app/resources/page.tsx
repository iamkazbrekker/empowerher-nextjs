import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import ResourceBlock from "@/components/resource"
import Link from "next/link"

function Resources() {
    const elements = [
        {src:'/resources1.png', heading: "RAINN (Support Network)", description: "Confidential help, support and recovery resources for survivors of sexual violence", href: 'https://www.rainn.org/'},
        {src:'/resources2.png', heading:"Self Defense Company", description:"Training programs and tools for learning self-defense techniques.", href: 'https://www.myselfdefensetraining.com/'},
        { src:'/resources3.png', heading:"NSVRC", description:"National Sexual Violence Resource Center with toolkits and education.", href: 'https://www.nsvrc.org/'},
        {src:'/resources4.webp', heading:"SurvivorNet", description:"Health, trauma, and mental support resources for women survivors.", href: 'https://www.survivornet.com'},
        {src:'/resources5.png', heading:"UN Women", description:"Global empowerment initiatives for women and girls in safety and equality.", href: 'https://www.unwomen.org/'},
        {src:'/resources6.svg', heading:"Futures Without Violence", description:"Prevention programs and training to stop domestic and sexual violence.", href: 'https://www.futureswithoutviolence.org/'}
    ]
    return (
        <div>
            <nav className="">
                <HomeNavbar active="Resources" />
            </nav>
            <main className="bg-[#191624] text-center text-white flex-1">
                <div className="text-[#8a63d2] text-3xl p-4 font-bold">Resources</div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 bg-[#191624]">
                    {elements.map(item => (
                        <Link key={item.heading} href={item.href}>
                            <ResourceBlock src={item.src} heading={item.heading} description={item.description} />
                        </Link>
                    ))}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Resources