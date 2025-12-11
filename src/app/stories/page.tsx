import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import StoryCard from "@/components/story"

function SurvivalStories() {
    const values = [
        {src:'story1.jpg', heading:'Escaping Danger at Night', description:'Riya used her courage and self-defense skills to get away from a threatening situation...', story:` I still remember the day that I first met Julia. She was just 15 years old when a social worker brought her into our office. She was in care, the child of an abusive father. Now she was in a relationship with an abusive boyfriend. And, she was pregnant. Desperate to find specialized support for Julia as she approached motherhood, I am just so grateful that her social worker turned to us.
                We met with Julia and listened to her. She told us how conflicted she was – how she still loved her abusive boyfriend because it was the first time she ever felt like anyone cared for her. But we cared for her.
                Today, Julia is the proud mother of a beautiful baby girl. She has left her boyfriend. She comes to counselling with us whenever she needs to.
                Julia’s path is not easy though. She will soon age out of care, which means that she will be left on her own except for us – the counsellors and social workers at Battered Women’s Support Services.`},
        {src:'story2.jpg', heading:'Empowering My Community', description:'After surviving an incident, Priya started training others in her village..', story:`Imagine leaving your home far away and arriving as a new immigrant in Canada, with just your husband and two children. You know few people. You have no family or friends. No one to turn to. And now imagine that your husband is abusing you.
                Imagine how trapped you would feel. How isolated and lonely. And how terrified for your own children. The only person you know in your new home is the one person you fear the most. That’s what happened to Sara. When Sara came to see us, she had few social or family supports. She didn’t know where else to turn, or who to talk to. The first thing our support worker did was to give Sara a space where she could talk and be heard. That sounds so simple, doesn’t it? But she hadn’t been heard in so long.
                Sara didn’t know that there were places where she and her children could go to escape her husband. We helped her fill out housing applications and join our employment program.
                Most of all, in our support worker, Sara found an ally, who worked alongside her as she gained back her own personal power, and found her long-silenced voice.`},
        {src:'story3.jpg', heading:'From Fear to Strength', description:'How Meera rebuilt her confidence through martial arts and awareness training..', story:`It was a particularly busy day at our office when I first met Linda. She had fled a horribly abusive husband and now was sitting on the couch in our support group room drinking a cup of tea. She had been with her husband for ten years. She had left him previously and this time she vowed was the last. But she was terrified. “He told me that if I ever tried to leave him again, he would track me down and kill me.” Linda said in a quiet soft voice.
                And, she was right to be afraid because her husband fit most of the criteria for the capacity to do more violence to her including lethal violence. Desperate to leave for good this time in spite of the risk, Linda called BWSS crisis line and then came to our office.
                We met with Linda and listened to her. She told us how dangerous he was and how horrible it was to know that the man she loved was the person she feared the most. She spoke of how it wasn’t always so bad, that it didn’t start out that way. She told us how that over time his possessiveness increased, how he would control her every move, how he isolated her by making her give up her friends and her family. And how he made her lose her employment, a job she loved. She never thought anyone would believe her. But we believe her.
                Linda is safe today. She has relocated to another community and is thriving.`},
        {src:'story4.webp', heading:'Bus Stop Bravery', description:'Anjali stood up against harassment on her way home and inspired others to speak up..', story:`At 18, I was arrested after a joyride in my mom’s car and sent to a faith-based dorm, where I met my trafficker. She groomed me, and I was trafficked for 10 years. She controlled everything—when I ate, slept, and moved. I was convicted 23 times for prostitution, but no one saw I was being forced. Police mocked me, ignored me, and some even abused me.
                I tried to escape many times, but she always found a way to stop me. In 2012, after another failed attempt, I hit rock bottom in jail. That’s when I decided to share my story—to help others like me.
                Now I help people leave “the life,” often through the Trafficking Hotline. We call for support, not judgment. If I’d known my calls were shared with police, I wouldn’t have reached out. Trust and safety matter.
                Eventually, one officer listened. I told my story on my terms. If it helps even one person—it’s worth it.
            `},
        {src:'story5.jpg', heading:'Safety Through Awareness', description:'Kavita avoided a risky situation thanks to knowledge from a local workshop...', story:`  In 2010, I was a high school senior, trafficked for nine months. When I escaped, a compassionate detective referred me to the National Human Trafficking Hotline. The advocate I spoke to changed everything—she listened, challenged the way I saw myself, and reminded me I was a victim, not a criminal.
                She treated me with dignity, connected me to services and a survivor leader, and helped me begin healing. I struggled with PTSD and often called the hotline when I felt lost. They never tried to “save” me—just supported me so I could save myself.
                Today, as a victim advocate, I still trust the hotline to help others like me.
            `},
        {src:'story6.png', heading:'My First Defense', description:'Sunita shares her story of using simple techniques she learned just weeks earlier...', story:`    I’m a professional fighter and survivor of six and a half years of domestic abuse. Despite my strength, I was isolated, controlled, and broken—forced to live a double life to protect my daughter. When I finally escaped, I was arrested due to false claims by my abuser, and separated from my child for 10 agonizing days.
                With help from Women Against Abuse and relentless determination, I found safety, healing, and hope. I let go of bitterness, reclaimed my power, and broke the cycle of abuse. I went from homeless and defeated to a world champion, advocate, and speaker.
                Today, I live in peace and love, proving that healing is possible. My journey is a testament to resilience, and I share it to inspire others to rise.
                “There is purpose in your journey. There is light in your heart. Trust it.”
            `},
    ]
    return (
        <div className="flex flex-col min-h-screen bg-[#191624] text-white ">
            <nav>
                <HomeNavbar active="Survival Stories" />
            </nav>
            <main className="flex-1 text-center">
                <div className="text-3xl p-4 font-bold text-[#8a63d2]">Survival Stories</div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                    {values.map(item => (
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