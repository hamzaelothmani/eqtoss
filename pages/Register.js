import React, {useState} from 'react'
import Head from 'next/head'

import axios from "axios";
import Router from "next/router";

import { useSession, signIn, getProviders } from "next-auth/react";

const Register = ({providers}) => {

  const { data: session, status } = useSession();
  console.log(session, 'se ham');

  console.log(providers, "hhhhh");
    const [username , setUserame] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')

    const redirectToHome = () => {
      const { pathname } = Router;
      if (pathname === "/Register") {
        // TODO: redirect to a success register page
        Router.push("/");
      }
    };

    const registerUser = async () => {
        const res = await axios
          .post(
            "/api/authy",
            { username, email, password },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
          .then(async () => {
            await loginUser();
            redirectToHome();
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
      };

      const loginUser = async () => {
        const res= await signIn("credentials", {
          redirect: false,
          email: email,
          password: password,
          callbackUrl: `${window.location.origin}`,
        });
    
        res.error ? console.log(res.error) : redirectToHome();
      };
  return (
    <>
    <div>
        <Head>
          <title>PeapDeal | Register </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>



       
      </div>
  
      {Object.values(providers).map((provider) => (
                    
                    <div key={provider.name}>
                      <div className="pl-4">
                      <button
                          onClick={() => signIn(provider.id, { callbackUrl: `${process.env.URL_DEV}/` })}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className='bg-red-400 rounded'
                          >
                            hh
                          
                            {/* <!-- Linkedin --> */}
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              class="w-4 h-4"
                            > */}
                              {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                              {/* <path
                                fill="currentColor"
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                              />
                            </svg> */}
                          </button>
                      </div>
                    </div>
                  ))}
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                    onChange={((e)=> setUserame(e.target.value))}
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                    onChange={((e)=> setEmail(e.target.value))}
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                    onChange={((e)=> setPassword(e.target.value))}
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                 

                    <button onClick={()=> registerUser()}
                        type="submit"
                        class="w-full text-center py-3 bg-green bg-blue-400 rounded-lg text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark  mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </>
  )
}

export default Register


export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}