"use client"
import { useRouter } from "next/navigation"
import React, {useEffect} from 'react'
import axios from "axios"
import Link from "next/link"

function LoginPage() {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email:"",
    password:""
  })

  const onLogin = async () => {
    try{
      const response = await axios.post("/api/users/login", user)
      console.log(response.data)
      router.push('/home')
    }catch(error:any){
      console.log('Login failed: '+ error)
    }
  }

  return (
    <div className="m-0 bg-[#191624] flex justify-center items-center text-white h-screen">
      <div className="bg-[#3b335b] text-[#fffdfd] p-[30px] rounded-xl w-[320px] text-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h1 className="text-[#8a63d2] mb-2.5 text-3xl font-extrabold">EmpowerHer</h1>
        <h2 className="mb-5 text-2xl font-bold">Login</h2>


          <input id="email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} type="text" placeholder="E-Mail" className="w-19/20 p-3 border border-solid my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10"/>

          <input id="password" value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})} type="password" placeholder="Password" className="w-19/20 p-3 border border-solid my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10"/>


        <button onClick={onLogin} className="w-19/20 bg-[#8a63d2] text-white font-bold rounded-xl cursor-pointer mt-3 h-10 hover:bg-[#8a2be2]">Login</button>
        <p className="mt-[15px]">Don't have an account? <Link href="/signup" className="text-[#8a63d2] font-semibold">Sign Up</Link></p>
      </div>
    </div>
  )
}
export default LoginPage