'use client'
import React from 'react'
import { sideBarLinks } from '@/constants'
import { AiOutlineLogout } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import Link from 'next/link'



const SideBar = () => {

    const pathname = usePathname()

    const [state, setState] = React.useState(true);

    return (
        <aside className='flex flex-col justify-between items-center py-10 h-screen w-64 bg-white'>
            <h1 className='text-3xl'>پنل کاربری</h1>

            <nav className='flex flex-col w-2/3'>
                {sideBarLinks.map((navItem) => (
                    <Link
                        key={navItem.route}
                        href={navItem.route}
                        className={`flex items-center my-2 px-5 py-2 rounded-xl transition-all duration-300 hover:bg-[#4578f915] ${navItem.route === pathname ? 'bg-[#4578f915]' : 'inherit'}`}>
                        <span className='ml-2'>
                            {navItem.icon}
                        </span>
                        {navItem.label}
                    </Link>
                ))}
            </nav>

            <button type='button' className=' w-2/3 my-2 px-5 py-2 rounded-xl transition-all duration-300 hover:bg-red-100 flex items-center'>
                <span className='ml-2'>
                    <AiOutlineLogout />
                </span>
                خروج
            </button>
        </aside>
    )
}

export default SideBar