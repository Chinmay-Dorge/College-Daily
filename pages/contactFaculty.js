import React from 'react'
import FacultyCard from '../components/FacultyCard'
import Navbar from '../components/Navbar'

export default function ContactFaculty() {
    return (
        <div className='bg-neutral-900 h-screen'>
            <Navbar />
            <div className="faculty grid grid-cols-4 gap-4 place-items-center mt-6">
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
