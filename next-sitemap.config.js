const nextConfig = {
  // Other configurations...
  async head() {
    return [
      {
        key: 'google-site-verification',
        value: 'googlef175438ea0990b88.html',
      },
    ];
  },
  siteUrl: 'https://poovendran.netlify.app',
  generateRobotsTxt: true,
};

export default nextConfig;
