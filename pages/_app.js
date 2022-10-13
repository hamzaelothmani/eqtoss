import Layout from '../layout/Layout'
import '../styles/globals.css'
// import { TodosProvider } from './contexts/Context';


import { SessionProvider } from "next-auth/react";

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
