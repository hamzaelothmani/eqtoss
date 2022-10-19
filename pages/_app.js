import Layout from '../layout/Layout'
import '../styles/globals.css'
// import { TodosProvider } from './contexts/Context';


import { SessionProvider } from "next-auth/react";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size:4,
  color:'#D55114',
  className:"z-50",
  delay:100,
});

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)
function MyApp({ Component, pageProps: { session, ...pageProps } }) {


  return (
    <>
<SessionProvider session={session} >

{/* <TodosProvider> */}


    <Layout>
    <Component {...pageProps} />
    </Layout>
{/* </TodosProvider> */}



</SessionProvider>
    </>
  )
  
}

export default MyApp
