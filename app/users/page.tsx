import React from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
const Users = () => {

  const list = [
    {
      name: 'رضا اسفندیاری',
      email: 're.esfandyari@gmail.com',
      number: '09038634885',
      status: 'فعال',
      role: 'ادمین'
    },
    {
      name: 'رضا اسفندیاری',
      email: 're.esfandyari@gmail.com',
      number: '09038634885',
      status: 'فعال',
      role: 'ادمین'
    },
    {
      name: 'رضا اسفندیاری',
      email: 're.esfandyari@gmail.com',
      number: '09038634885',
      status: 'فعال',
      role: 'ادمین'
    }
  ]
  return (
    <>
      <div className='flex justify-between'>
        <input type="text" name="price" className="rounded-md py-1.5 px-2 bg-white dark:bg-dark-secondary w-80 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="جستجو" />
        <button className=' bg-customBlue px-5 py-2 rounded-lg text-white dark:text-dark-primary  '>
          ایجاد کاربر جدید
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">

        <table className="w-full text-sm  dark:text-gray-400 text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ردیف
              </th>
              <th scope="col" className="px-6 py-3">
                نام
              </th>
              <th scope="col" className="px-6 py-3">
                اطلاعات ورود
              </th>
              <th scope="col" className="px-6 py-3">
                نقش
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr className={`bg-white dark:bg-dark-secondary dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all ${index < list.length && 'border-b'}`}>
                <th scope="row" className="px-6 py-4">
                  {++index}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}

                </td>
                <td className="px-6 py-4 flex flex-col gap-1">
                  <span>{item.email}</span>
                  <span>
                    {item.number}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.role}
                </td>
                <td className="px-6 py-4">
                  <span className=' bg-customGreen text-white px-5 py-1 rounded-lg text-xs'>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium inline-block m-3 dark:text-white hover:underline">
                    <FaPen />
                  </a>
                  <a href="#" className="font-medium inline-block m-3 dark:text-white hover:underline">
                    <FaTrash />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users