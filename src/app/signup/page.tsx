"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

function SignupPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        name: ""
    })

    const onSignup = async () => {
        try{
            const response = await axios.post('/api/users/signup', user)
            console.log('Signup success: '+response.data)
            router.push("/login")
        }catch(error: any){
            console.log("Signup failed: "+error.message)
        }
    }
    return (
        <div className="m-0 bg-[#191624] flex justify-center items-center text-white h-screen">
            <div className="bg-[#3b335b] text-[#fffdfd] p-[30px] rounded-xl w-[320px] text-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                <h1 className="text-[#8a63d2] mb-2.5 text-3xl font-extrabold">EmpowerHer</h1>
                <h2 className="mb-5 text-2xl font-bold">Login</h2>

        <input id="name" value={user.name} onChange={(e)=>setUser({...user, name: e.target.value})} placeholder="Full Name" type="text" required className="border border-solid w-19/20 p-3 my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10"/>
                <input id="email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} type="text" placeholder="E-Mail" required className="border border-solid w-19/20 p-3 my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10" />

                <input id="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} type="text" placeholder="Password" required className="border border-solid w-19/20 p-3 my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10" />


                <button onClick={onSignup} className="w-19/20 bg-[#8a63d2] text-white font-bold rounded-xl cursor-pointer mt-3 h-10 hover:bg-[#8a2be2]">SignUp</button>
                <p className="mt-[15px]">Already have an account? <Link href="/login" className="text-[#8a63d2] font-semibold">Login</Link></p>
            </div>
        </div>
    )
}
export default SignupPage