/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const deps = require('./package.json')
// const sharedDeps = require('../package.json')

const remotes = isServer => {
  const location = isServer ? 'chunks' : 'chunks';
  return {
    host: `host@http://localhost:3000/_next/static/${location}/remoteEntry.js`
  };
};

module.exports = {
  transpilePackages: ['shared'],
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: remotes(options.isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./content": "@shared/components/content.tsx"
        },
        shared: {
          react: {
            requiredVersion: deps.dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: deps.dependencies['react-dom'],
            singleton: true,
            eager: true,
          },
          'next': {
            requiredVersion: deps.dependencies.next,
            singleton: true,
            eager: true,
          },
        },
        extraOptions: {
          exposePages: false,
          // skipSharingNextInternals: true,
          // automaticAsyncBoundary: true,
        },
      }),
    );

    // config.optimization.splitChunks = false;

    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
};