import 'tailwindcss/tailwind.css'
import React,{useEfeect,useState} from 'react'
import '../styles/globals.scss'
import {Layout} from '../components'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
