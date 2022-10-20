import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../model/User";
import dbConnect from "../../../lib/dbConnect";





export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   profile(profile) {
      //     return {
      //        id: profile.id,
      //        name: profile.name,
      //        email: profile.email,
      //        image: profile.avatar_url,
      //        role: 'USER',
      //     }
      //  },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          
          throw new Error("Email is not registered");
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials.password,
          user.hashedPassword
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }
        return user;
      },
    }),
   
    
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  pages:{
    signIn: "/Login",
    
  
    
  }
  , 
  session : {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV !== "production",

  // cause the proplem
  // jwt :{
  //   secret: process.env.NEXTAUTH_JWT_SECRET
  // },
  // secret: process.env.NEXTAUTH_SECRET
//
})