/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Masterofowls" : "",
  assetPrefix: isProd ? "/Masterofowls/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Optimize production builds
  swcMinify: true,

  compiler: {
    removeConsole: isProd
      ? {
          exclude: ["error", "warn"],
        }
      : false,
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Code splitting optimization
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
            priority: 20,
          },
          // Three.js separate chunk
          three: {
            name: "three",
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            priority: 30,
          },
          // Common shared code
          common: {
            name: "common",
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
