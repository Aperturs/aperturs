import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Coming Soon!</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Our website is coming soon!
        </h1>
        <p className="mt-8 text-2xl">
          We are working hard to create an awesome experience for you.
        </p>
        <div className="mt-8 space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 border border-gray-400 rounded-md"
          />
          <button
            type="button"
            className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md"
          >
            Notify me
          </button>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-16 border-t">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Aperturs. All rights reserved.
        </p>
      </footer>
    </div>
     
    </>
  )
}
