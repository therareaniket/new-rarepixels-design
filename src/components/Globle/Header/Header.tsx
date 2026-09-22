"use client"

import "./header.css"
import Image from "next/image";
import Link from "next/link";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

const Header = () => {
    return (
        <header>
            <nav className="container">
                <div className="nav-cont-wrapper fixed top-[20px] w-max flex items-center gap-[80px] py-[10px] px-[20px] rounded-full">
                    <Link href="/">
                        <Image src={`${CDN_URL}/images/global/header/rare-pixels-logo.svg`} alt="header-logo" width={174} height={28} priority />
                    </Link>

                    <button onClick={() => { console.log("Bento Menu Clicked") }} className="cursor-pointer">
                        <Image src={`${CDN_URL}/images/global/header/header-bento-menu.svg`} alt="header-logo" width={24} height={24} priority />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header