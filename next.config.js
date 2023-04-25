/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    GOOGLE_ID: '804265934493-m541ra2aptirvbf1dk1odj3vkdd7gdh4.apps.googleusercontent.com',
    GOOGLE_SECRET:'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'
  },
}

module.exports = nextConfig
