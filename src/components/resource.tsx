export default function ResourceBlock(
  {src, heading, description}:{src: string, heading: string, description: string}) {
  return (
    <div className="bg-[#1f1b2c] cursor-pointer flex flex-col border border-[#2a263c] text-white m-4  rounded-[20px] text-left transition-all duration-300 hover:-translate-y-1 
    hover:shadow-[0_0_15px_rgba(138,99,210,0.5)]">
      <img src={src} alt={heading} className="h-[150px] rounded-[20px] bg-white m-3 mb-0" />
      <p className="text-xl font-semibold pt-3 pl-3">{heading}</p>
      <p className="p-3 text-gray-300">{description}</p>
    </div>
  )
}