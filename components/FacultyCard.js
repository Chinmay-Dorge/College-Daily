import React from 'react'
import Image from 'next/image'

const FacultyCard = () => {
  return (
    <div>
      <div className="flex flex-col w-[300px] h-[400px] items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-[150px] rounded-full shadow-lg" src="https://iiitl.ac.in/wp-content/uploads/2019/09/Dr.-Vishal-Krishna-Singh-300x288.jpg" alt="Teacher image" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Vishal Krishna Singh</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">MultiTalented</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">+91-9876543210</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">vks@iiitl.ac.in</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <div href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FacultyCard