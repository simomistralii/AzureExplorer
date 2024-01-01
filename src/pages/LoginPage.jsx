import React from 'react';
import banner from '../assets/banner-5.png'
import { CiLogin } from "react-icons/ci";


const LoginPage = ({ login, user }) => {
  return (
    <>
        <section class="bg-gray-900 h-[100vh] overflow-x-hidden overflow-y-hidden">
          <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 h-[100vh]">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">AzureExplorer</h1>
              <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Your gateway to a world of Azure integration. Effortlessly explore and view reports deployed in Azure Portal, with more exciting functionalities on the horizon.</p>
              <div class="space-y-4 flex justify-center">
                <button onClick={login} href="https://github.com/themesberg/landwind" class="flex items-center justify-center space-x-1.5 w-full px-5 py-2 text-sm font-medium text-center border rounded-lg sm:w-auto focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                  <CiLogin size={18} />
                  <span>Login</span>
                </button>
              </div>
            </div>
            <div class=" lg:mt-0 lg:col-span-4 lg:flex">
              <img src={banner} alt="AzureExplorer" />
            </div>
          </div>
        </section>


     


   
    </>
  );
};

export default LoginPage;
