import React from 'react'
import FacultyCard from '../components/FacultyCard'
import Navbar from '../components/Navbar'

export default function ContactFaculty() {
    return (
        <div className='bg-gray-700 h-screen'>
            <Navbar />
            <div className="faculty grid grid-cols-4 gap-4 place-items-center my-4">
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
            </div>
        </div>
    )
}
