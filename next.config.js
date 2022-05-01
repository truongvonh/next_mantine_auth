/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'vi-VN'],
    defaultLocale: 'en-US',
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    OKTA_DOMAIN_AUTH: process.env.OKTA_DOMAIN_AUTH,
    OKTA_CLIENT_ID: process.env.OKTA_CLIENT_ID,
    APP_DOMAIN: process.env.APP_DOMAIN,
    OAUTH_DOMAIN: process.env.OAUTH_DOMAIN,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_SECRET: process.env.OAUTH_SECRET,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
};

module.exports = nextConfig;
