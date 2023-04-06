/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages :[
      "@next-auth/firebase-adapter"
    ]
  },
}

module.exports = nextConfig
