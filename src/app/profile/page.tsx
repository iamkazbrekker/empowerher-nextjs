import Footer from "@/components/footer"
import HomeNavbar from "@/components/navbar"
import { BellDot, ChevronRight, LockIcon, LogOut, ShieldHalf, UserCircle, UserPenIcon } from "lucide-react"

function ProfilePage() {
  return (
    <div className="bg-[#191624] text-white text-center flex flex-col min-h-screen">
        <nav className="sticky top-0">
            <HomeNavbar active="Profile" />
        </nav>
        <main className="flex-1">
            <div className="bg-[#1f1b2c] rounded-[15px] p-4 border-[#2a263c] border-solid shadow-[0_10px_30px_rgba(0,0,0,0.4)] m-10">
                <div className="flex items-center flex-col border-b border-solid border-[#2a263c]">
                    <UserCircle className="w-[120px] h-[120px] rounded-full mb-3" />
                    <h1 className="text-3xl font-bold mb-1">Prem Khairnar</h1>
                    <p className="text-[#d1d1d1] mb-4">Member since 15 Dec 2006</p>
                </div>

                <div className="mt-4 ">
                    <div className="flex justify-between">
                        <p>Level 1</p>
                        <p>500 / 2,000 EXP</p>
                    </div>
                    <div className="h-5 mt-2 bg-[#3b335b] rounded-4xl">
                        <div className="bg-[#8a63c2] w-1/4 h-full rounded-4xl"></div>
                    </div>
                </div>

                <div className="mt-2.5 rounded-xl">
                    <h2 className="text-xl text-[#d1d1d1] font-bold text-left mb-2 border-b border-[#2a263c]">Account Settings</h2>
                    <div className="mt-2.5 rounded-xl">
                    <div className=" rounded-xl mb-2.5 p-1 hover:bg-[#2a263c] flex justify-between"><div className="flex items-center"><UserPenIcon className="iconList"/><span className="profileOptions">Edit Profile</span></div><ChevronRight /></div>
                    <div className="rounded-xl mb-2.5 p-1 hover:bg-[#2a263c] flex justify-between"><div className="flex items-center"><LockIcon className="iconList"/><span className="profileOptions">Change Password</span></div><ChevronRight /></div>
                    <div className="rounded-xl mb-2.5 p-1 hover:bg-[#2a263c] flex justify-between"><div className="flex items-center"><BellDot className="iconList"/><span className="profileOptions"> Notification Setting</span></div><ChevronRight /></div>
                    <div className="rounded-xl mb-2.5 p-1 hover:bg-[#2a263c] flex justify-between"><div className="flex items-center"><ShieldHalf className="iconList"/><span className="profileOptions">Privacy and Security</span></div><ChevronRight /></div>
                    <div className="rounded-xl mb-2.5 p-1 hover:bg-[#2a263c] flex justify-between"><div className="flex items-center"><LogOut className="iconList"/><span className="profileOptions">Logout</span></div><ChevronRight /></div>
                </div>
                </div>

            </div>
        </main>
        <footer className="text-left">
            <Footer />
        </footer>
    </div>
  )
}
export default ProfilePage