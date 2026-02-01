/** @type {import('next').NextConfig} */
export default {
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  basePath : process.env.NEXT_PUBLIC_BASE_PATH || "/ekaterina",
  images: {unoptimized : true},
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'embla-carousel-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-label',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      'sonner',
      'next'
    ],
  },
};
