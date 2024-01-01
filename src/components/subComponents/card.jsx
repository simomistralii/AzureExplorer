import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({data}) => {
  let navigate = useNavigate();

    return (
        <div className="group relative overflow-hidden h-44 w-64 bg-sky-300 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute w-56 h-36 bg-gray-50 z-10 top-4 left-4 opacity-50 rounded-2xl blur duration-300 group-hover:blur-none [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]"></div>
            <div className="absolute w-56 h-36 z-10 top-4 left-4 p-3 rounded-2xl flex flex-col justify-end items-start gap-4 [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]">
                <span className="text-red-800 text-xl font-extrabold">{data?.name}</span>
                <p className="text-gray-800 font-bold text-sm">AzureExplorer</p>
                <a href={data?.webUrl} target="_blank" className="bg-gray-50 px-3 py-2 rounded-xl hover:bg-sky-600 duration-300 w-full opacity-45 group-hover:opacity-100 text-xs">See {data?.reportType}</a>
                {/* <button onClick={()=> navigate(`/PowerBI/${data?.id}`)} className="bg-gray-50 px-3 py-2 rounded-xl hover:bg-sky-600 duration-300 w-full opacity-45 group-hover:opacity-100 text-xs">See {data?.reportType}</button> */}
            </div>
            <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" height="100" className="fill-sky-400 w-64 h-48 absolute -bottom-20 -left-32">
                <path d="M0,5A5,5,0,1,0,5,0,5,5,0,0,0,0,5ZM8.12,5A3.12,3.12,0,1,1,5,1.88,3.12,3.12,0,0,1,8.12,5Z"></path>
            </svg>
        </div>
    );
}

export default Card;