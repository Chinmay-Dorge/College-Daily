import Navbar from '../components/Navbar'
import Link from 'next/link'
import {useSession , signIn , signOut } from 'next-auth/react';
import TimeTable from '../components/TimeTable';
import TT from '../components/TT';
import Landing from '../components/Landing';

export default function Home() {
  const { data : session } = useSession();

  if(session){
    return (
      <div className="home overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <div className='h-screen bg-neutral-900 text-neutral-300 text-2xl'>
        <div className='flex items-center justify-center p-5'>Welcome {session.user.name} </div>
          <div className='flex items-center justify-center p-5'>TimeTable</div>
          <TT />

          <div className='flex justify-evenly p-10'>
            <Link href="/taskSchedular" className=''>
              <p> <button> Task Schedular </button> </p>
            </Link>

            <Link href="/undermaintenance" className=''>
              <p> <button> Track CodeForces </button> </p>
            </Link>
          </div>

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
        <Landing />
      </div>
    )
  }
}
