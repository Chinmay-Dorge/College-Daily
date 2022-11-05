import Navbar from '../components/Navbar'
import Link from 'next/link'
import {useSession , signIn , signOut } from 'next-auth/react';
import TimeTable from '../components/TimeTable';
import TT from '../components/TT';


export default function Home() {
  const { data : session } = useSession();

  if(session){
    return (
      <div className="home ">
        <Navbar />
        <div className='h-screen bg-gray-900 text-gray-400 text-2xl'>
          <div className='flex items-center justify-center p-5'>TimeTable</div>
          
          <TT />

          <Link href="/taskSchedular">
            <p> <button> Task Schedular </button> </p>
          </Link>

        </div>
      </div>
    )
  }else{
    return (
      <div className="home ">
        <Navbar />
        <div className='h-screen bg-neutral-900 text-gray-400 text-2xl'>
          You are not signed In
        </div>
      </div>
    )
  }
}
