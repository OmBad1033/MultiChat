import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MultiChat - AI-Powered Social Media Automation',
    short_name: 'MultiChat',
    description: 'Automate your social media interactions with MultiChat\'s AI-powered platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#EAEEFE',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}