import React from 'react'
import styles from '../styles/aboutus.module.css'
import Navbar from '../components/Navbar'

const aboutus = () => {
  return (
    <div>
    <Navbar />
        <div className={styles.abt}>
        <div className={styles.innerContainer}>
            <h1>About Us</h1>
            <p className={styles.text}>
              College Daily is a utility web app that will help students go through their day-to-day problems in their college life, for example in course schedule, tracking codeforces records, scheduling tasks and many more yet to come ...
            </p>
            <div className={styles.skills}>
                <span>!!</span>
                <span>Work in Progress</span>
                <span>!!</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default aboutus