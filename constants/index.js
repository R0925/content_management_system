import { RxDashboard } from 'react-icons/rx';
import { FiUsers } from 'react-icons/fi';
import { PiHandbagSimpleLight } from 'react-icons/pi';
import { BiMessageRounded } from 'react-icons/bi';
import { PiGearSixLight } from 'react-icons/pi';

export const sideBarLinks = [
    {
        icon: <RxDashboard />,
        label: 'داشبورد',
        route: '/'
    },
    {
        icon: <FiUsers />,
        label: 'کاربران',
        route: '/users'
    },
    {
        icon: <PiHandbagSimpleLight />,
        label: 'محصولات',
        route: '/products'
    },
    {
        icon: <BiMessageRounded />,
        label: 'پیام ها',
        route: '/messages'
    },
    {
        icon: <PiGearSixLight />,
        label: 'تنظیمات',
        route: '/setting'
    },
]