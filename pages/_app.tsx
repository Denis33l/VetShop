import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../componets/Header/Header'
import Main from '../componets/Main/Main'
import Rules from '../componets/Rules/Rules'
import Works from '../componets/Works/Works'
import Veterinarins from '../componets/Veterinarians/Veterinarians'
import Pets from '../componets/Pets/Pets'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main />
      <Rules />
      <Works />
      <Veterinarins />
      <Pets /> 
      <Component {...pageProps} />
    </>
  )
}
