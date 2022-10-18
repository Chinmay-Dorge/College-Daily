import Navbar from '../components/Navbar'
import {useSession , signIn , signOut } from 'next-auth/react';

export default function Home() {
  const { data : session } = useSession();

  if(session){
    return (
      <div className="home ">
        <Navbar />
        <div className='h-screen bg-gray-700 text-gray-400 text-2xl'>
          this is homepage
        </div>
      </div>
    )
  }else{
    return (
      <div className="home ">
        <Navbar />
        <div className='h-screen bg-gray-700 text-gray-400 text-2xl'>
          You are not signed In
        </div>
      </div>
    )
  }
}
