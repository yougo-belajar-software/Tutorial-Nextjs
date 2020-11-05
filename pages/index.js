import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>My Awesome Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tutorial Next.js
        </h1>
        <p>
          Counter : {counter}
          <button onClick={() => setCounter(counter + 1)}>Tambah </button>
        </p>

        <p className={styles.description}>
            Jangan Lupa subscribe channel saya, Yougo
        </p>

        
      </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
    </div>
  )
}
