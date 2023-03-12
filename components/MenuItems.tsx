import React from "react";
import Link from "next/link";

interface MenuItemsProps {
    title: string,
    href: string
}

const MenuItem: React.FC<MenuItemsProps> = ({title, href}) => {
    return (
        <Link href={href}>
            <li className='inline-block bg-[#191919] text-white py-2 px-4 rounded-full hover:bg-white/10'>
                {title}
            </li>
        </Link>
    )
}

export default MenuItem;