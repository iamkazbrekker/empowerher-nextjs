function StoryCard({ src, heading, description, story }: {
    src: string,
    heading: string,
    description: string,
    story: string
}) {
    return (
        <div className="flip-card bg-[#2a263c] rounded-xl overflow-hidden h-[500px] hover:shadow-[0_0_25px_rgba(138,99,210,0.4)] transition-all duration-300 m-6 mb-0 mt-0">
            <div className="flip-card-inner relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d">

                <div
                    className="flip-card-front absolute inset-0 bg-cover bg-center backface-hidden rounded-xl"
                    style={{ backgroundImage: `url(${src})` }}
                >
                    <div className="absolute top-0 w-full bg-black/60 p-4">
                        <h3 className="text-2xl font-bold">{heading}</h3>
                        <p className="text-sm text-[#d1d1d1]">{description}</p>
                    </div>
                </div>

                <div className="flip-card-back absolute inset-0 bg-[#1f1b2c] p-5 rounded-xl overflow-y-auto text-sm leading-relaxed text-[#d1d1d1] transform rotate-y-180 backface-hidden">
                    {story}
                </div>

            </div>
        </div>
    );
}

export default StoryCard;
