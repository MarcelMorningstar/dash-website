import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Window from '@/components/Window'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Dash</title>
        <meta name="description" content="Taxi services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
