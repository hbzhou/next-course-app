/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler:{
    styledComponents:true
  },
  typescript:{
    ignoreBuildErrors:true
  }
}

module.exports = nextConfig
