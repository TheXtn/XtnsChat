import {ConnectToDb} from "../../../lib/db";
import {verif} from "../../../lib/auth";
import Providers from "next-auth/providers";
import NextAuth from "next-auth";
export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await ConnectToDb();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found with this email.');
        }

        const isValid = await verif(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Check your password .');
        }

        client.close();
        return { email: user.email,name:user.name};

      },
    }),
  ],
   callbacks: {

    async session(session, user) {
      session.user.name=user.name
      return session
    },

  },
});