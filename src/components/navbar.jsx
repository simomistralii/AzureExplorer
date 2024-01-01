import React from 'react';
import MicrosoftAzure from '../assets/Microsoft-Azure.png';
import { BsMenuButtonWide } from "react-icons/bs";
import {links} from '../utils/navBarItems'
import { NavLink } from 'react-router-dom';

const Navbar = (/* userAuth */) =>  {
    return (

        <nav className="bg-[#0078d4] border-gray-200 h-8">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between m-auto  px-4">
                <NavLink to={'/'} className="flex justify-center place-content-center items-center space-x-1 rtl:space-x-reverse py-1.5">
                    <img src={MicrosoftAzure} className="h-5 drop-shadow-2xl" alt="Azure Logo" />
                    <span className="self-center text-sm font-semibold whitespace-nowrap text-white">AzureExplorer</span>
                </NavLink>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" >
                    {/* <button className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300">
                        <BsMenuButtonWide color='white' size={15} />
                    </button> */}
                </div>
                
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
                    {links && links.length > 1 && 
                        <ul className="flex flex-col text-xs my-auto font-medium p-4 md:p-0 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            {links.map((item) => (
                                <li key={item.title}>
                                    <NavLink to={item.route} key={item.title}
                                            className={({ isActive }) => (isActive ? 'block py-2 px-3 rounded bg-transparent text-white' : 'block py-2 px-3 rounded bg-transparent text-white opacity-45') + ' hover:opacity-100 transition-all ease-in-out hover:scale-110'}>
                                        {item.title}</NavLink>
                                </li>
                            ))}
                            
                        </ul>
                    }
                </div>
            
            </div>
        </nav>
    );
};

export default Navbar;
