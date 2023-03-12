import React, { ReactNode } from "react";

interface MenuProps {
    children: ReactNode
    isOpen: boolean
}

const Menu: React.FC<MenuProps> = ({children, isOpen}) => {

    return (
        <nav className={`${isOpen ? 'absolute right-5 top-20 md:right-16 md:top-28' : 'hidden'} lg:block lg:fixed lg:left-1/2 lg:translate-x-[-50%]`}>
            <ul className='flex flex-col items-end gap-2.5 bg-[#191919] w-48 p-5 rounded-lg
            lg:flex-row lg:w-full lg:rounded-full lg:p-2.5'>
                {children}
            </ul>
        </nav>
    )
}

export default Menu;