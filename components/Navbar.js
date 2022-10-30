import React from "react";
import Link from 'next/link'
import {useSession , signIn , signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-800">
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <Link href='/'><li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li></Link>
          <Link href='/'><li><a className="text-sm text-blue-600 font-bold" href="#">About Us</a></li></Link>
          <Link href='/'><li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li></Link>
          <Link href='/'><li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li></Link>
          <Link href='/contactFaculty'><li><a className="text-sm text-gray-400 hover:text-gray-500" href="#" >Contact</a></li></Link>
        </ul>
        {
          !session && status !== 'authenticated' && ( // if signed in
            <>
              <button onClick={()=>signIn()} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl">Login</button>            </>
          )
        }
        {
          session && status !== 'unauthenticated' && (
            <button onClick={()=>signOut()} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl">SignOut</button>
          )
        }
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close">
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <Link href='/'><li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li></Link>
              <Link href='/'><li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
              </li></Link>
              <Link href='/'><li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
              </li></Link>
              <Link href='/'><li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
              </li></Link>
              <Link href='/contactFaculty'><li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
              </li></Link>
            </ul>
          </div>

          <div className="mt-auto">
            <div className="pt-6">
              <button onClick={()=>signIn()} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl">Login</button>
              <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
