import { CompleteChallenges } from '../components/CompleteChallenges'
import { Countdown } from '../components/Countdown'
import { Experiencebar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { createContext } from 'react'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}



export default function Home(props) {
  console.log(props)

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={styles.container}>
        <Head>
          <title>NLW4</title>
        </Head>

        <Experiencebar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } =ctx.req.cookies

  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}