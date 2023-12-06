/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

const nextConfig = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    // using same values here but diff values can be used for DEV env.
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'rohan9808',
        mongodb_password: 'rohan%4010',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'nextjs-blog'
      }
    }
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'rohan9808',
      mongodb_password: 'rohan%4010',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'nextjs-blog'
    }
  }
  
}

module.exports = nextConfig
