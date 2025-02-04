import React from 'react'

const lists = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Login",
        link: "/login"
    },
    {
        id: 3,
        name: "Register",
        link: "/register"
    }
]

const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-between bg-black text-white p-7">
            <div className='text-3xl font-bold'>
                PolicyMarket
            </div>
            <div className='flex space-x-6'>
                <ul className='flex space-x-6'>
                    {lists.map((list) => (
                        <li className='text-orange-400 hover:text-yellow-500 hover:text-2xl text-xl font-bold' key={list.id}>
                            <a href={list.link}>{list.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar