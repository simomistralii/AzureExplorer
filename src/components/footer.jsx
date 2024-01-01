import React from 'react';
import { TbLogout } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { LuKeySquare } from 'react-icons/lu';
import { CiTimer } from 'react-icons/ci';
import DateTime from '../utils/datetime';

const Footer = ({ logout, user }) => {
  return (
    <footer className="absolute bottom-0 w-full h-6 py-1 px-4 bg-[#0078d4] ">
      <div className="flex justify-between text-xs text-white" style={{ fontSize: '0.5rem' }}>
        <div className="flex divide-x border-blue-400 text-xs select-none" style={{ fontSize: '0.5rem' }}>
          <div className="w-3 my-auto" title="Logged">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
          <div className="px-2 flex space-x-0.5">
            <CiTimer className="my-auto" size={12} /> <span className="my-auto"><DateTime /></span>
          </div>
          {user.name && (
            <div className="px-2 flex space-x-0.5">
              <FaRegUser className="my-auto" size={12} /> <span className="my-auto capitalize">{user.name}</span>
            </div>
          )}
          {user.username && (
            <div className="px-2 flex space-x-0.5">
              <LuKeySquare className="my-auto" size={12} /> <span className="my-auto">{user.username}</span>
            </div>
          )}
        </div>
        <button className=" flex space-x-1 hover:scale-125 ease-in-out transition-all" title="Logout" onClick={logout}>
          <TbLogout className="my-auto" size={12} /> <span className="my-auto">Logout</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
