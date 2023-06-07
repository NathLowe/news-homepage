import React from 'react'
import { useDisclosure } from '@mantine/hooks';

export default function Navbar() {
    const [opened, {open,close,toggle}] = useDisclosure(false);

    return (
        <header className="flex items-center justify-between my-8" >
            <h1 className="sr-only">NewsPage</h1>
            <img src="/assets/images/logo.svg" alt="Logo" />
            <nav className={`fixed z-10 w-screen h-screen top-0 right-0 transition [&.open]:bg-black/20 [&.open]:md:bg-transparent
                md:relative md:w-fit md:h-fit md:bg-transparent group ${opened && 'open'}`}>
                <div className={`w-64 pt-20 px-4 fixed top-0 right-0 h-full bg-white text-black transition translate-x-full group-[.open]:translate-x-0
                    md:w-fit md:h-fit md:pt-0 md:px-3 md:relative md:bg-transparent md:text-muted-dark md:translate-x-0`} >
                    <ul className="list-none text-lg md:flex md:items-center" >
                        {
                            ['Home','New','Popular','Trending','Categories'].map((item, index) => (
                                <li key={index} className="my-4 cursor-pointer transition hover:text-primary md:my-0 md:px-4" > {item} </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            <button type='button' onClick={toggle} className='md:hidden cursor-pointer relative z-20' >
                <img className={`${opened && 'hidden'}`} src="/assets/images/icon-menu.svg" alt="Menu icon" />
                <img className={`${!opened && 'hidden'}`} src="/assets/images/icon-menu-close.svg" alt="Menu icon" />
            </button>
        </header>
  )
}
