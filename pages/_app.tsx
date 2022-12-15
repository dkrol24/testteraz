import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { store } from '../redux/store';
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return(
    //Higher order component
    <SessionProvider session={session}>
    <Provider store={store}>
    <Toaster />
    <Component {...pageProps} />
  </Provider>
  </SessionProvider>
)}

export default MyApp
