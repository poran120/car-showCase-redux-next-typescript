// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     } as {
//       clientId: string;
//       clientSecret: string;
//     }),
//     // GithubProvider
//   ],
// });

// export { handler as GET, handler as POST };

//Github Authentication
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // } as {
    //   clientId: string;
    //   clientSecret: string;
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as {
      clientId: string;
      clientSecret: string;
    }),
  ],
});

export { handler as GET, handler as POST };
