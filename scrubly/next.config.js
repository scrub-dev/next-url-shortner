/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

// const securityHeaders = [
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload'
//   }
// ]

// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/:path*',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }

module.exports = nextConfig
