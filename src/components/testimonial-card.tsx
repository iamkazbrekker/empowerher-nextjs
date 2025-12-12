function TestimonialCard({ testimonial }: { testimonial: string }) {
    return (
        <div className="bg-[#2a263c] px-5 py-4 rounded-[20px] mt-4 flex flex-col text-left hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(138,99,210,0.3)]">
            <h3 className="mb-2 font-semibold">Anonymous</h3>
            <p className="text-[#d1d1d1]">{testimonial}</p>
        </div>
    )
}
export default TestimonialCard