'use client'
import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Switch } from '@headlessui/react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'




function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Topbar = () => {
    const [enabled, setEnabled] = useState(false)


    function handleChange() {
        setEnabled((prev)=> !prev)
             
    }
    return (
        <section className='w-full pt-7 px-5 flex justify-between items-center'>
            <h1 className='text-3xl'>داشبورد</h1>

            <div className='flex items-center gap-10 text-2xl text-gray-700'>
                <div className='flex items-center gap-2'>
                    <MdLightMode />
                    <Switch
                        checked={enabled}
                        onChange={handleChange}
                        className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? '-translate-x-1' : '-translate-x-6'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition duration-300`}
                        />
                    </Switch>
                    <MdDarkMode />
                </div>
                <Menu as="div" className="relative inline-block group">
                    <div>
                        <Menu.Button className=" w-44 inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold group-hover:bg-[#4578f915] transition-all duration-300 rounded-xl">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-1 ring-black"
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
                        <Menu.Items className="absolute z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-[#4578f915] transition-all duration-300 text-gray-900' : 'text-gray-700',
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
                                                active ? 'bg-red-100 transition-all duration-300 text-gray-900' : 'text-gray-700 ',
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