import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/company/clients-partners', destination: '/partners', permanent: true },
      { source: '/solutions/iot', destination: '/services/iot-solutions', permanent: true },
      { source: '/solutions/mobile-apps', destination: '/services/mobile-app-development', permanent: true },
      { source: '/solutions/moodle', destination: '/services/lms-development', permanent: true },
      { source: '/solutions/elearning', destination: '/services/elearning-development', permanent: true },
      { source: '/solutions/erp', destination: '/services/erp-solutions', permanent: true },
      { source: '/solutions/custom-software', destination: '/services', permanent: true },
      { source: '/certifications', destination: '/about', permanent: true },
    ]
  },
}

export default nextConfig
