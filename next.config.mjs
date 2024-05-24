import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
});

const nextConfig = {
  // other Next.js config options here
};

export default withPWA(nextConfig);
