

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Link from "../Link/Link";
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', id: 'home' },
        { path: '/about', id: 'about' },
        { path: '/services', id: 'services' },
        { path: '/contact', id: 'contact' },
        { path: '/products', id: 'products' }
    ];

    return (
        <nav className='text-black bg-yellow-200 p-6 px-6 shadow-lg'>
            <div onClick={() => setOpen(!open)}>
                {
                    (open === true)   
                    ? <HiMenuAlt1 className='text-2xl md:hidden'></HiMenuAlt1>
                    : <AiOutlineClose className='text-2xl md:hidden'></AiOutlineClose>
                }
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 ${open ? 'top-20' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;

