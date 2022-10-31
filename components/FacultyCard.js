import React from 'react'
import Image from 'next/image'

const FacultyCard = () => {
  return (
    <div>
      <div className="flex flex-col w-[300px] h-[400px] items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-neutral-800">
        <div className="flex flex-col items-center pb-10">
          <div className="mb-4 mt-4 w-[150px] h-[150px] rounded-full shadow-lg bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat"></div>
          <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Vishal Krishna Singh</h5>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">MultiTalented</span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">+91-9876543210</span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">vks@iiitl.ac.in</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <div href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-neutral-900 dark:text-white dark:border-neutral-900 dark:hover:bg-amber-300 dark:hover:border-amber-300 dark:focus:ring-gray-700 hover:text-neutral-900">Message</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FacultyCard