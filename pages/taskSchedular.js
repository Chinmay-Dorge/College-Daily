import React from 'react'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'
import {useSession , signIn , signOut } from 'next-auth/react';
import SignedOut from '../components/SignedOut';


export default function TaskSchedular() {
  const { data : session } = useSession();

  if(session){
    return (
      <>
        <Navbar />
        <TodoList />
      </>
    )
  }else{
    return (
      <>
        <Navbar />
        <SignedOut />
      </>
    )
  }
  
}
