"use client"

import Link from "next/link"

function LoginPage() {
  return (
    <div className="m-0 bg-[#191624] flex justify-center items-center text-white h-screen">
      <div className="bg-[#3b335b] text-[#fffdfd] p-[30px] rounded-xl w-[320px] text-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h1 className="text-[#8a63d2] mb-2.5 text-3xl font-extrabold">EmpowerHer</h1>
        <h2 className="mb-5 text-2xl font-bold">Login</h2>


          <input id="email" type="text" placeholder="E-Mail" className="w-19/20 p-3 my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10"/>

          <input id="password" type="text" placeholder="Password" className="w-19/20 p-3 my-2.5 mx-0 rounded-xl b-solid b-[#cccccc] bg-white text-black h-10"/>


        <button className="w-19/20 bg-[#8a63d2] text-white font-bold rounded-xl cursor-pointer mt-3 h-10 hover:bg-[#8a2be2]">Login</button>
        <p className="mt-[15px]">Don't have an account? <Link href="/signup" className="text-[#8a63d2] font-semibold">Sign Up</Link></p>
      </div>
    </div>
  )
}
export default LoginPage