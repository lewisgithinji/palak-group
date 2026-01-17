/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable x-powered-by header
  poweredByHeader: false,

  // NOTE: Security headers are configured via public/_headers file
  // This is because Next.js headers() function doesn't work with static export
  // Cloudflare Pages will read the _headers file and apply them
}

module.exports = nextConfig
