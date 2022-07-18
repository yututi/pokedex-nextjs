import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const PokemonList = dynamic(() => import("@/components/PokemonList"), { suspense: true })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Suspense fallback={"fafds"}>
          <PokemonList></PokemonList>
        </Suspense>
      </main>
    </div>
  )
}

export default Home
