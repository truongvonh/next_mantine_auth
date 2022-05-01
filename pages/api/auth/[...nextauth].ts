import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.OAUTH_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_SECRET as string,
      issuer: process.env.OAUTH_DOMAIN,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token }): Promise<unknown> {
      return token;
    },
  },
});
