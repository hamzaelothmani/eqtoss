import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
import { useSession, signIn } from "next-auth/react";

const Register = () => {
  const { data: session, status } = useSession();
  // console.log(session, 'se ham'); // Removed unnecessary console.log
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const redirectToHome = () => {
    const { pathname } = Router;
    if (pathname === "/Register") {
      Router.push("/");
    }
  };

  const loginUser = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}`,
    });

    if (res?.error) {
      setMessage(res.error);
    } else {
      redirectToHome();
    }
  };

  const registerUser = async () => {
    try {
      await axios.post(
        "/api/authy",
        { username, email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      await loginUser();
    } catch (error) {
      setMessage(
        error?.response?.data?.error || "An error occurred during registration."
      ); //handle server errors
    }
  };

  return (
    <>
      <div>
        <Head>
          <title>eQToss | Register </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      {message && (
        <div className="rounded-md fixed left-0 right-0 bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Errors with your submission
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul role="list" className="list-disc pl-5 space-y-1">
                  <li> {message} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              onClick={() => registerUser()}
              type="submit"
              className="w-full text-center py-3 bg-green bg-blue-400 rounded-lg text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark  mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
