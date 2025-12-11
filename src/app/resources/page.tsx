import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import ResourceBlock from "@/components/resource"
import Link from "next/link"
import resources from "@/data/values.json"

function Resources() {

    return (
        <div>
            <nav className="sticky top-0 w-full bg-[#191624] text-center text-white z-50">
                <HomeNavbar active="Resources" />
            </nav>
            <main className="bg-[#191624] text-center text-white flex-1">
                <div className="text-[#8a63d2] text-3xl p-4 font-bold">Resources</div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 bg-[#191624]">
                    {resources.resources.map(item => (
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