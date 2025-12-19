import { NextURL } from "next/dist/server/web/next-url";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request:NextRequest){
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/' || path === '/signup'
    const token = request.cookies.get('token')?.value||""

    if (isPublicPath && token){
        return NextResponse.redirect((new URL('/home', request.nextUrl)))
    }
    if (!isPublicPath && !token){
        return NextResponse.redirect((new URL('/', request.nextUrl)))
    }
}

export const config = {
    matcher:[
        '/',
        '/signup',
        '/home',
        '/profile',
        '/testimonials',
        '/stories',
        '/help',
        '/resources'
    ]
}