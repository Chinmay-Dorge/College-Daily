import React from 'react'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'
import {useSession , signIn , signOut } from 'next-auth/react';


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
        <p> Login to see Task Schedular </p>
      </>
    )
  }
  
}
