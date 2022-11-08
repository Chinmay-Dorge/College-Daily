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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className={styles.skills}>
                <span>Web Design</span>
                <span>Photoshop & Illustrator</span>
                <span>Coding</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default aboutus