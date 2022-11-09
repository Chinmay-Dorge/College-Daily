import React from 'react'
import FacultyCard from '../components/FacultyCard'
import Navbar from '../components/Navbar'

export default function ContactFaculty() {
    return (
        <div className='bg-neutral-900 h-screen'>
            <Navbar />
            <div className="faculty grid grid-cols-4 gap-4 place-items-center mt-6">
                <FacultyCard name="DR. VISHAL KRISHNA SINGH" title="Faculty In-Charge (Placements)" no="+91-987654321" email="vks@iiitl.ac.in" image="https://iiitl.ac.in/wp-content/uploads/2019/09/Dr.-Vishal-Krishna-Singh-300x288.jpg"/>
                <FacultyCard name="DR. NIHARIKA ANAND" title="Faculty In-Charge (Network)" no="+91-987654321" email="niharika@iiitl.ac.in" image="https://iiitl.ac.in/wp-content/uploads/2019/09/niharika-e1569760305721-300x300.jpeg"/>
                <FacultyCard name="DR. DHANANJOY DEY" title="Dean (IPR) & Dean(Academic)" no="+91-987654321" email="ddey@iiitl.ac.in" image="https://iiitl.ac.in/wp-content/uploads/2020/07/Dr.-Dhananjay-Dey-300x285.jpg"/>
                <FacultyCard name="DR. ABHINESH KAUSHIK" title="Faculty In-Charge (Student Activity)" no="+91-987654321" email="abhinesh@iiitl.ac.in" image="https://iiitl.ac.in/wp-content/uploads/2022/01/Dr.-Abhinesh-Kaushik-300x300.jpg"/>
            </div>
        </div>
    )
}
