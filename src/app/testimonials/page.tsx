"use client"

import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import data from "@/data/values.json"
import { PlusIcon } from "lucide-react"
import { useState } from "react"

function Testimonials() {
    const [open,  setOpen] = useState(false)
    return (
        <div className="bg-[#191624] text-white flex flex-col min-h-screen">
            <nav className="sticky top-0 w-full text-center z-50">
                <HomeNavbar active="Testimonials" />
            </nav>
            <main className="flex-1 text-center flex flex-col items-center">
                <div className="w-[80vw] bg-[#1f1b2c] rounded-2xl px-12 py-4 m-16">
                    <div className="flex flex-row justify-between">
                        <div className="text-3xl p-4 font-bold text-[#8a63d2]">Testimonials</div>
                        <Button onClick={() => setOpen(true)} className="mt-4 p-4 bg-[#8a63d2] text-white py-2 px-5 rounded-lg cursor-pointer font-semibold transition duration-300 hover:bg-[#a07ae6]"><PlusIcon />Add Testimonials</Button>
                    </div>
                    <div className="flex flex-col gap-5">
                        {data.testimonials.map(item => (
                            <TestimonialCard key={item} testimonial={item} />
                        ))}
                    </div>
                </div>
                {open && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-1000  justify-center">
                    <div className="bg-[#1f1b2c] p-5 rounded-[20px] w-[90vw] flex flex-col gap-4 m-16">
                    <input className="h-[120px] p-2.5 resize-none rounded-[6px] bg-[#2a263c]" placeholder="Write your testimonial here..."></input>
                    <Button className="bg-[#8a63d2] hover:bg-[#a07ae6]" onClick={()=> setOpen(false)}>Submit</Button>
                    <Button variant={"destructive"} onClick={()=> setOpen(false)}>Cancel</Button>
                    </div>
                </div>
                )}

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Testimonials