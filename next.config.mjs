import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
