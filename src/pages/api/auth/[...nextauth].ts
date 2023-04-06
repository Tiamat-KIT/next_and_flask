//import { FB_Options } from "@/libs/firebase";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const GoogleID = process.env.GOOGLE_ID 
const GoogleSecret = process.env.GOOGLE_SECRET
const NextAuth_Secret = process.env.NEXTAUTH_SECRET 

/* const NextAuthConfig = NextAuth({
    providers: [
        GoogleProvider({
            clientId: GoogleID as string,
            clientSecret: GoogleSecret as string
        })
    ],
    secret: NextAuth_Secret as string,
    // Adapterはなかなか動かない
    adapter :FirestoreAdapter(FB_Options),
    session: {
        strategy: "jwt",
        maxAge: 30*24*60*60    
    },

})
export default NextAuthConfig */