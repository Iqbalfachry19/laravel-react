import React from "react";
import { Link } from "@inertiajs/inertia-react";
export default function Header() {
    return (
        <div className="w-full flex bg-[#00aeef] p-2 text-white justify-between">
            <Link href="/" className="flex items-center space-x-2">
                <img className="h-10 w-10" src="/image/logo.png" alt="Image" />
                <p>Donaco</p>
            </Link>
            <nav className="flex space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                    <p>Home</p>
                </Link>
                <Link href="/donasi" className="flex items-center space-x-2">
                    <p>Donasi</p>
                </Link>
                <Link href="/about" className="flex items-center space-x-2">
                    <p>About</p>
                </Link>
            </nav>
            <div className="flex items-center space-x-2">
                <Link
                    href={route("login")}
                    className="flex items-center space-x-2"
                >
                    Log In
                </Link>
                <Link
                    href={route("register")}
                    className="bg-white text-black p-2 rounded-lg"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
