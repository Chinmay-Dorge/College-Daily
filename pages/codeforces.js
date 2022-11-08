import React,{useState} from 'react'
import Navbar from '../components/Navbar'

let codeforcesUrl = "https://codeforces.com/api/user.rating?handle=arush_panwar";

const codeforces = () => {
    const [profile, setProfile] = React.useState();
    fetch(codeforcesUrl)
        .then(data => {
            return data.json();
        })
        .then(post => {
            // console.log(post.result[0]);
            setProfile(post);
        });


    return (
        <div>
            <Navbar />
            track your codeforces account.
        </div>
    )
}

export default codeforces