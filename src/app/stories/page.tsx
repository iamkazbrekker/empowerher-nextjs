import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import StoryCard from "@/components/story"
import stories from "@/data/values.json"

function SurvivalStories() {
    return (
        <div className="flex flex-col min-h-screen bg-[#191624] text-white ">
            <nav className="sticky top-0 w-full text-center z-50">
                <HomeNavbar active="Survival Stories" />
            </nav>
            <main className="flex-1 text-center">
                <div className="text-3xl p-4 font-bold text-[#8a63d2]">Survival Stories</div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                    {stories.stories.map(item => (
                        <StoryCard key={item.src} src={item.src} heading={item.heading} description={item.description} story={item.story} /> 
                    ))}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default SurvivalStories