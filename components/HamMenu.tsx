import React from "react";

interface HamMenuProps {
    handleMenu: React.MouseEventHandler<HTMLDivElement>
}

const HamMenu: React.FC<HamMenuProps> = ({handleMenu}) => {
    return (
        <div className='inline-block rounded-full bg-[#191919] p-3 space-y-1 cursor-pointer lg:hidden' onClick={handleMenu}>
            <span className='block w-4 h-0.5 bg-white'></span>
            <span className='block w-4 h-0.5 bg-white'></span>
            <span className='block w-4 h-0.5 bg-white'></span>
        </div>
    )
}

export default HamMenu;