/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    OKTA_DOMAIN_AUTH: process.env.OKTA_DOMAIN_AUTH,
    OKTA_CLIENT_ID: process.env.OKTA_CLIENT_ID,
  },
};

module.exports = nextConfig;
