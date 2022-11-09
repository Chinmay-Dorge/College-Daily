import React from 'react'
import styles from '../styles/signedout.module.css'

const SignedOut = () => {
  return (
    <div>
        <div className={styles.signout}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1 className={styles.heading1}>OOPS !</h1>
                    <h2 className={styles.heading2}>You are not signed in </h2>
                </div>
            </div>
	    </div>
    </div>
  )
}

export default SignedOut