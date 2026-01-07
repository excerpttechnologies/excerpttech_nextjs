<<<<<<< HEAD
=======
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//       },
//     ],
//     unoptimized: false, // Enable image optimization
//     formats: ['image/webp', 'image/avif'], // Use modern formats
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   // Enable experimental features for better performance
//   experimental: {
//     optimizePackageImports: ['@mui/material', '@mui/icons-material'],
//   },
//   // Output configuration
//   output: 'standalone', // For better deployment
//   // Performance optimizations
//   compress: true,
//   poweredByHeader: false, // Remove X-Powered-By header
//   reactStrictMode: true,
//   // SWC minification is enabled by default in Next.js 13+
// };

// export default nextConfig;


>>>>>>> a4dd6bd13fe9c11c027778c3227cd524dccba934
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
<<<<<<< HEAD
};

export default nextConfig;
=======
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    unoptimized: false, // Enable image optimization
    formats: ['image/webp', 'image/avif'], // Use modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // DISABLED experimental features that might use Turbopack
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    // Explicitly disable Turbopack
    turbo: undefined,
  },
  // Output configuration
  output: 'standalone', // For better deployment
  // Performance optimizations
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  // SWC minification is enabled by default in Next.js 13+
};

export default nextConfig;
>>>>>>> a4dd6bd13fe9c11c027778c3227cd524dccba934
