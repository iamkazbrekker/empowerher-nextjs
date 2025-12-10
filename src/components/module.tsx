import { Play } from "lucide-react";

export default function VideoModule({position}: {position: string}) {
  return (
    <div className={`${position} 
    absolute 
    w-20 
    h-20
    z-20 
    flex justify-center items-center 
    cursor-pointer 
    -translate-x-1/2 -translate-y-1/2 
    transform transition-shadow duration-300 ease-in-out 
    bg-[#8a63d2] hover:bg-[#8b61df] border-[#8a63d2] rounded-[20px] 
    hover:scale-125 `}> 
        <Play className=" fill-white" />
    </div>
  )
}