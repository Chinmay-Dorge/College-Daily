import React from 'react'
import Navbar from '../components/Navbar'
import { IoBuild } from 'react-icons/io5';

const undermaintenance = () => {
    return (
        <div>
            <Navbar />
            <div className="flex bg-gray-900 text-white">
                <div className='p-[200px]'>
                    <IoBuild className="text-9xl" />
                    <h1 className='text-[60px] font-bold'>Down for Maintenance</h1>
                    <p className='text-[20px]'>This page is currently undermaintenance. Please wait...</p>
                </div>
                <img src="image.svg" alt="" />
            </div>
        </div>
    )
}

export default undermaintenance