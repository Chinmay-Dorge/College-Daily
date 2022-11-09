import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { da } from 'date-fns/locale';
import UnderMaintenance from '../components/UnderMaintenance';
import {useSession , signIn , signOut } from 'next-auth/react';
import SignedOut from '../components/SignedOut';


export default function codeforces() {
    const { data : session } = useSession();
    

    let codeforcesUrl = "https://codeforces.com/api/user.rating?handle=arush_panwar";
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get(codeforcesUrl).then(
            (response) => {
                console.log(response.data);
                setData(response.data);
            }
        )
    }

    if(session){
        return (
            <div>
                <UnderMaintenance />
                {/* <Navbar />
                track your codeforces account.
                <button onClick={getData} className="bg-black text-white p-20">Click ME</button>
                {data} */}
            </div>
        )
    }else{
        return(
            <>
                <Navbar />
                <SignedOut />
            </>
        )
    }
    
}
