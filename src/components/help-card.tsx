function HelpCard({src, heading, number}:
    {
        src: string,
        heading: string,
        number: string
    }
) {
  return (
    <div className="bg-[#1f1b2c] p-6 border-[#2a263c] transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,99,210,0.5)] translate-y-0.5 flex flex-col items-center rounded-xl cursor-pointer m-6">
        <img className="h-20 w-20 object-cover border-[#3b335b] border-[0.5px] mb-1 rounded-full" src={src}/>
        <h2 className="text-xl mb-1">{heading}</h2>
        <p className="text-xl text-[#d1d1d1]">{number}</p>
    </div>
  )
}
export default HelpCard