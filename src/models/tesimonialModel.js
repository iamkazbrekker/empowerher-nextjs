import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
    testimonial:{
        type: String,
    }
})

const Testimonials = mongoose.models.testimonials || mongoose.model("testimonials", testimonialSchema)

export default Testimonials