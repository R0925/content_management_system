'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'


const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true); }, [])

    if (!mounted) return null;

    return (
        <button
            onClick={() => { setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') }}
            className=' bg-light-primary dark:bg-dark-secondary shadow-lg dark:shadow-gray-900 p-2 rounded-lg text-dark-primary dark:text-light-primary'>
            {resolvedTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </button>
    )
}

export default ThemeSwitcher