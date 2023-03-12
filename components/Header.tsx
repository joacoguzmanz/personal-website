import Menu from "@/components/Menu";
import MenuItem from "@/components/MenuItems";
import {useState} from "react";
import HamMenu from "@/components/HamMenu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='px-5 py-7 flex justify-between items-center md:px-16 md:py-14 lg:px-20 lg:py-16 lg:relative'>
            <p className='font-medium text-lg'>JG</p>

            <HamMenu handleMenu={handleMenu} />

            <Menu isOpen={menuOpen}>
                <MenuItem title={'Projects'} href={'projects'} />
                <MenuItem title={'About'} href={'about'} />
                <MenuItem title={'Blog'} href={'blog'} />
                <MenuItem title={'Contact'} href={'contact'} />
            </Menu>
        </div>
    )
}

export default Header;