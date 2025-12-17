import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const { email, password } = reqBody

        const user = await User.findOne({email})
        if (!user){
            console.log("User doesn't exist")
            return NextResponse.json({error:"User does not exist"}, {status: 400})
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword){
            return NextResponse.json({error:"Invalid password"}, {status: 400})
        }

        const response = NextResponse.json({
            message: "Login Successful",
            success: true
        })
        return response
    }catch(error:any){
        return NextResponse.json({error: error.message}, {status:500})
    }
}

