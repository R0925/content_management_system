'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiMenuAlt3 } from 'react-icons/hi'
import ThemeSwitcher from './ThemeSwitcher'
import { useGlobalContext } from '@/context/store'
import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Topbar = () => {

    const pathname = usePathname();
    const { activeSideBar, setActiveSideBar, pageName, setPageName } = useGlobalContext();

    useEffect(() => {
        sideBarLinks.forEach(item => {
            if (pathname.includes(item.route))
                setPageName(item.label)
        })
    }, [])


    return (
        <section className='w-full pt-7 flex justify-between items-center h-28'>
            <div className='flex gap-5'>
                <button className='lg:hidden block text-3xl' onClick={() => (setActiveSideBar(true))}>
                    <HiMenuAlt3 />
                </button>
                <h1 className='text-3xl font-[anjoman]'>{pageName}</h1>
            </div>

            <div className='flex items-center gap-10 text-2xl text-gray-700'>
                <div className='flex items-center gap-2'>
                    <ThemeSwitcher />
                </div>

                <Menu as="div" className="relative inline-block group">
                    <div>
                        <Menu.Button className=" w-44 inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-[anjoman] text-dark-secondary dark:text-light-secondary group-hover:bg-[#4578f915] transition-all duration-300 rounded-xl">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-1 ring-black font-[anjoman]"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            رضا اسفندیاری
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute z-10 mt-2 w-44 origin-top-right rounded-md bg-white  dark:bg-dark-secondary dark:text-white shadow-lg focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'transition-all duration-300 bg-white text-dark-primary dark:bg-dark-primary dark:text-white ' : 'dark:text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            حساب کاربری
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-red-100 dark:bg-red-900 dark:text-white transition-all duration-300 text-gray-900' : 'dark:text-white ',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            خروج از حساب
                                        </a>
                                    )}
                                </Menu.Item>


                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </section>
    )
}

export default Topbar