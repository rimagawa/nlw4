import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fplu19-1.fna.fbcdn.net/v/t51.2885-19/s150x150/13643632_1067255139989772_652563301_a.jpg?_nc_ht=instagram.fplu19-1.fna.fbcdn.net&_nc_ohc=eu7prdEnc0QAX-zVUeD&tp=1&oh=e39cfe272e9f7d63f3f148cc0eed4b55&oe=605D47ED" alt="profile pic" />
            <div>
                <strong>Rafael Imagawa</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level } 
                </p>
            </div>
        </div>
    )
}