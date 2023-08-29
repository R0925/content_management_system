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
        <aside className='flex flex-col justify-between items-center py-10 h-screen w-64 bg-light-primary dark:bg-dark-secondary'>
            <h1 className='text-3xl font-[anjoman]'>پنل کاربری</h1>

            <nav className='flex flex-col w-2/3'>
                {sideBarLinks.map((navItem) => (
                    <Link
                        key={navItem.route}
                        href={navItem.route}
                        className={`flex items-center my-2 px-5 py-2 rounded-xl transition-all duration-300 hover:bg-[#4578f915] dark:hover:bg-white dark:hover:text-black   ${navItem.route === pathname && 'bg-[#4578f915] dark:bg-white text-black'}`}>
                        <span className='ml-2'>
                            {navItem.icon}
                        </span>
                        {navItem.label}
                    </Link>
                ))}
            </nav>

            <button type='button' className=' w-2/3 my-2 px-5 py-2 rounded-xl transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-900 flex items-center'>
                <span className='ml-2'>
                    <AiOutlineLogout />
                </span>
                خروج
            </button>
        </aside>
    )
}

export default SideBar